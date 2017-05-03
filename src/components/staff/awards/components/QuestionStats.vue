<template>
    <div>
        <div class="row mobile-hide " v-if="questionsArray.length > 0">
            <div class="card">
                <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Used Subjects
                    </q-toolbar-title>
                    <button>
                        <i>close</i>
                    </button>
                </div>
                <div class="card-content" >
                    <donut-chart
                            id="usedSubjects"
                            :data="parsedSubjects"
                            style="color: white"
                            colors='[ "#ff1744",
                                      "#3d5afe",
                                      "#1de9b6", 
                                      "#76ff03", 
                                      "#37474f", 
                                      "#ff3d00", 
                                      "#00e5ff" ]'
                            resize="true">
                    </donut-chart>
                </div>
            </div>
            <div class="space"></div>
            <div class="card">
                <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Alternative Correct
                    </q-toolbar-title>
                    <button>
                        <i>close</i>
                    </button>
                </div>
                <div class="card-content">
                <donut-chart
                            id="alternativeCorrect"
                            :data="numberOfCorrect"
                            xkey="label"
                            colors='[ "#ff1744", "#3d5afe", "#1de9b6", "#76ff03", "#37474f" ]'
                            resize="true">
                    </donut-chart>                    
                </div>
            </div>
        </div>

            <div class="card mobile-only">
                <div class="card-title">
                    Alternative Correct
                </div>
                <div class="card-content">
                    <donut-chart
                            id="totalQuestionsSM"
                            :data="parsedTotalQuestions"
                            style="color: white"
                            resize="true">
                    </donut-chart>
                </div>
            </div>
            <div class="card mobile-only">
                <div class="card-title">
                    Used Subjects
                </div>
                <div class="card-content">
                    <donut-chart
                            id="usedSubjectsSM"
                            :data="numberOfCorrect"
                            xkey="label"
                            colors='[ 
                                "#ff1744", 
                                "#3d5afe", 
                                "#1de9b6", 
                                "#76ff03", 
                                "#37474f" ]'
                            resize="true">
                    </donut-chart>
                </div>
            </div>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const subjectRef = rootRef.child('school/subjects')
  const questionsRef = rootRef.child('school/questions')
  import {DonutChart} from 'vue-morris'
  export default {
    firebase () {
      return {
        subjectArray: subjectRef,
        questionsArray: questionsRef
      }
    },
    data () {
      return {}
    },
    mounted () {
    },
    computed: {
      parsedSubjects: function () {
        return this.subjectArray.map(subject => {
          return {
            label: subject.name,
            value: subject.totalQuestions
          }
        })
      },
      numberOfCorrect: function () {
        let list = []
        let finalList = []
        list.push(...this.questionsArray.map(q => q.ta))
        for (let i = 0; i < 5; i++) {
          finalList.push(list[i].length)
        }
        return finalList.map((el, i) => {
          return {
            label: String.fromCharCode(65 + i),
            value: el
          }
        })
      }
    },
    components: {
      DonutChart
    }
  }
</script>

<style>
</style>
