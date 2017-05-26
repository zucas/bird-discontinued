<template>
  <div>
    <div class="card-title">
        <h1>
        {{ examSelected.name }}
        </h1>
        <div class="row">
              <h5>Exam Instructions</h5>              
        </div>
        <div class="row">
          <ul>
                <li>You have {{examSelected.time }}min to complete this exam. </li>
                <li>If you refresh the page, you will be automatically reproved.</li>
                <li>This exam have {{ examSelected.questions }} questions. </li>
                <li>If you reproved, a new try will be possible in {{ examSelected.daysToNewChance }} days.</li>
              </ul>
        </div>
        <template >
          <div class="text-center">
            <h5>Choose Exam Language</h5>            
          <div class="row">
            <div class="auto"></div>
            <div class="row gutter" style="max-width: 250px">
              <div @click="$emit('languageSelect', 'en')">
              <img class="flag responsive" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" alt="EN">         
            </div>
            <div @click="$emit('languageSelect', 'pt')">
              <img class="flag responsive" src="https://lipis.github.io/flag-icon-css/flags/4x3/br.svg" alt="PR-BR">
            </div>            
          </div>
            <div class="auto"></div>
          </div>
          </div>
        </template>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {Toast} from 'quasar'
export default {
  data () {
    return {
      examSelected: {},
      language: ''
    }
  },
  created () {
    this.examSelected = this.getGeneralSelected()
  },
  methods: {
    ...mapGetters(['getGeneralSelected']),
    startButton (language) {
      this.language = language
      Toast.create.positive({
        html: `Você selecionou ${language}`
      })
    }
  }
}
</script>

<style>
</style>
