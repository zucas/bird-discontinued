<template>
  <div>
    <div class="card no-margin bg-white">
      <div class="toolbar">
        <q-toolbar-title>
          <i>local_airport</i> Chage Location | {{ getGeneralSelected().number }} - {{ getGeneralSelected().full_name }}
        </q-toolbar-title>
      </div>
      <div class="card-content">
        <div class="list no-border">
          <div class="item ">
              <h5 class="thin-paragraph text-center vertical-middle"> FROM - {{ getGeneralSelected().local }} </h5>
            </div>
          <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          TO
        </span>
            <input
                @input="$v.newLocation.$touch()"
                v-model="newLocation"
                :class="{'has-error': $v.newLocation.$error}"
                class="full-width uppercase text-center"
              />
          </div>
        </div>
      </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="clear negative" @click='$emit("closeModal")'> <i>close</i> Cancel </button>
        <div class="auto"></div>
        <button class="clear positive" @click='btnChange'> <i>done</i> Chage </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { Toast } from 'quasar'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      newLocation: ''
    }
  },
  validations: {
    newLocation: { required, minLength: minLength(4), maxLength: maxLength(4) }
  },
  methods: {
    ...mapGetters(['getGeneralSelected']),
    ...mapActions(['editPilot']),
    btnChange () {
      this.$v.newLocation.$touch()
      if (this.$v.newLocation.$error) {
        Toast.create.negative('Please review field again.')
      }
      else {
        this.changeLocation()
      }
    },
    changeLocation () {
      this.getGeneralSelected().local = this.newLocation.toUpperCase()
      this.editPilot(this.getGeneralSelected())
      Toast.create.positive(`${this.getGeneralSelected().full_name} was moved to ${this.getGeneralSelected().local}`)
      this.$emit('closeModal')
    }
  }
}
</script>

<style>
</style>
