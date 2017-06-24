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
          <q-select
                type="list"
                  @input="$v.aircraft.model.$touch()"
                v-model="aircraft.model"
                :options="parsedEquipments()"
                :class="{'has-error': $v.aircraft.model.$error}"
                class="full-width text-center"
              ></q-select>
              <span v-if='$v.aircraft.model.$error'>Model is required and need to be 3 or more chars</span>
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
                  @input="$v.aircraft.register.$touch()"
                   class="full-width uppercase text-center"
                   v-model="aircraft.register" 
                  :class="{'has-error': $v.aircraft.register.$error}"
                   >
              <span v-if='$v.aircraft.register.$error'>Register is required and need to be 3 or more chars</span>
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
                  @input="$v.aircraft.location.$touch()"
                   class="full-width uppercase text-center"
                  :class="{'has-error': $v.aircraft.location.$error}"
                   v-model="aircraft.location" 
                   >
              <span v-if='$v.aircraft.location.$error'>Location is required and need to be 4 chars</span>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="card-actions">
          <button class='negative clear' @click='$emit("close")'><i>add</i> Cancel</button>
          <div class="auto"></div>
          <button class='positive clear' @click='addAircraft'><i>add</i> Save</button>
          </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import {Toast} from 'quasar'
export default {
  data () {
    return {
      aircraft: {
        register: '',
        model: '',
        location: '',
        status: 'OK',
        integrity: 100
      }
    }
  },
  validations: {
    aircraft: {
      register: { required, minLength: minLength(5) },
      location: { required, minLength: minLength(4), maxLength: maxLength(4) },
      model: { required }
    }
  },
  methods: {
    ...mapActions(['addFleetGeneric']),
    ...mapGetters(['equipments']),
    addAircraft () {
      this.$v.aircraft.$touch()
      if (this.$v.aircraft.$error) {
        Toast.create.negative('Please review fields again.')
      }
      else {
        this.saveAircraft()
      }
    },
    saveAircraft () {
      this.addFleetGeneric({type: 'aircrafts', object: this.aircraft})
      this.$emit('close')
    },
    parsedEquipments () {
      return this.equipments().map(equipment => {
        return {
          value: equipment.icao,
          label: equipment.icao
        }
      })
    }
  }
}
</script>

<style>
</style>
