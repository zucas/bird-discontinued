<template>
    <div>
        <h3>
            New Exam
        </h3>
        <div class="list">

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Name
        </span>
                        <input
                                class="full-width text-center"
                                v-model="exam.name"
                        >
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Total Time (minutes)
        </span>
                        <q-numeric class="full-width"
                                v-model="exam.time"
                                :min="1"
                        ></q-numeric>
                    </div>
                </div>
            </div>
            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Questions
        </span>
                        <q-numeric class="full-width"
                                v-model="exam.questions"
                                :min="1"
                        ></q-numeric>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-negative text-white">
          Days to a new chance
        </span>
                        <q-numeric class="full-width"
                                   v-model="exam.daysToNewChance"
                                   :min="1"
                        ></q-numeric>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-positive text-white">
          Award
        </span>
                        <q-autocomplete v-model="exam.award" @search="search">
                            <input v-model="exam.award" class="full-width text-center" placeholder="Type the name of Award.." />
                        </q-autocomplete>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-positive text-white">
          Minimum Score
        </span>
                        <q-numeric class="full-width"
                                   v-model="exam.minScore"
                                   :min="1"
                                   :max="exam.questions"
                        ></q-numeric>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-warning text-white">
                 <q-tooltip anchor="top middle" self="bottom middle" :offset="[0, -10]">
                     Quando deixa o mouse, exibe uma descrição melhor e mais completa
          </q-tooltip>
         Awards Required
        </span>
                        <q-autocomplete v-model="exam.awardsRequired" @search="search">
                            <input v-model="exam.awardsRequired" class="full-width text-center" placeholder="Type the name of Award.." />
                        </q-autocomplete>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-warning text-white">
          Minimun Flight Hours
        </span>
                        <q-numeric class="full-width"
                                   v-model="exam.minFlightHours"
                                   :min="0"
                        ></q-numeric>
                    </div>
                </div>
            </div>

            <hr>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-warning text-white">
          Minimun Points
        </span>
                        <q-numeric class="full-width"
                                   v-model="exam.minPilotPoints"
                                   :min="0"
                        ></q-numeric>
                    </div>
                </div>
            </div>

        </div>

        <br>
        <button class="outline negative pull-left" @click="$emit('closeModal')">
            <i class="on-left">close</i> Close
        </button>
        <button class="secondary pull-right" @click="createExam">
            <i class="on-left">done</i> Save
        </button>

    </div>
</template>

<script>
  import {Utils, Toast} from 'quasar'
  import db from '../../../../modules/firebase'
  let awardsRef = db.ref('school/awards')
  let examsRef = db.ref('school/exams')

  export default {
    firebase () {
      return {
        awardsArray: awardsRef
      }
    },
    data () {
      return {
        terms: '',
        exam: {
          award: '',
          awardsRequired: '',
          daysToNewChance: 7,
          time: 20,
          questions: 20,
          minScore: 14,
          minFlightHours: 0,
          minPilotPoints: 0,
          approvalRate: 0
        }
      }
    },
    methods: {
      search (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.parseAwards()}))
        }, 0)
      },
      createExam () {
        examsRef.push(this.exam)
        Toast.create.positive({
          html: 'Award has been created!'
        })
        this.$emit('closeModal')
      },
      parseAwards () {
        return this.awardsArray.map(award => {
          return {
            label: award.name,
            value: award.name
          }
        })
      }
    }
  }
</script>

<style>
</style>
