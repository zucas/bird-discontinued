<template>
  <div>
    <div class="card shadow-3 no-margin">
    <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Flight
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
          <div class="list">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Number
        </span>
            <input 
                  @input="$v.flight.number.$touch()"
                  :class="{'has-error': $v.flight.number.$error}"
                   class="full-width text-center uppercase"
                   v-model="flight.number" />
                  <span class="text-red" v-if='$v.flight.number.$error'>Flight number is required</span>
          </div>
        </div>
      </div>
      <hr>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          DEP ICAO
        </span>
            <input 
                  @input="$v.flight.dep.$touch()"
                   class="full-width text-center uppercase"
                  :class="{'has-error': $v.flight.dep.$error}"
                   v-model="flight.dep" />                 
                  <span class="text-red" v-if='!$v.flight.dep.required'>Flight DEP is required</span>
                  <span class="text-red" v-if='!$v.flight.dep.minLength'>Flight DEP invalid</span>
                  <span class="text-red" v-if='!$v.flight.dep.maxLength'>Flight DEP invalid</span>
          </div>
        </div>
      </div>
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          ARR  ICAO
        </span>
            <input 
                  :class="{'has-error': $v.flight.arr.$error}"
                  @input="$v.flight.arr.$touch()"
                   class="full-width text-center uppercase"
                   v-model="flight.arr" />                 
                  <span class="text-red" v-if='!$v.flight.arr.required'>Flight ARR is required</span>
                  <span class="text-red" v-if='!$v.flight.arr.minLength'>Flight ARR invalid</span>
                  <span class="text-red" v-if='!$v.flight.arr.maxLength'>Flight ARR invalid</span>
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Model
        </span>
          <q-select
                type="list"
                v-model="flight.aircraft"
                  @input="$v.flight.aircraft.$touch()"
                :options="parsedEquipments()"
                  :class="{'has-error': $v.flight.aircraft.$error}"
                class="full-width text-center"
              ></q-select>
                  <span class="text-red" v-if='$v.flight.aircraft.$error'>Aircraft model is required</span>
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
            EET
        </span>
            <input 
                  @input="$v.flight.eet.$touch()"
                   class="full-width text-center"
                  :class="{'has-error': $v.flight.eet.$error}"
                   v-model="flight.eet" />                 
                  <span class="text-red" v-if='!$v.flight.eet.$error'>Only numbers, 4 digits, ex: 0755</span>
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
            ETD
        </span>
            <input 
                  @input="$v.flight.etd.$touch()"
                   class="full-width text-center"
                  :class="{'has-error': $v.flight.etd.$error}"
                   v-model="flight.etd" />                 
                  <span class="text-red" v-if='!$v.flight.etd.$error'>Only numbers, 4 digits, ex: 0115</span>
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
          </div>
        </div>
        <div class="card-actions">
          <div class="auto"></div>
          <button class="positive clean" @click='btnSave'> <i>done</i> Save</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Toast } from 'quasar'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      flight: {
        number: '',
        dep: '',
        arr: '',
        aircraft: '',
        eet: '',
        etd: '',
        reserved: false
      }
    }
  },
  validations: {
    flight: {
      number: {required},
      aircraft: {required},
      eet: {required, numeric, minLength: minLength(4)},
      etd: {required, numeric, minLength: minLength(4)},
      dep: {required, minLength: minLength(4), maxLength: maxLength(4)},
      arr: {required, minLength: minLength(4), maxLength: maxLength(4)}
    }
  },
  methods: {
    ...mapActions(['saveGeneral']),
    ...mapGetters(['equipments']),
    btnSave () {
      this.$v.flight.$touch()
      if (this.$v.flight.$error) {
        Toast.create.negative('Please review fields again.')
      }
      else {
        this.saveRoute()
      }
    },
    saveRoute () {
      this.saveGeneral({path: 'flights', object: this.flight})
      Toast.create.positive(`Flight ${this.flight.number} has been created`)
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
