<template>
  <div>
    <h3>
      New Subject
    </h3>
    <div class="list">

      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Name
        </span>
            <input
                    class="full-width text-center"
                    v-model="subject.name"
            >
          </div>
        </div>
      </div>
      <hr>
    </div>
    <br>
    <br>
    <button class="outline negative pull-left" @click="$emit('closeModal')">
      <i class="on-left">close</i> Close
    </button>
    <button class="secondary pull-right" @click="createSubject">
      <i class="on-left">done</i> Save
    </button>
    <br>
    <br>
  </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  let subjectRef = db.ref('school/subjects')
  import {Toast} from 'quasar'
  export default {
    data () {
      return {
        subject: {
          name: '',
          totalQuestions: 0,
          usagesNumber: 0
        }
      }
    },
    methods: {
      createSubject: function () {
        subjectRef.push(this.subject)
        Toast.create.positive({
          html: 'Subject has been created!'
        })
        this.$emit('closeModal')
      }
    }
  }
</script>

<style>
</style>
