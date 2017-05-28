<template>
  <!-- root node required -->
  <div>
    <!-- INDEX DO DESPACHO -->
    <!-- your content -->
    <div class="layout-padding">
      <div>
        <pilot-resume></pilot-resume>
      </div>
      <div class="row content-center self-stretch gutter ">        
        <PremiumFlight ref="premiumFlight" class="md-width-1of2 self-stretch animate-scale"></PremiumFlight>
        <EventsCalendar id="eventCalendar" ref="eventCalendar" class="md-width-1of2 self-start animate-scale"></EventsCalendar>
      </div>
      <div class="row">
        <ExamsAvaible class="width-1of1 animate-pop"></ExamsAvaible>
      </div>
      <div class="row">
      <FlightTable class="width-1of1 animate-scale"></FlightTable>
      </div>
      <div class="div">
        <PilotAwards class="width-1of1 animate-pop"></PilotAwards>
      </div>
      <div class="row">
        <pilot-pireps class="width-1of1 animate-scale"></pilot-pireps>        
      </div>
      <div class="row">
        <local-map class="width-1of2 animate-scale"></local-map>        
      </div>
      
    </div>
  </div>
</template>

<script>
import PilotResume from './PilotResume.vue'
import LocalMap from './LocalMAP.vue'
import PremiumFlight from '../flights/PremiumFlight.vue'
import FlightTable from '../flights/FlightTable.vue'
import EventsCalendar from '../events/Calendar.vue'
import ExamsAvaible from '../exams/ExamsAvaiable.vue'
import PilotAwards from '../awards/PilotAwards.vue'
import PilotPireps from '../pireps/PilotPireps.vue'
export default {
  data () {
    return {}
  },
  components: {
    PilotResume,
    LocalMap,
    PremiumFlight,
    FlightTable,
    EventsCalendar,
    ExamsAvaible,
    PilotAwards,
    PilotPireps
  },
  mounted () {
    // onsole.log(this.$refs.premiumFlight.$el.clientHeight)
    // console.log(this.$refs.premiumFlight.$el.clientHeight)
  }
}
</script>

<style>
</style>
