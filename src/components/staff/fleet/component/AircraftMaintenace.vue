<template>
    <div>
        <h3> Maintenance - {{ aircraft.register }} </h3>
        <br>
        <template v-if="maintenanceStep === 0">
            <q-stepper @finish="finish()" ref="stepper">
                <q-step title="Select the place of maintenance">
                    <div class="list">
                        <div class="list-label">Location</div>
                        <div class="item two-lines">
                            <div class="item-content">
                                <q-select
                                        type="list"
                                        width="100%"
                                        class="full-width"
                                        v-model="aircraft.location"
                                        :options="locations">
                                </q-select>
                            </div>
                        </div>
                    </div>
                </q-step>
                <!-- Step specifying when user should be able to jump to next step -->
                <q-step title="Select a pilot" :ready="ready">
                    Content, DOM Elements, Components, ...
                    Do something and change 'ready' variable to boolean 'true'.


                </q-step>
                <q-step title="Items to be">
                    Content, DOM Elements, Components, ...


                </q-step>
            </q-stepper>


        </template>
        <br>
        <button class="outline negative pull-left">
            <i>close</i>
            Close


        </button>
        <button class="secondary pull-right" @click="maintenanceStep++">Next
            <i>keyboard_arrow_right</i>
        </button>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        maintenanceStep: 0
      }
    },
    mounted () {
    },
    methods: {
      ...mapGetters(['getAeronaveSelecionada'])
    },
    computed: {
      aircraft: function () {
        return this.getAeronaveSelecionada()
      },
      locations: function () {
        let locations = [
          {label: 'SBSC', value: 'SBSC'}
        ]
        locations.push({label: this.getAeronaveSelecionada().location, value: this.getAeronaveSelecionada().location})
        return locations
      }
    }
  }
</script>

<style>
</style>
