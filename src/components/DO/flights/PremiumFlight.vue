<template>
  <div>
    <div class="card bg-primary shadow-4  uppercase text-white">
      
      
      <div class="card-media">
        <img class="responsive" src="http://1.bp.blogspot.com/-8mZNC-WT2Q0/T5XmNJz0ZfI/AAAAAAAAEW0/Ojr5HD0RD3I/s1600/DSC06311.JPG" alt="premium_flight">
        <button class="secondary circular animate-bounce"><i>flight</i></button>
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
