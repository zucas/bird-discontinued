<template>
  <div>
    <ExamsCardTotal></ExamsCardTotal>
    <exams-table class="shadow-3"></exams-table>
    <exams-stats></exams-stats>
  </div>
</template>

<script>
  import ExamsTable from './ExamTable.vue'
  import ExamsStats from './ExamStats.vue'
  import ExamsCardTotal from './ExamsCardTotal.vue'
  export default {
    data () {
      return {}
    },
    components: {
      ExamsTable, ExamsStats, ExamsCardTotal
    }
  }
</script>

<style>

</style>
