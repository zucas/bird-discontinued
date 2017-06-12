<template>
  <div>
    <div class="row">
          <button class="teal shadow-3" @click='fromMach'>Refresh Flights from MACH</button>
          <div class="space"> </div>          
          <button class="teal shadow-3" @click="$emit('newEvent')">Create special flight</button>
          <div class="space"> </div>          
          <button class="teal shadow-3" @click="$emit('newFlight')">New Flight</button>
          <div class="space"> </div>          
      <template v-for="(n,i) in 5">
          <button class="teal shadow-3">Action - {{ ++i }}</button>
          <div class="space"> </div>          
      </template>
    </div>
    <div class="row"> 
      {{ machFlightsData }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      machFlightsData: {}
    }
  },
  methods: {
    fromMach () {
      this.$http.get('https://jpedroh.com/mach/api/rpl.php?cia=TAM').then(response => {
        this.machFlightsData = response.body
      })
    }
  }
}
</script>

<style>
</style>
