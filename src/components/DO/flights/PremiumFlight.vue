<template>
  <div>
    <div class="card bg-primary shadow-4  uppercase text-white">
      
      
      <div class="card-media">
        <img class="responsive" src="http://cdn.playbuzz.com/cdn/45f31e7c-be1e-4a25-8ffa-1f7ba4b41fe2/a66b0ec5-a42c-44ef-86ed-e2d7464e9816.jpg" alt="premium_flight">
        <button class="negative circular animate-bounce"><i>flight</i></button>
      </div>
      <div class="card-title">             
        <i>star</i> Premium Flight <i class="small">info
          <q-tooltip anchor="bottom middle" self="bottom middle" :offset="[0, 55]" class="bg-secondary">
        Describle what is premium flight is...
  </q-tooltip>
        </i>        
      </div>
      <div class="card-content">
      <p class="thin-paragraph"> {{ premium_flight().dep}} - {{ premium_flight().arr}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapGetters(['premium_flight'])
  }
}
</script>

<style>
</style>
