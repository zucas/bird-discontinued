<template>
    <div>
        <div class="row" v-if="questionsArray.length > 0">

            <div class="card text-center bg-primary text-white">
                <div class="card-title no-padding">
                    <h3>{{ questionsSize }}</h3>
                </div>
                <div class="card-content no-padding">
                    <h5>Total Questions</h5>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="notice warning">
                You don't created any questions. Click <button class="positive" @click="addQuestion"> HERE </button> tou create your fist one!
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
      addQuestion: function () {
        this.$emit('newQuestion')
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
