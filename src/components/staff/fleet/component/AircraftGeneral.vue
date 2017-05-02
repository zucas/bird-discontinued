<template>
    <div>
        <div class="row">
                <div class="card text-center bg-teal-4 text-white" style="padding-bottom: 20px;">
                    <div class="card-title no-padding">
                        <h3>{{ aircraftsRef.length }}</h3>
                    </div>
                    <div class="card-content no-padding">
                        Aircraft's
                    </div>
                </div>

                <div class="card text-center bg-teal-5 text-white">
                    <div class="card-title no-padding">
                        <h3> {{ aircraftsOnMaintence }}</h3>
                    </div>
                    <div class="card-content no-padding">
                        On maintenance
                    </div>
                </div>

                <div class="card text-center bg-teal-6 text-white">
                    <div class="card-title no-padding">
                        <h3> {{ aircraftsReserved }} </h3>
                    </div>
                    <div class="card-content no-padding">
                        Reserved
                    </div>
                </div>

        </div>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  export default {
    firebase () {
      return {
        equipmentRef: db.ref('fleet/equipments'),
        aircraftsRef: db.ref('fleet/aircrafts')
      }
    },
    data () {
      return {}
    },
    computed: {
      aircraftsOnMaintence () {
        let cont = 0
        this.aircraftsRef.forEach(aircraft => {
          if (aircraft.onMaintence) {
            cont++
          }
        })
        return cont
      },
      aircraftsReserved () {
        let cont = 0
        this.aircraftsRef.forEach(aircraft => {
          if (aircraft.isReserved) {
            cont++
          }
        })
        return cont
      }
    }
  }
</script>

<style>
</style>
