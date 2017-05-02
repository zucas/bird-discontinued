<template>
    <div>
        <h4>Edit Aircraft - {{ aircraft.register }}</h4>
        <div class="list">

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
                        <input
                                v-model="aircraft.register" required class="full-width">
                    </div>
                </div>
            </div>

            <hr>

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
                        <label>Equipment </label>
                        <label>
                            <input class="full-width"
                                   disabled
                                   v-model="aircraft.equipment"
                            >
                        </label>
                    </div>
                </div>
            </div>


            <hr>

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
                        <label>Location</label>
                        <label>
                            <input
                                    disabled
                                    class="full-width"
                                    v-model="aircraft.location"
                            >
                        </label>
                    </div>
                </div>
            </div>

            <hr>

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
                        <label>Points</label>
                        <br>
                        <q-progress :class="colorPoints" :percentage="aircraft.points"></q-progress>
                    </div>
                </div>
            </div>

            <hr>

            <label class="item">
                <div class="item-content has-secondary">
                    On maintence


                </div>
                <div class="item-secondary">
                    <q-toggle icon="build" class="dark" disable v-model="aircraft.onMaintence"></q-toggle>
                </div>
            </label>

            <hr>

            <label class="item">
                <div class="item-content has-secondary">
                    Reserved


                </div>
                <div class="item-secondary">
                    <q-toggle class="red" icon="assignment_ind" disable v-model="aircraft.reserved"></q-toggle>
                </div>
            </label>

            <hr>

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
                        <label>Total flights </label>
                        <input
                                disabled
                                class="full-width"
                                v-model="aircraft.totalFlights"
                        >
                    </div>
                </div>
            </div>

        </div>
        <br>
        <button class="outline negative pull-left" @click="$emit('closeModal')">
            <i class="on-left">close</i> Close


        </button>
        <button class="secondary pull-right" @click="$emit('editAircraft', aircraft)">
            <i class="on-left">edit</i> Edit


        </button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        resource: {}
      }
    },
    computed: {
      canChangeRegister: function () {
        if (this.aircraft.totalFilghts > 0) {
          return false
        }
        else {
          return true
        }
      },
      aircraft: function () {
        return this.getAeronaveSelecionada()
      },
      colorPoints: function () {
        if (this.aircraft.points < 60) {
          return 'red'
        }
        if (this.aircraft.points < 80) {
          return 'yellow'
        }
        else {
          return 'green'
        }
      }
    },
    methods: {
      ...mapGetters(['getAeronaveSelecionada'])
    }
  }
</script>

<style>
</style>
