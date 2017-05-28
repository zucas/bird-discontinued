<template>
  <div>
      
    <div class="card shadow-3">
      <div class="card-title bg-secondary-opac text-white" >
         <i>school</i> Exams Avaiable
      </div>
      <div class="card-title bg-secondary-opac text-white" >
         <q-search class="secondary text-white"></q-search>
      </div>
      <div class="card-content bg-primary-opac">
        <div class="row gutter">
          <div v-for="(exam, i) in exams()" class="width-1of5">
            <div class="card text-center shadow-4" @click='$refs.confirmationModal.open(); selectExam(exam)'>
            <div class="card-media">
              <img class="responsive" src="https://i.ytimg.com/vi/NhvQ35mE1OI/hqdefault.jpg" alt="">
            </div>
            <div class="card-content bg-tertiary text-white"> {{exam.name}}</div>
          </div>
            <div class="space"></div>
          </div>          
        </div>        
      </div>
    </div>
    <sweet-modal ref="confirmationModal" 
                  hide-close-button blocking overlay-theme="dark" 
                  icon='info'
                  modal-theme="dark">
                  <h5 class="light-paragraph">{{ examSelected.name }}</h5>
                  <div class="list">
                    <div class="item">
                      <div class="item-content">
                        Time: {{ examSelected.time }}min
                      </div>
                    </div>
                    <hr>
                    <div class="item">
                      <div class="item-content">
                        Questions: {{ examSelected.questions }}
                      </div>
                    </div>
                    <hr>
                    <div class="item">
                      <div class="item-content">
                        Award: {{ examSelected.award }}
                      </div>
                    </div>
                    <hr>
                    <div class="item">
                      <div class="item-content">
                        Minimum Score: {{ examSelected.minScore }}/{{ examSelected.questions }}
                      </div>
                    </div>
                    <hr>
                    <div class="item">
                      <div class="item-content text-red">
                        Days to new chance: {{ examSelected.daysToNewChance }}
                      </div>
                    </div>
                  </div>
      <button slot="button" class="secondary pull-left" v-on:click="$refs.confirmationModal.close()">Cancel</button>
      <button slot="button" class="primary" v-on:click="$refs.confirmationModal.close(); startExam()">I'm Read</button>
    </sweet-modal>
  </div>
</template>

<script>
import {Toast} from 'quasar'
import { SweetModal, SweetButton } from 'sweet-modal-vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      test: {},
      examSelected: {}
    }
  },
  created () {
    if (this.pilot().va_info.rating === 0) {
      Toast.create.negative({
        html: 'You need do the Admission Exam to continue!'
      })
    }
  },
  methods: {
    ...mapGetters(['exams', 'pilot']),
    ...mapActions(['setGeneralSelected']),
    startExam () {
      this.setGeneralSelected(this.examSelected)
      this.$router.push({name: 'pilot-exam'})
    },
    selectExam (exam) {
      this.examSelected = exam
    }
  },
  components: {
    SweetModal,
    SweetButton
  }
}
</script>
