<template>
    <!-- root node required -->
    <div>
        <div class="toolbar">
            <!-- Toolbar title -->
            <button>
                <i>dashboard</i>
                General
            </button>
            <button @click="$refs.newEquipment.open()">
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
                classNames="primary"
                icon="flight"
                direction="up"
                style="right: 18px; bottom: 18px;"
        >
            <q-small-fab
                    class="purple"
                    @click.native="$refs.newEquipment.open()"
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
                    @click.native="$refs.newEquipment.open()"
                    icon="add"
            ></q-small-fab>
        </q-fab>
        <!--MODAIS-->
        <q-modal ref="newEquipment" :content-css="{padding: '50px', minWidth: '50vw'}">
            <new-equipment @addEquipment="addEquipment"></new-equipment>
        </q-modal>
        <q-modal ref="editAircraft" :content-css="{padding: '50px', minWidth: '50vw'}">
        </q-modal>
        <q-modal ref="maintenanceAircraft" :content-css="{padding: '50px', minWidth: '50vw'}">
        </q-modal>

    </div>
</template>

<script>
  import NewEquipment from '../component/NewEquipment.vue'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {}
    },
    methods: {
      addEquipment: function (equipment) {
        this.$refs.newEquipment.close()
        Toast.create.positive({
          html: 'Equipment ' + equipment.icao + ' has been added!'
        })
      }
    },
    components: {
      NewEquipment
    }
  }
</script>

<style>
</style>
