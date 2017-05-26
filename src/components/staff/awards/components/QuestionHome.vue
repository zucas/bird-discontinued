<template>
    <div>
      <QuestionCardTotal></QuestionCardTotal>
        <question-table class="shadow-3" @showDetails="$emit('showDetails')"></question-table>

       
    </div>
</template>


<script>
  import QuestionTable from './QuestionTable.vue'
  import QuestionStats from './QuestionStats.vue'
  import QuestionCardTotal from './QuestionsCardTotal.vue'
  export default {
    data () {
      return {}
    },
    methods: {
      addQuestion: function () {
        this.$emit('newQuestion')
      }
    },
    components: {
      QuestionTable, QuestionStats, QuestionCardTotal
    }
  }
</script>

<style>

</style>
