<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable" @showDetails="$refs.editQuestion.open()"></router-view>
    </div>
    <button
            class="negative circular absolute-bottom-right"
            @click="$refs.newQuestion.open()"
            style="right: 25px; bottom: 18px; color: white;"
    >
      <i>add</i>
    </button>
    <q-modal ref="newQuestion" :content-css="{padding: '50px', minWidth: '50vw'}">
      <new-question @closeModal="$refs.newQuestion.close()"></new-question>
    </q-modal>
    <q-modal ref="editQuestion" @open="$refs.details.start()" :content-css="{padding: '50px', minWidth: '50vw', maxWidth:'80%'}">
      <question-details ref="details" @closeModal="$refs.editQuestion.close()"></question-details>
    </q-modal>
  </div>
</template>

<script>
  import NewQuestion from '../components/QuestionNew.vue'
  import QuestionDetails from '../components/QuestionDetails.vue'
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const questionsRef = dbRoot.child('school/questions')
  import {mapGetters} from 'vuex'
  export default {
    firebase () {
      return {
        questions: questionsRef
      }
    },
    data () {
      return {
        key: '',
        questionSelected: ''
      }
    },
    methods: {
      ...mapGetters(['getGeneralSelected']),
      setKey: function () {
        this.key = this.getGeneralSelected['.key']
      }
    },
    components: {
      NewQuestion,
      QuestionDetails
    }
  }
</script>

<style>
</style>
