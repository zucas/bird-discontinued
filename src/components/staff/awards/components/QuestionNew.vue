<template>
    <div>
        <h3>
            New Question
        </h3>
        <div class="list">
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-warning text-white">
                Subject
            </span>
                        <q-autocomplete v-model="question.subject" @search="search">
                            <input v-model="question.subject" class="full-width text-center"
                                   placeholder="Type the name of Subject."/>
                        </q-autocomplete>
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
                        >
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
                            >
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
                            :options="alternativeOptions">
                    </q-select>
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
        <br>
        <br>
        <button class="outline negative pull-left" @click="$emit('closeModal')">
            <i class="on-left">close</i> Close
        </button>
        <button class="secondary pull-right" @click="createQuestion">
            <i class="on-left">done</i> Save
        </button>
        <br>
        <br>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const questionsRef = rootRef.child('school/questions')
  const subjectRef = rootRef.child('school/subjects')
  import {Utils, Toast, LocalStorage} from 'quasar'
  import firebase from 'firebase'
  const uploadRef = firebase.storage().ref()
  export default {
    firebase () {
      return {
        subjectArray: subjectRef
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
        question: {
          hasImage: false,
          statement: '',
          subject: '',
          alternatives: ['', '', '', '', ''],
          ta: '',
          totalCalls: 0,
          hitRate: 0,
          imgLink: ''
        }
      }
    },
    mounted () {
      LocalStorage.set('teste', 'teste')
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
        if (this.question.hasImage) {
          let uid = Utils.uid()
          uploadRef.child('school/questions/images/' + uid).put(this.file)
          this.question.imgLink = 'school/questions/images/' + uid
        }
        questionsRef.push(this.question)
        Toast.create.positive({
          html: 'Question has been created!'
        })
        this.updateSubjectUsed()
        this.$emit('closeModal')
      },
      search (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.parsedSubject()}))
        }, 0)
      },
      alternativeNumber (i) {
        return ++i
      },
      updateSubjectUsed () {
        let subjectSelected = {}
        this.subjectArray.map(subject => {
          if (subject.name === this.question.subject) {
            subjectSelected = subject
          }
        })
        subjectRef.child(subjectSelected['.key']).update({'totalQuestions': ++(subjectSelected.totalQuestions)})
      },
      parsedSubject () {
        return this.subjectArray.map(o => {
          return {
            label: o.name,
            value: o['name'],
            key: o['.key']
          }
        })
      }
    }
  }
</script>

<style>
</style>
