<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
        <div class="row gutter">
          <div class="width-1of3" @click='showEquipments()'>
            <EquipmentsCard> </EquipmentsCard>
          </div>
          <div class="width-1of3" @click='showAircrafts'>
            <AircraftsCard></AircraftsCard>
          </div>
          <div class="width-1of3">
            <MaintenanceCard></MaintenanceCard>
          </div>
        </div>
        <div class="row">
          <div class="width-1of1">
          <router-view></router-view>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import EquipmentsCard from './EquipmentsCard.vue'
  import AircraftsCard from './AircraftsCard.vue'
  import MaintenanceCard from './MaintenanceCard.vue'
  export default {
    data () {
      return {}
    },
    components: {
      EquipmentsCard,
      AircraftsCard,
      MaintenanceCard
    },
    methods: {
      showEquipments () {
        this.$router.push({
          name: 'equipments'
        })
      },
      showAircrafts () {
        this.$router.push({
          name: 'aircrafts'
        })
      }
    }
  }
</script>

<style>

</style>
