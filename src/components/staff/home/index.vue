<template>
<div>
  
  <div class="layout-view">
    <div class="layout-padding">
    <PrePilotsCards></PrePilotsCards>
    <PilotsCards></PilotsCards>
    <FlighCards></FlighCards>
    <QuestionStats></QuestionStats>
      <AwardCard></AwardCard>
      <SubjectCard></SubjectCard>
  </div>
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
export default {
  data () {
    return {
      user: {}
    }
  },
  components: {
    QuestionStats, AwardStats, PilotsCards, FlighCards, AwardCard, SubjectCard, PrePilotsCards
  }
}
</script>

<style>
</style>
