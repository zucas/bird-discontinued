<template>
  <div class="layout-view">
    <div class="layout-padding">
    <h3 class="light-paragraph">Welcome {{ user.displayName }}, to the LSC - LATAM-VA Staff Center</h3>
    <h5 class="light-paragraph">You make LATAM-VA</h5>
    <blockquote class="shadow-2">
      <p class="light-paragraph">
        What the mind can conceive and believe, it can achieve. 
      </p>
      <small>Napoleon Hill</small>
    </blockquote>
    <PrePilotsCards></PrePilotsCards>
    <PilotsCards></PilotsCards>
    <FlighCards></FlighCards>
    <QuestionStats></QuestionStats>
      <AwardCard></AwardCard>
      <SubjectCard></SubjectCard>
  </div>
  </div>
</template>

<script>
import QuestionStats from '../awards/components/QuestionStats.vue'
import AwardStats from '../awards/components/AwardStats.vue'
import PilotsCards from '../pilots/components/PilotsCards.vue'
import PrePilotsCards from '../pilots/components/PreCadastro.vue'
import FlighCards from '../flights/components/FlightCards.vue'
import AwardCard from '../awards/components/AwardCardTotal.vue'
import SubjectCard from '../awards/components/SubjectsCardTotal.vue'
import firebase from 'firebase'
export default {
  data () {
    return {
      user: {}
    }
  },
  components: {
    QuestionStats, AwardStats, PilotsCards, FlighCards, AwardCard, SubjectCard, PrePilotsCards
  },
  mounted () {
    this.user = firebase.auth().currentUser
  }
}
</script>

<style>
</style>
