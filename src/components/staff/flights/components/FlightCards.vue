<template>
  <div>

      <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
        <div class="card-title no-padding">
          <h3>{{ flights.length }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Total Flights</h5>
        </div>
      </div>

  </div>
</template>

<script>
import db from '../../../../modules/firebase'
let flightsRef = db.ref('flights')
export default {
  firebase () {
    return {
      flights: flightsRef
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
