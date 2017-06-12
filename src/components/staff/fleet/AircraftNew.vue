<template>
  <div>
    <div class="card shadow-3 no-margin">
      <div class="toolbar primary">
        <q-toolbar-title>
          <i>flight_takeoff</i> New Aircraft 
        </q-toolbar-title>
      </div>
      <div class="card-content">
          <div class="list no-border">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Model
        </span>
            <input 
                  @input="$v.equipament.name.$touch()"
                   class="full-width text-center"
                   v-model="aircraft.model" >
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Register
        </span>
            <input 
                   class="full-width text-center"
                   v-model="aircraft.register" 
                   name='name'
                   >
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Location
        </span>
            <input 
                   class="full-width text-center"
                   v-model="aircraft.location" 
                   name='name'
                   >
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="card-actions">
          <div class="auto"></div>
          <button class='positive clear' @click='addAircraft'>Save <i>add</i></button>
          </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      aircraft: {
        register: '',
        model: '',
        location: ''
      }
    }
  },
  validations: {
    equipament: {
      name: { required, minLength: minLength(2) },
      factory: { required, minLength: minLength(2) },
      icao: { required, minLength: minLength(2) }
    }
  },
  methods: {
    ...mapActions(['addFleetGeneric']),
    addAircraft () {
      this.addFleetGeneric({type: 'aircraft', object: this.aircraft})
    }
  }
}
</script>

<style>
</style>
