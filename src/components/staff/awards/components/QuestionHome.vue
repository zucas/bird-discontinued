<template>
    <div>
        <div class="row">
            <div class="card text-center bg-primary text-white">
                <div class="card-title">
                    <h4>{{ questionsSize }}</h4>
                </div>
                <div class="card-content">
                    Total Questions
                </div>
            </div>
        </div>

        <question-table @showDetails="$emit('showDetails')"></question-table>

        <question-stats></question-stats>
    </div>
</template>


<script>
  import QuestionTable from './QuestionTable.vue'
  import QuestionStats from './QuestionStats.vue'
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const questionsRef = dbRoot.child('school/questions')
  export default {
    firebase () {
      return {
        questions: questionsRef,
        questionsArray: questionsRef
      }
    },
    data () {
      return {}
    },
    methods: {
      totalClick: function () {
        this.$emit('showTable')
      },
      numberOfCorrect: function (i) {
        let count = 0
        this.questionsArray.forEach(question => {
          if (parseInt(question.ta) === i) {
            count++
          }
        })
        return count
      }
    },
    computed: {
      questionsSize: function () {
        return this.questionsArray.length
      }
    },
    components: {
      QuestionTable, QuestionStats
    }
  }
</script>

<style>

</style>
