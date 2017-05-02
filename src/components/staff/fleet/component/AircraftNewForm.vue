<template>
    <div>
        <h5>New Aircraft's</h5>
        <form action="">
            <div class="list">

                <div class="item multiple-lines">
                    <div class="item-content">
                        <div class="floating-label">
                            <label>Register</label>
                            <input
                                    class="full-width text-center"
                                    v-model="aircraft.register"
                            >
                        </div>
                    </div>
                </div>

                <hr>

                <div class="list-label">HUB</div>
                <div class="item two-lines">
                    <div class="item-content">
                        <q-select
                                type="list"
                                width="100%"
                                class="full-width text-center"
                                v-model="aircraft.location"
                                :options="hubs">
                        </q-select>
                    </div>
                </div>

                <hr>

                <div class="list-label">Equipment</div>
                <div class="item two-lines">
                    <div class="item-content">
                        <q-select
                                class="full-width text-center"
                                type="list"
                                v-model="aircraft.equipment"
                                :options="equipments">
                        </q-select>
                    </div>
                </div>
            </div>
            <br>
            <button class="outline negative pull-left" @click="$emit('closeModal')">
                <i class="on-left">close</i> Close
            </button>
            <button class="secondary pull-right" @click="$emit('addAircraft', aircraft)">
                <i class="on-left">done</i> Save

            </button>
        </form>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        aircraft: {
          register: '',
          equipment: {},
          location: {}
        },
        hubs: [
          {label: 'SBGR', value: 'SBGR'},
          {label: 'SBGL', value: 'SBGL'},
          {label: 'SBSV', value: 'SBSV'}
        ],
        equipments: [
          {label: 'A319', value: '1'},
          {label: 'A320', value: '2'},
          {label: 'A321', value: '3'}
        ]
      }
    }
  }
</script>

<style>
</style>
