<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <pilots-cards @vacanciesEdit='$refs.vacanciesNumber.open()'></pilots-cards>
      <pilots-table 
        @changeLocation='$refs.chageLocation.open()' 
        @transferHub='$refs.chageHub.open()' 
        @blackList='$refs.blackList.open()' 
        @sendMail='$refs.sendMail.open()'
        class="shadow-3">
      </pilots-table>
    </div>
    <q-modal ref="vacanciesNumber" :content-css="{padding: '1%', minWidth: '50%'}">
      <PilotsVacancies @closeModal='$refs.vacanciesNumber.close()'></PilotsVacancies>
    </q-modal>
    <q-modal ref="chageHub" class="round-borders">
      <ChangeHub @closeModal='$refs.chageHub.close()'></ChangeHub>
    </q-modal>
    <q-modal ref="chageLocation" class="round-borders">
      <ChangeLocation @closeModal='$refs.chageLocation.close()'></ChangeLocation>
    </q-modal>
    <q-modal ref="blackList" class="round-borders">
      <AddBlackList @closeModal='$refs.blackList.close()'></AddBlackList>
    </q-modal>
    <q-modal ref="sendMail" class="round-borders">
      <SendMail @closeModal='$refs.sendMail.close()'></SendMail>
    </q-modal>
  </div>
</template>

<script>
import PilotsCards from '../components/PilotsCards.vue'
import PilotsTable from '../components/PilotsTable.vue'
import ChangeHub from '../components/ChangeHub.vue'
import AddBlackList from '../components/AddBlackList.vue'
import ChangeLocation from '../components/ChangeLocation.vue'
import PilotsVacancies from '../components/PilotsVacancies.vue'
import SendMail from '../components/SendEmail.vue'
export default {
  data () {
    return {}
  },
  components: {
    PilotsCards,
    PilotsTable,
    ChangeHub,
    ChangeLocation,
    PilotsVacancies,
    AddBlackList,
    SendMail
  }
}
</script>

<style>
</style>
