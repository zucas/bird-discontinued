<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <pilots-cards @vacanciesEdit='$refs.vacanciesNumber.open()'></pilots-cards>
      <pilots-table class="shadow-3"></pilots-table>
      <pilots-stats></pilots-stats> 
    </div>
    <q-modal ref="vacanciesNumber" :content-css="{padding: '1%', minWidth: '50%'}">
      <PilotsVacancies @closeModal='$refs.vacanciesNumber.close()'></PilotsVacancies>
    </q-modal>
  </div>
</template>

<script>
import PilotsCards from '../components/PilotsCards.vue'
import PilotsStats from '../components/PilotsStats.vue'
import PilotsTable from '../components/PilotsTable.vue'
import PilotsVacancies from '../components/PilotsVacancies.vue'
export default {
  data () {
    return {}
  },
  components: {
    PilotsCards, PilotsStats, PilotsTable, PilotsVacancies
  }
}
</script>

<style>
</style>
