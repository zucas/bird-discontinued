<template>
  <div>
    <div class="card bg-white no-margin">
      <div class="toolbar negative">
        <div class="q-toolbar-title">
          <i>attach_money</i> Sell {{getGeneralSelected().register}} ({{getGeneralSelected().model}})
        </div>
      </div>
      <div class="card-content text-center">
        <h5 class="thin-paragraph">It's time to say goodbye</h5>
        <h1 class="text-center"><i class="text-warning">warning</i></h1>
        <p class="thin-paragraph">Are you sure? This operation canot be undone!</p>
      </div>
      <div class="card-actions">
        <button class="warning clear"><i>close</i> Cancel</button>
        <div class="auto"></div>
        <button class="negative clear" @click='sell'><i>attach_money</i> Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapGetters(['getGeneralSelected']),
    ...mapActions(['editFleetGeneric', 'sellAircraft']),
    sell () {
      this.sellAircraft(this.getGeneralSelected())
    }
  }
}
</script>

<style>
</style>
