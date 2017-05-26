<template>
  <div>
    <div class="card bg-four shadow-3 text-white" v-if="showInstructions">
      <ExamInstructions @languageSelect='languageSelect'></ExamInstructions>
    </div>
    <template v-else>
    <div class="card bg-white vertical-bottom">
      <div v-for="(question, q) in examGenerated.questions" style="padding-bottom: 15px">
        <div class="row bg-secondary text-white" style="padding-left: 1%">
          <h5 class="caption-paragraph"> {{ q }} - {{ question.statement }} </h5>
        </div>
        <div v-if="question.hasImage">
          <img :src="imgLink(question.imageLink)">
          <h1>hasImage</h1>
        </div>
        <div class="list no-border">
          <div class="item" v-for="(alternative, i) in question.alternatives">
            <div class="item-primary">
              <q-radio class="secondary" :val='`${q}_${i}`' v-model='ansewers[q]'></q-radio>
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
        <button class="secondary on-right">Finish</button>
      </div>
    </div>
    <div class="row absolute-top-right" style="margin-right: 15px; margin-top: 15px">
      <div class="card shadow-3 text-center text-white" :class="cardColor" style="padding: 15px">
      <h4>{{ remainTime }} </h4>
    </div>
    </div>
    <div class="row absolute-bottom-right" style="margin-right: 15px; margin-bottom: 15px">
      <div class="card shadow-3 text-center text-white" :class="cardColor" style="padding: 15px">
      <h4>{{ points }} Points </h4>
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
export default {
  data () {
    return {
      time: '00:20',
      points: 0,
      test: {},
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
    languageSelect (language) {
      Loading.show({
        spinner: 'puff',
        spinnerSize: 250, // in pixels
        spinnerColor: '#1B0088'
      })
      this.language = language
      let count = 0
      Object.keys(this.examSelected.composition).forEach(subject => {
        this.$http.get(`https://bird-ff640.firebaseio.com/school/questions/${subject}.json?orderBy="language"&equalTo="${language}"&limitToFirst=${this.examSelected.composition[subject]}`)
        .then(response => {
          count++
          this.resData.push(response.body)
          if (count === Object.keys(this.examSelected.composition).length) {
            Loading.hide()
            this.parseQuestions()
            this.startTime()
          }
        })
      })
      this.showInstructions = false
    },
    parseQuestions () {
      this.resData.forEach(data => {
        Object.keys(data).map(key => {
          this.examGenerated.questions.push(data[key])
        })
      })
    },
    startTime () {
      this.time = (this.examSelected.time * 60)
      this.timer()
    },
    timer () {
      let that = this
      if (this.time > 0) {
        this.time--
        setTimeout(function () {
          that.timer()
        }, 1000)
      }
      if (this.time === 60) {
        Toast.create.warning({
          html: `You have only 1 minute remain`
        })
      }
    },
    questionParsed (question) {
      return Object.keys(question).map((key) => {
        return question[key]
      })
    },
    imgLink (link) {
      let linkUrl = link
      // storageRef.child(link).getDownloadURL().then(url => {
      //  linkUrl = url
      // })
      return linkUrl
    },
    letterOfAlternative (i) {
      return String.fromCharCode(65 + i)
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
    }
  },
  components: {
    ExamInstructions
  }
}
</script>
