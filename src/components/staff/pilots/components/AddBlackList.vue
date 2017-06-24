<template>
  <div>
    <div class="card no-margin bg-dark text-white">
      <div class="toolbar bg-black">
        <q-toolbar-title>
          <i>block</i> Black List - {{ getGeneralSelected().full_name }}
        </q-toolbar-title>
      </div>
      <div class="card-content text-center">
        <h2 class="thin-paragraph">Hasta la vista, baby</h2>
        <h1><i class="text-warning">warning</i></h1>
        <p>Do you confirm? This operacion canot be undone!</p>
      </div>
      <div class="card-actions">
        <button class="positive" @click='$emit("closeModal")'><i>close</i> Cancel </button>
        <div class="auto"></div>
        <button class="negative" @click='blockPilot()'><i>block</i> Confirm? </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {Toast} from 'quasar'
export default {
  data () {
    return {
      ...mapGetters(['getGeneralSelected']),
      ...mapActions(['toBlackList']),
      blockPilot () {
        this.toBlackList(this.getGeneralSelected())
        this.$emit('closeModal')
        Toast.create.info(`${this.getGeneralSelected().full_name} was added on black list!`)
      }
    }
  }
}
</script>

<style>
</style>
