<template>
  <div>
    <div class="flex">
      <div class="card text-center bg-secondary text-white shadow-3" style="padding-bottom: 20px;">
        <div class="card-title no-padding">
          <h3>{{ pilots.length }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Pre Pilots</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
let pilotsRef = db.ref('pre_list/pilots')
export default {
  firebase () {
    return {
      pilots: pilotsRef
    }
  }
}
</script>

<style>
</style>
