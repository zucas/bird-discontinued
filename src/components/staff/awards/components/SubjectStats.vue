<template>
  <div class>
    <br>
    <div class="flex">
      <div class="card">
        <div class="toolbar">
          <q-toolbar-title :padding="1">
            Total Questions
          </q-toolbar-title>
          <i slot="target">
                        more_vert
                        <q-popover ref="popover">
                          <div class="list">
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Foo</div>
                            </div>
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Bar</div>
                            </div>
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Foobar</div>
                            </div>
                          </div>
                        </q-popover>
                      </i>
        </div>
        <div class="card-content">
          <donut-chart id="totalQuestions" :data="parsedTotalQuestions" colors='[ "#ff1744",
                                        "#3d5afe",
                                        "#1de9b6", "#76ff03", "#37474f", "#ff3d00", "#00e5ff" ]' resize="true">
          </donut-chart>
        </div>
      </div>
      <div class="space"></div>
      <div class="card">
        <div class="toolbar">
          <q-toolbar-title :padding="1">
            Used Subjects
          </q-toolbar-title>
          <i slot="target">
                        more_vert
                        <q-popover ref="popover">
                          <div class="list">
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Foo</div>
                            </div>
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Bar</div>
                            </div>
                            <div class="item item-link" @click="$refs.popover.close()">
                              <div class="item-content">Foobar</div>
                            </div>
                          </div>
                        </q-popover>
                      </i>
        </div>
        <div class="card-content">
          <bar-chart id="usedSubjects" :data="parsedTotalUsages" xkey="label" resize="true">
          </bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const subjectRef = rootRef.child('school/subjects')
  import { BarChart, DonutChart } from 'vue-morris'
  export default {
    firebase () {
      return {
        subjectArray: subjectRef
      }
    },
    data () {
      return {}
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
      BarChart,
      DonutChart
    }
  }
</script>

<style>

</style>
