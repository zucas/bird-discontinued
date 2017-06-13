<template>
  <div>
    <div class="card bg-white no-margin">
      <div class="toolbar bg-pink">
        <q-toolbar-title>
         <i>edit_location</i> Change Location | {{ getGeneralSelected().register }} | {{ getGeneralSelected().model }}
        </q-toolbar-title>
    </div>
        <div class="card-content">
          <div class="list no-border">
            <div class="item ">
              <h5 class="thin-paragraph text-center vertical-middle"> FROM - {{ getGeneralSelected().location }} </h5>
            </div>
          <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-pink text-white">
          TO
        </span>
            <input 
                  @input="$v.newLocation.$touch()"
                   class="full-width text-center"
                   v-model="newLocation" 
                   :class="{'has-error': $v.newLocation.$error}"
                   >
                  <span class="text-red" v-if='$v.newLocation.$error'>New Location is required</span>
          </div>
        </div>
      </div>
        </div>
        </div>
        <div class="card-actions">
          <button class="negative clear" @click='$emit("close")'><i>close</i> Cancel </button>
          <div class="auto"></div>
          <button class="positive clear" @click='changeBtn()'><i>done</i> Change </button>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {Toast} from 'quasar'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      newLocation: ''
    }
  },
  validations: {
    newLocation: {required, minLength: minLength(4), maxLength: maxLength(4)}
  },
  methods: {
    ...mapGetters(['getGeneralSelected']),
    ...mapActions(['editFleetGeneric']),
    changeBtn () {
      this.$v.newLocation.$touch()
      if (this.$v.newLocation.$error) {
        Toast.create.negative('Please review fields again.')
      }
      else {
        this.changeLocation()
      }
    },
    changeLocation () {
      this.getGeneralSelected().location = this.newLocation.toUpperCase()
      this.editFleetGeneric({type: 'aircrafts', key: this.getGeneralSelected().key, object: this.getGeneralSelected()})
      Toast.create.positive(`${this.getGeneralSelected().register} was moved to ${this.getGeneralSelected().location}`)
      this.newLocation = ''
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>
