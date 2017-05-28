<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @newQuestion="$refs.newQuestion.open()" @showDetails="$refs.editQuestion.open()"></router-view>
    </div>
    <button
            class="circular absolute-bottom-right bg-pink"
            @click="$refs.newQuestion.open()"
            style="right: 25px; bottom: 18px; color: white;"
    >
      <i>add</i>
    </button>
    <q-modal ref="newQuestion" :content-css="{padding: '1%', minWidth: '70%'}">
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
  import {mapGetters} from 'vuex'
  export default {
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
