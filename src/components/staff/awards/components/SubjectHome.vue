<template>
    <div>
        <div class="row">
            <div class="card text-center bg-primary text-white" style="padding-bottom: 20px;">
                <div class="card-title no-padding">
                    <h3>{{ subjectsSize }}</h3>
                </div>
                <div class="card-content no-padding">
                    Total Subjects
                </div>
            </div>
        </div>
        <div class="row">
          <subject-list></subject-list>
        </div>
          <subject-stats></subject-stats>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const subjectsRef = dbRoot.child('school/subjects')
  import SubjectList from '../components/SubjectList.vue'
  import SubjectStats from '../components/SubjectStats.vue'
  export default {
    firebase () {
      return {
        subjectsArray: subjectsRef
      }
    },
    data () {
      return {}
    },
    computed: {
      subjectsSize: function () {
        return this.subjectsArray.length
      }
    },
    components: {
      SubjectList, SubjectStats
    }
  }
</script>

<style>

</style>
