<template>
    <div>
        <div class="row mobile-hide " v-if="questionsArray.length > 0">
            <div class="card" v-if='cardUsedSubjectsVisible' >
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
                <div class="card-content" >
                <donut-chart
                            id="usedSubjects"
                            :data="parsedSubjects"
                            style="color: white"
                            colors='[ "#ff1744",
                                      "#3d5afe",
                                      "#1de9b6", "#76ff03", "#37474f", "#ff3d00", "#00e5ff" ]'
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
                        colors='[ "#ff1744", "#3d5afe", "#1de9b6", "#76ff03", "#37474f" ]'
                        resize="true">
                </donut-chart>
            </div>
        </div>
    </div>
</template>

<script>
  import {BarChart, DonutChart} from 'vue-morris'
  import {Utils} from 'quasar'
  export default {
    data () {
      return {
        cardUsedSubjectsVisible: true
      }
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
        for (let i = 0; i < 5; i++) {
          list.push(Utils.filter(i.toString(), {field: 'ta', list: this.questionsArray}))
        }
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
      BarChart, DonutChart
    }
  }
</script>

<style>
</style>
