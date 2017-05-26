<template>
    <div>
      <div class="card shadow-4" style="min-width: 98%">
        <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Question
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
          <div class="list">
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-warning text-white">
                Subject
            </span>
                        <q-autocomplete
                        v-model="subject" 
                        @search="search">
                            <input v-model="subject" 
                            @input="$v.subject.$touch()"
                            class="full-width text-center"
                                   placeholder="Type the name of Subject."
                                    :class="{'has-error': $v.subject.$error}"/>                            
                        </q-autocomplete>
                        <span v-if='$v.subject.$error' class="text-red">Subject is required and must be two or more chars</span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Statement
        </span>
                        <input
                                class="full-width text-center"
                                v-model="question.statement"
                                @input="$v.question.statement.$touch()"
                                :class="{'has-error': $v.question.statement.$error}"/>                        
                        <span v-if='$v.question.statement.$error'class="text-red">
                          Statement is required and must be two or more chars
                        </span>
                    </div>
                </div>
            </div>
            <template v-for="(alternative, i) in 5">
                <hr>
                <div class="item multiple-lines">
                    <div class="item-content">
                        <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Alternative {{ alternativeNumber(i) }}
        </span>
                            <input
                                    class="full-width text-center"
                                    v-model="question.alternatives[i]"
                                    @input="$v.question.alternatives.$touch()"
                                :class="{'has-error': $v.question.alternatives.$error}"/>
                            <span v-if='$v.question.statement.$error' class="text-red">
                              All five alternatives are required
                            </span>
                        </div>
                    </div>
                </div>
            </template>
            <hr>
            <div class="list-label">Correct</div>
            <div class="item two-lines">
                <div class="item-content">
                    <q-select
                            class="full-width text-center"
                            type="list"
                            v-model="question.ta"
                            :options="alternativeOptions"
                            @input="$v.question.ta.$touch()"
                            :class="{'has-error': $v.question.ta.$error}"/>                        
                    </q-select>
                            <span v-if='$v.question.statement.$error'>
                              Correct Alternativ must be selected
                            </span>
                </div>
            </div>
        </div>
                <br>
        <q-uploader
                @add="addFile"
                :url="url"
                :labels="labels"
                extensions=".gif,.jpg,.jpeg,.png"
                hide-upload-button
        >
        </q-uploader>
        </div>
              <div class="card-actions card-no-top-padding">
         <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small" @click="createQuestion"><i class="on-left">done</i>Save</button>
      </div>
      </div>
      
        

    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const questionsRef = rootRef.child('school/questions')
  import {Utils, Toast} from 'quasar'
  import firebase from 'firebase'
  const uploadRef = firebase.storage().ref()
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    firebase () {
      return {
        subjectArray: questionsRef
      }
    },
    data () {
      return {
        labels: {
          add: '<i class="on-left">add</i> ADD Image'
        },
        file: {},
        url: '',
        equipament: {},
        subject: '',
        question: {
          ck: Math.random(),
          hasImage: false,
          statement: '',
          alternatives: ['', '', '', '', ''],
          ta: '',
          totalCalls: 0,
          hitRate: 0,
          imgLink: ''
        }
      }
    },
    validations: {
      subject: { required, minLength: minLength(2) },
      question: {
        statement: { required, minLength: minLength(2) },
        alternatives: {
          required,
          $each: {
            required
          }
        },
        ta: { required }
      }
    },
    computed: {
      alternativeOptions: function () {
        return [
          {label: this.question.alternatives[0], value: '0'},
          {label: this.question.alternatives[1], value: '1'},
          {label: this.question.alternatives[2], value: '2'},
          {label: this.question.alternatives[3], value: '3'},
          {label: this.question.alternatives[4], value: '4'}
        ]
      }
    },
    methods: {
      addFile: function (files) {
        this.file = files[0]
        this.question.hasImage = true
      },
      createQuestion: function () {
        // Verify Have Image to Uploads
        if (this.question.hasImage) {
          let uid = Utils.uid()
          uploadRef.child('school/questions/images/' + uid).put(this.file)
          this.question.imgLink = 'school/questions/images/' + uid
        }
        this.$v.question.$touch()
        if (this.$v.question.$error) {
          Toast.create.negative('Please review fields again.')
          return
        }
        // Whitout Erros, Send Question to DB.
        else {
          questionsRef.child(this.subject).push(this.question)
          Toast.create.positive({
            html: 'Question has been created!'
          })
          this.$emit('closeModal')
        }
      },
      search (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.parsedSubject()}))
        }, 0)
      },
      alternativeNumber (i) {
        return ++i
      },
      parsedSubject () {
        return this.subjectArray.map(o => {
          return {
            label: o['.key'],
            value: o['.key']
          }
        })
      }
    }
  }
</script>

<style>
</style>
