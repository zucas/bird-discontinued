<template>
  <div>
    <div class="card shadow-4 round-borders" style="min-width: 98%">
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Subject
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
          <div class="list">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Name
        </span>
            <input 
                  @input="$v.subject.name.$touch()"
                   class="full-width text-center"
                   v-model="subject.name" 
                   name='name'
                   :class="{'has-error': $v.subject.name.$error}">
                   <span v-if='$v.subject.name.$error'>Name is required and need be 2 or more chars</span>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="card-actions card-no-top-padding">
              <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small"@click="createSubject"><i class="on-left">done</i>Save</button>
    </div>
    </div>
  </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  let subjectRef = db.ref('school/questions')
  import {Toast} from 'quasar'
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        haveError: false,
        subject: {
          name: '',
          totalQuestions: 0,
          usagesNumber: 0
        }
      }
    },
    validations: {
      subject: {
        name: { required, minLength: minLength(2) }
      }
    },
    methods: {
      createSubject: function () {
        this.$v.subject.$touch()
        if (this.$v.subject.$error) {
          Toast.create.negative('Please review fields again.')
          return
        }
        else {
          subjectRef.push(this.subject)
          this.subject.name = ''
          Toast.create.positive({
            html: 'Subject has been created!'
          })
          this.$emit('closeModal')
        }
      }
    }
  }
</script>

<style>
</style>
