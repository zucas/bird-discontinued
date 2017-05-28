<template>
    <!-- root node required -->
    <div>
        <div class="toolbar info">
            <!-- Toolbar title -->
            <button @click="showGeneral">
                <i>dashboard</i>
                General
            </button>
            <button @click="$refs.newAircraft.open()">
                <i>add</i>
                New
            </button>
            <button @click="showTable">
                <i>list</i>
                Show All
            </button>
            <button>
                <i>timeline</i>
                Stats
            </button>
        </div>
        <!-- your content -->
        <div class="layout-padding">
            <router-view @btnEditClick="$refs.editAircraft.open()"
                         @btnMaintence="$refs.maintenanceAircraft.open()"></router-view>
        </div>
        <!--FAB-->
        <q-fab
                class="absolute-bottom-right"
                @click="alert()"
                classNames="negative"
                icon="flight"
                direction="up"
                style="right: 18px; bottom: 18px;"
        >
            <q-small-fab
                    class="purple"
                    @click.native="$refs.newAircraft.open()"
                    icon="timeline"
            ></q-small-fab>
            <q-small-fab
                    class="negative"
                    @click.native="showTable()"
                    icon="delete"
            ></q-small-fab>
            <q-small-fab
                    class="warning"
                    @click.native="showTable()"
                    icon="edit"
            ></q-small-fab>
            <q-small-fab
                    class="positive"
                    @click.native="$refs.newAircraft.open()"
                    icon="add"
            ></q-small-fab>
        </q-fab>
        <!--MODAIS-->
        <q-modal ref="newAircraft" :content-css="{padding: '50px', minWidth: '50vw'}">
            <aircraft-new-form @closeModal="$refs.newAircraft.close()"
                               @addAircraft="addAircraft">
            </aircraft-new-form>
        </q-modal>
        <q-modal ref="editAircraft" :content-css="{padding: '50px', minWidth: '50vw'}">
            <aircraft-edit-form @closeModal="$refs.editAircraft.close()"
                                @editAircraft="editAircraft">
            </aircraft-edit-form>
        </q-modal>
        <q-modal ref="maintenanceAircraft" :content-css="{padding: '50px', minWidth: '50vw'}">
            <aircraft-maintenance></aircraft-maintenance>
        </q-modal>

    </div>
</template>

<script>
  import AircraftEditForm from '../component/AircraftEditForm.vue'
  import AircraftNewForm from '../component/AircraftNewForm.vue'
  import AircraftMaintenance from '../component/AircraftMaintenace.vue'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {
        resource: {}
      }
    },
    created () {
      this.resource = this.$resource('fleet/aircrafts/{key}.json')
    },
    methods: {
      showGeneral: function () {
        this.$router.push({name: 'aircrafts-general'})
      },
      showTable: function () {
        this.$router.push({name: 'aircrafts-table'})
      },
      addAircraft: function (plane) {
        this.$refs.newAircraft.close()
        Toast.create.positive({
          html: 'Aircraft has been added!'
        })
      },
      editAircraft: function (aircraft) {
        this.$refs.editAircraft.close()
        Toast.create.positive({
          html: 'Aircraft has been updated!'
        })
      }
    },
    components: {
      AircraftEditForm,
      AircraftNewForm,
      AircraftMaintenance
    }
  }
</script>

<style>
</style>
