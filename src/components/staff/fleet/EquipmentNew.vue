<template>
  <div>
    <div class="card shadow-3 no-margin">
      <div class="toolbar primary">
        <q-toolbar-title>
          <i>local_airport</i> New Equipment 
        </q-toolbar-title>
      </div>
      <div class="card-content">
          <div class="list no-border">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Name
        </span>
            <input 
                  @input="$v.equipment.name.$touch()"
                   class="full-width uppercase text-center"
                   v-model="equipment.name" 
                   :class="{'has-error': $v.equipment.name.$error}">
                   <span class="text-red" v-if='$v.equipment.name.$error'>Name is required and need be to 2 or more chars</span>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Factory
        </span>
            <input 
                  @input="$v.equipment.factory.$touch()"
                   class="full-width uppercase text-center"
                   v-model="equipment.factory" 
                   :class="{'has-error': $v.equipment.factory.$error}">
                   <span class="text-red" v-if='$v.equipment.factory.$error'>Factory is required and need to be 2 or more chars</span>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          ICAO
        </span>
            <input 
                  @input="$v.equipment.icao.$touch()"
                   class="full-width uppercase text-center"
                   v-model="equipment.icao" 
                   :class="{'has-error': $v.equipment.icao.$error}">
                   <span class="text-red" v-if='$v.equipment.icao.$error'>Icao is required and need to be 3 or more chars</span>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label bg-primary text-white">
                Minimum Rating
              </span>
              <q-select
                type="list"
                v-model="equipment.minRating"
                :options="parsedRatings()"
                class="full-width text-center"
              ></q-select>
          </div>
        </div>
      </div>
      <label class="item">
                      <div class="item-primary">
                          <q-checkbox v-model="equipment.isPassenger"></q-checkbox>
                      </div>
                      <div class="item-content">
                          Passenger Version ?
                      </div>
      </label>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-warning text-white">
          MZFW (Kg)
        </span>
            <q-numeric
              class="full-width text-center"
              v-model="equipment.foqaParams.mzfw"
              :min="1"
              ></q-numeric>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-warning text-white">
          MTOW (Kg)
        </span>
            <q-numeric
              class="full-width text-center"
              v-model="equipment.foqaParams.mtow" 
              :min="1"
              ></q-numeric>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-warning text-white">
          MLW (Kg)
        </span>
            <q-numeric
              class="full-width text-center"
              v-model="equipment.foqaParams.mlw" 
              :min="1"
              ></q-numeric>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-teal text-white">
          Maximum POB
        </span>
            <q-numeric
              class="full-width text-center"
              v-model="equipment.maxPob" 
              :min="1"
              ></q-numeric>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-teal text-white">
          Maximum Payload Weigth (Kg)
        </span>
            <q-numeric
              class="full-width text-center"
              v-model="equipment.maxMpw" 
              :min="1"
              ></q-numeric>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="card-actions">
          <div class="auto"></div>
          <button class='positive clear' @click='addBtn'>Save <i>add</i></button>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import {Toast} from 'quasar'
export default {
  data () {
    return {
      equipment: {
        name: '',
        factory: '',
        icao: '',
        isPassenger: true,
        minRating: '',
        foqa: false,
        foqaParams: {
          mzfw: 50000,
          mtow: 69000,
          mlw: 63000
        },
        maxPob: 180,
        maxMpw: 12000
      }
    }
  },
  validations: {
    equipment: {
      name: { required, minLength: minLength(2) },
      factory: { required, minLength: minLength(2) },
      icao: { required, minLength: minLength(4), maxLength: maxLength(4) }
    }
  },
  methods: {
    ...mapActions(['addFleetGeneric']),
    ...mapGetters(['ratings']),
    addBtn () {
      this.$v.equipment.$touch()
      if (this.$v.equipment.$error) {
        Toast.create.negative('Please review fields again.')
      }
      else {
        this.saveEquipment()
      }
    },
    saveEquipment () {
      this.addFleetGeneric({type: 'equipments', object: this.equipment})
      Toast.create.positive(`${this.equipment.icao} has been created!`)
      this.$emit('added')
    },
    parsedRatings () {
      return this.ratings().map(rating => {
        return {
          value: rating,
          label: rating
        }
      })
    }
  }
}
</script>

<style>
</style>
