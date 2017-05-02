<template>
    <div>
            <h4>Total Questions</h4>
            <donut-chart
                    id="totalQuestions"
                    :data="parsedTotalQuestions"
                    resize="true">
            </donut-chart>

        <h4>Used Subjects</h4>
            <bar-chart
                    id="usedSubjects"
                    :data="parsedTotalUsages"
                    xkey="label"
                    resize="true">
            </bar-chart>

    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const subjectRef = rootRef.child('school/subjects')
  import {BarChart, DonutChart} from 'vue-morris'
  export default {
    firebase () {
      return {
        subjectArray: subjectRef
      }
    },
    data () {
      return {
        donutData: [
          {label: 'RVSM', value: 1},
          {label: 'TEST', value: 0},
          {label: 'Capitais', value: 2}
        ]
      }
    },
    computed: {
      parsedTotalQuestions: function () {
        return this.subjectArray.map(subject => {
          return {
            label: subject.name,
            value: subject.totalQuestions
          }
        })
      },
      parsedTotalUsages: function () {
        return this.subjectArray.map(subject => {
          return {
            label: subject.name,
            value: subject.usagesNumber
          }
        })
      }
    },
    components: {
      BarChart, DonutChart
    }
  }
</script>

<style>
</style>
