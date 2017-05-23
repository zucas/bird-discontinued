<template>
    <div>
      <SubjectsCardTotal></SubjectsCardTotal>
        <div class="row">
          <subject-list class="shadow-3"></subject-list>
        </div>
          <subject-stats></subject-stats>
    </div>
</template>

<script>
  import SubjectList from '../components/SubjectList.vue'
  import SubjectStats from '../components/SubjectStats.vue'
  import SubjectsCardTotal from './SubjectsCardTotal.vue'
  export default {
    data () {
      return {}
    },
    components: {
      SubjectList, SubjectStats, SubjectsCardTotal
    }
  }
</script>

<style>

</style>
