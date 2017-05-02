<template>
    <div class="layout-view">
        <q-tabs class="primary justified">
            <q-tab
                    route="/staff/fleet/equipments/table"
            >
                Equipamentos



            </q-tab>
            <q-tab
                    route="/staff/fleet/aircrafts"
            >
                Aeronaves



            </q-tab>
            <q-tab
                    route="/staff/fleet/maintence"
                    exact
            >
                Manutenção



            </q-tab>
        </q-tabs>

        <router-view></router-view>

    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    created () {},
    methods: {
      ...mapActions(['setAeronaves'])
    }
  }
</script>

<style>
</style>
