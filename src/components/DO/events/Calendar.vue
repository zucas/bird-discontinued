<template>
  <div>
    <div class="card shadow-4 bg-primary text-white">
      <div class="card-content bg-white">
        <q-inline-datetime
  v-model="nextEvent"
  type="date"
></q-inline-datetime>
      </div>
      <div class="card-title">
       <i>event</i> Next Events 
      </div>
      <div class="card-content">
        <div class="list no-border">
          <template v-for="event in nextEvents()">
            <p class="thin-paragraph">{{ event.date }} - {{ event.name }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      nextEvent: moment().add(5, 'days').format()
    }
  },
  methods: {
    ...mapGetters(['nextEvents'])
  }
}
</script>

