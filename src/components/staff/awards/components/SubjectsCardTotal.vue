<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
                <div class="card-title no-padding">
                    <h3>{{ subjects.total_subjects }}</h3>
                </div>
                <div class="card-content no-padding">
                    <h5>Total Subjects</h5>
                </div>
            </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
const dbRoot = db.ref()
const subjectsRef = dbRoot.child('school')
export default {
  firebase () {
    return {
      subjects: {
        source: subjectsRef,
        asObject: true
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
