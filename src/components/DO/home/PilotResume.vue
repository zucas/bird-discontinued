<template>
  <div>
    <div class="row gutter wrap sm-column">
      <div class="width-1of5 sm-column">
        <div class="card animate-pop bg-primary shadow-3 text-white">
        <div class="card-content">
          <h4 class="pull-right">{{ pilot().va_info.flight_hours }}</h4>
          <p class="thin-paragraph">Flight Hours</p>
        </div>
      </div>
      </div>  
      <div class="width-1of5">
      <div class="card animate-pop bg-secondary shadow-3 text-white">
        <div class="card-content">
          <h4 class="pull-right">{{ pilot().va_info.total_flights }}</h4>
          <p class="thin-paragraph">Flights</p>
        </div>
      </div>
        </div>    
      <div class="width-1of5">
      <div class="card animate-pop bg-tertiary shadow-3 text-white">
        <div class="card-content">
          <h4 class="pull-right">{{ pilot().va_info.xp }}</h4>
          <p class="thin-paragraph">XP</p>
        </div>
      </div>
        </div>    
        <div class="width-1of5">
          <div class="card animate-pop bg-four shadow-3 text-white">
        <div class="card-content">
          <h4 class="pull-right">{{ pilot().va_info.local }}</h4>
          <p class="thin-paragraph">Local</p>
        </div>
      </div>
        </div>

        <div class="width-1of5">
          <div class="card animate-pop bg-five shadow-3 text-white">
        <div class="card-content">
          <h4 class="pull-right">{{ pilot().va_info.rating }}</h4>
          <p class="thin-paragraph">Rating</p>
        </div>
      </div>
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
    ...mapGetters(['pilot'])
  }
}
</script>
