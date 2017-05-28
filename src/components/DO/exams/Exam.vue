<template>
  <div>
    <div class="card bg-four shadow-3 text-white" v-if="showInstructions">
      <ExamInstructions @languageSelect='start'></ExamInstructions>
    </div>
    <template v-else>
    <div class="card bg-white vertical-bottom" v-if="onExam">      
      <div v-for="(question, q) in examGenerated.questions" style="padding-bottom: 15px">
        <div class="card-title">
        <div class="row bg-secondary text-white" style="padding-left: 1%">
          <h5 class="caption-paragraph"> {{ q }} - {{ question.statement }} </h5>
        </div>
      </div>        
        <div v-if="question.hasImage" class="card-content">
          <!-- TODO - Arrumar o link da imagem -->
          <img :src="imglinks[0]">
        </div>
        <div class="list no-border">
          <div class="item" v-for="(alternative, i) in question.alternatives">
            <div class="item-primary">
              <q-radio class="secondary" :val='`${i}`' v-model='ansewers[q]'></q-radio>
            </div>
            <div class="item-content">
              <p class="caption-paragraph">
                {{ letterOfAlternative(i) }}) {{ alternative }}       
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <div class="auto"></div>
        <button class="secondary on-right" @click="finalizeExam">Finish</button>
      </div>
    </div>
    <div class="card text-white" :class='ressultColor' v-else>
    <div class="card-content">
      <h2>Exam is over</h2>
    <h3>Points - {{ points }}</h3>
    <h3>Result - {{result}} </h3>
    <p>{{message}}</p>
    </div>
    </div>
    <div class="row absolute-top-right" style="margin-right: 15px; margin-top: 15px" v-if="onExam">
      <div class="card shadow-3 text-center text-white" :class="cardColor" style="padding: 15px">
      <h4>{{ remainTime }} </h4>
    </div>
    </div>
    </template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ExamInstructions from './ExamInstructions.vue'
import { Loading, Toast } from 'quasar'
import moment from 'moment'
import firebase from 'firebase'
let storageRef = firebase.storage().ref()
export default {
  data () {
    return {
      imglinks: [],
      message: [],
      time: '00:20',
      onExam: false,
      startExam: false,
      points: 0,
      result: '',
      resData: [],
      ansewers: [],
      examSelected: {},
      language: '',
      examGenerated: {
        questions: []
      },
      showInstructions: true
    }
  },
  created () {
    this.examSelected = this.getGeneralSelected()
  },
  methods: {
    ...mapGetters(['getGeneralSelected']),
    start (language) {
      Loading.show({
        spinner: 'puff',
        spinnerSize: 250, // in pixels
        spinnerColor: '#1B0088'
      })
      this.language = language
      let count = 0
      Object.keys(this.examSelected.composition).forEach(subject => {
        this.$http.get(`https://bird-ff640.firebaseio.com/LATAM-VA/school/questions/${subject}.json?orderBy="language"&equalTo="${language}"&limitToFirst=${this.examSelected.composition[subject]}`)
        .then(response => {
          count++
          this.resData.push(response.body)
          if (count === Object.keys(this.examSelected.composition).length) {
            Loading.hide()
            this.parseQuestions()
            this.onExam = true
            this.startExam = true
            this.showInstructions = false
            this.startTime()
          }
        })
      })
    },
    setImgLink () {
      this.examGenerated.questions.forEach(question => {
        if (question.hasImage) {
          storageRef.child(question.imgLink).getDownloadURL().then(url => {
            this.imglinks.push(url)
          })
        }
      })
    },
    parseQuestions () {
      this.resData.forEach(data => {
        Object.keys(data).map(key => {
          this.examGenerated.questions.push(data[key])
        })
      })
      this.setImgLink()
    },
    startTime () {
      this.time = (this.examSelected.time * 60)
      this.timer()
    },
    timer () {
      let that = this
      if (this.time > 0) {
        setTimeout(function () {
          that.timer()
          that.time--
        }, 1000)
      }
      if (this.time === 60) {
        Toast.create.warning({
          html: `You have only 1 minute remain`
        })
      }
      if (this.time === 0) {
        this.onExam = false
        this.finalizeExam()
      }
    },
    finalizeExam () {
      this.time = null
      this.onExam = false
      this.calculatePoints()
    },
    questionParsed (question) {
      return Object.keys(question).map((key) => {
        return question[key]
      })
    },
    letterOfAlternative (i) {
      return String.fromCharCode(65 + i)
    },
    calculatePoints () {
      for (var i = 0; i < this.ansewers.length; i++) {
        if (this.ansewers[i] === this.examGenerated.questions[i].ta) {
          this.points++
        }
      }
      if (this.points >= this.examSelected.minScore) {
        this.aproved()
      }
      else {
        this.reproved()
      }
    },
    aproved () {
      this.result = 'Approved'
      this.message = `Congratulations, you passed on ${this.examSelected.name}, 
      and know you won the ${this.examSelected.award}!`
      // TODO O que sistema faz em caso de aprovação
    },
    reproved () {
      this.result = 'Reproved'
      this.message = `Oh No! You failed on ${this.examSelected.name}, 
      wait ${this.examSelected.daysToNewChance} to try again!`
      // TODO O que ele faz em caso de reprovação
    }
  },
  computed: {
    remainTime () {
      return moment('1900-01-01 00:00:00').add(this.time, 'seconds').format('mm:ss')
    },
    cardColor () {
      if (((this.time / 60) / this.examSelected.time) > 0.7) {
        return 'bg-positive'
      }
      if (((this.time / 60) / this.examSelected.time) > 0.15) {
        return 'bg-warning'
      }
      else {
        return 'bg-negative'
      }
    },
    ressultColor () {
      return this.result === 'Approved' ? 'bg-positive' : 'bg-negative'
    }
  },
  components: {
    ExamInstructions
  }
}
</script>
