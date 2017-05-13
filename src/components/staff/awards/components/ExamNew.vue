<template>
  <div>
    <div class="card shadow-4" style="min-width: 98%">
      <div class="toolbar">
        <q-toolbar-title :padding="1">
          New Exam
        </q-toolbar-title>
      </div>
      <div class="card-content">
        <div class="list">
          <q-collapsible icon="settings" label="General Settings">
            <div>
              <div class="list">
          <div class="item multiple-lines">
            <div class="item-content">
              <div class="floating-label">
                <span class="label inline bg-primary text-white">
              Name
            </span>
                <input @input="$v.exam.name.$touch()" class="full-width text-center" :class="{'has-error': $v.exam.name.$error}" v-model="exam.name" />
                <span v-show='$v.exam.name.$error' class="text-red">Name is required and must be five or more chars</span>
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
                <q-numeric class="full-width" v-model="exam.time" :min="1"></q-numeric>
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
                <q-numeric class="full-width" v-model="exam.questions" :min="1"></q-numeric>
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
                <q-numeric class="full-width" v-model="exam.daysToNewChance" :min="1"></q-numeric>
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
                  <input v-model="exam.award" @input="$v.exam.award.$touch()" class="full-width text-center" :class="{'has-error': $v.exam.award.$error}" placeholder="Type the name of Award.." />
                  <span v-show='$v.exam.award.$error' class="text-red">Award is required</span>
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
                <q-numeric class="full-width" v-model="exam.minScore" :min="1" :max="exam.questions"></q-numeric>
              </div>
            </div>
          </div>
          <hr>
          <div class="item multiple-lines">
            <div class="item-content">
              <div class="floating-label">
                <span class="label inline bg-warning text-white">
                     <q-tooltip anchor="top middle" self="bottom middle" :offset="[0, -10]">
                         Select the awards with pilots need to have previous
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
                <q-numeric class="full-width" v-model="exam.minFlightHours" :min="0"></q-numeric>
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
                <q-numeric class="full-width" v-model="exam.minPilotPoints" :min="0"></q-numeric>
              </div>
            </div>
          </div>
        </div>
            </div>
          </q-collapsible>
          <q-collapsible icon="input" label="Exame Composer">
            <div>
          <p class="caption"> <strong>Exam Composer</strong>
          <i>info</i>
          <q-tooltip>
            In this sections, you must be select how many subjects (Bird system) will use to generated this exam for pilots.
            <br> For know more, check the Bird manual's.
          </q-tooltip>
        </p>  
              <q-transition name="slide">
        <q-stepper :ready="ready" ref="stepper">
   
          <q-step title="Select number of subjects" :beforeNext="beforeNext" >

            <q-numeric
          v-model="composerSubjectsSize"
          :min="1"
          :max="17"
        ></q-numeric>
          </q-step>
          <q-step title="Choose number of questions per subject" @finish="finish()">
            <div v-for="(subject,i) in composerSubjectsSize">  
               <div class="list">
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
                Subject {{ ++i }}
            </span>
            <input />
                    </div>
                </div>
            </div>
            <hr>
            <q-numeric
          
          :min="1"
          :max="17"
        ></q-numeric>
               </div>             
            </div> 
          </q-step>
        </q-stepper>
      </q-transition>
              
            </div>
          </q-collapsible>
          <q-collapsible icon="remove_red_eye" label="Review And Confirm">
            <div>
              <label>
              <q-toggle
                v-model="checked"
              ></q-toggle>
              Do you confirm ?
            </label>              
            </div>
          </q-collapsible>
        </div>

      </div>
<div class="card-actions card-no-top-padding">
              <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small" @click="createExam" :class="{'disabled': !checked}"><i class="on-left">done</i>Save
                <q-tooltip v-if="!checked">
            You must confirm first
          </q-tooltip>
              </button>
    </div>
    </div>
  </div>
</template>

<script>
  import {
    Utils,
    Toast
  } from 'quasar'
  import db from '../../../../modules/firebase'
  let awardsRef = db.ref('school/awards')
  let examsRef = db.ref('school/exams')
  let subjectsRef = db.ref('school/subjects')
  import {
    required,
    minLength
  } from 'vuelidate/lib/validators'
  export default {
    firebase () {
      return {
        awardsArray: awardsRef,
        subjectsArray: subjectsRef
      }
    },
    data () {
      return {
        composerSubjectsSize: 1,
        checked: false,
        terms: '',
        exam: {
          name: '',
          award: '',
          awardsRequired: '',
          daysToNewChance: 7,
          time: 20,
          questions: 20,
          minScore: 14,
          minFlightHours: 0,
          minPilotPoints: 0,
          approvalRate: 0,
          subjects: [],
          coposition: ['']
        },
        selectOptions: [
          {
            label: 'Google',
            value: 'goog'
          },
          {
            label: 'Facebook',
            value: 'fb'
          }
        ]
      }
    },
    validations: {
      exam: {
        name: {
          required,
          minLength: minLength(5)
        },
        award: {
          required
        }
      }
    },
    methods: {
      beforeNext (next) {
        console.log(this.composerSubjectsSize)
        next()
      },
      search (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {
            field: 'value',
            list: this.parseAwards()
          }))
        }, 0)
      },
      createExam () {
        this.$v.exam.$touch()
        if (this.$v.exam.$error) {
          Toast.create.negative('Please review fields again.')
          return
        }
        else {
          examsRef.push(this.exam)
          Toast.create.positive({
            html: 'Award has been created!'
          })
          this.$emit('closeModal')
        }
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
