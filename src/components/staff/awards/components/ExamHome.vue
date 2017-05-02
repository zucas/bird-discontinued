<template>
  <div>
    <div class="row">
      <div class="card text-center bg-negative text-white" style="padding-bottom: 20px;" @click="$emit('showTable')">
        <div class="card-title no-padding">
          <h3>{{ examsSize }}</h3>
        </div>
        <div class="card-content no-padding">
          Total Exams
        </div>
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
