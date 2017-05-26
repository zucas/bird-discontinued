<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">

        <FlightCard></FlightCard>
        <FlightActions @newFlight='$refs.newFlight.open()' @newEvent='$refs.eventModal.open()'></FlightActions>

      <br>
      <div class="row">
        <FlightTable class="shadow-3"></FlightTable>
      </div>
      <br>
      <FlightStats></FlightStats>
    </div>
    
    <button class="circular absolute-bottom-right bg-pink" @click="$refs.newFlight.open()" style="right: 25px; bottom: 18px; color: white;">
        <i>add</i>
      </button>
      <q-modal ref='newFlight' :content-css="{padding: '1%', minWidth: '50%'}">
        <FlightNew></FlightNew>
      </q-modal>
      <q-modal ref='eventModal' :content-css="{padding: '1%', minWidth: '50%'}">
        <FlightEvent></FlightEvent>
      </q-modal>
  </div>
</template>

<script>
import FlightCard from '../components/FlightCards.vue'
import FlightTable from '../components/FlightTable.vue'
import FlightActions from '../components/FlightActions.vue'
import FlightStats from '../components/FlightStats.vue'
import FlightEvent from '../components/FlightEvent.vue'
import FlightNew from '../components/FlightNew.vue'
export default {
  data () {
    return {}
  },
  components: {
    FlightCard, FlightTable, FlightActions, FlightStats, FlightEvent, FlightNew
  }
}
</script>

<style>
</style>
