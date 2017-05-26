<template>
  <div>
    <div class="row">
          <button class="teal shadow-3">Refresh Flights from CGNA</button>
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
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
