<template>
  <div>
          <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;" >
        <div class="card-title no-padding">
          <h3>{{ examsSize }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Total Exams</h5>
        </div>
      </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
const dbRoot = db.ref()
const examsRef = dbRoot.child('school/exams')
export default {
  firebase () {
    return {
      examsArray: examsRef
    }
  },
  data () {
    return {}
  },
  computed: {
    examsSize: function () {
      return this.examsArray.length
    }
  }
}
</script>

<style>
</style>
