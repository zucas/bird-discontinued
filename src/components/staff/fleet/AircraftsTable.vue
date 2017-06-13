<template>
  <div>
    <div class="card bg-white animate-pop">
      <div class="toolbar bg-secondary">
        <q-toolbar-title>
          <i>flight_takeoff</i> Aircrafts Table
        </q-toolbar-title>
      </div>
      <div class="card-content">
        <q-data-table
                :data='aircrafts()'
                :columns="columns"
                :config="config"
                :padding="15"
        >
        <template slot="selection" scope="selection">
                <button @click="changeLocation(selection)" class="pink clear">
                    <i>edit_location</i> Change Location
                </button>
                <button class="negative clear" @click="sellAircraftBtn(selection)">
                    <i>attach_money</i> Sell
                </button>
            </template>
        </q-data-table>
      </div>
    </div>
        <button class="circular absolute-bottom-right bg-teal" @click="$refs.newAircraft.open()" style="right: 25px; bottom: 18px; color: white;">
        <i>flight_takeoff</i>
        </button>
        <q-modal ref="newAircraft">
          <AircraftNew @close='$refs.newAircraft.close()' ></AircraftNew>
        </q-modal>
        <q-modal ref="changeLocation">
          <NewLocation @close='$refs.changeLocation.close()'></NewLocation>
        </q-modal>
        <q-modal ref="sellAircraft">
          <SellAircraft @close='$refs.sellAircraft.close()'></SellAircraft>
        </q-modal>
  </div>
</template>

<script>
import AircraftNew from './AircraftNew.vue'
import NewLocation from './ChangeAircraftLocation.vue'
import SellAircraft from './SellAircraft.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      config: {
        bodyStyle: {
          maxHeight: '220px'
        },
        selection: 'one',
        rowHeight: '45px',
        pagination: {
          rowsPerPage: 5,
          options: [5, 10, 15, 30, 50, 500]
        },
        messages: {
          noData: 'Nothing to Show.',
          noDataAfterFiltering: ''
        },
        labels: {
          columns: 'Coluns',
          allCols: 'All coluns',
          rows: 'Rows',
          selected: {
            singular: 'aircraft selected.',
            plural: 'aircrafts selected.'
          },
          clear: 'Clear',
          search: 'Search',
          all: 'All'
        }
      },
      columns: [
        {
          label: 'Register',
          field: 'register',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Model',
          field: 'model',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Location',
          field: 'location',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Status',
          field: 'status',
          format (value) {
            if (value === 'OK') {
              return '<i class="text-positive">done</i>'
            }
            else {
              return '<i class="text-negative">build</i>'
            }
          },
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Integrity',
          field: 'integrity',
          widht: '100px',
          format (value) {
            return `${value}%`
          },
          sort: true,
          filter: true
        }
      ]
    }
  },
  components: {
    AircraftNew,
    NewLocation,
    SellAircraft
  },
  methods: {
    ...mapActions(['setGeneralSelected']),
    ...mapGetters(['aircrafts']),
    changeLocation (selection) {
      this.setGeneralSelected(selection.rows[0].data)
      this.$refs.changeLocation.open()
    },
    sellAircraftBtn (selection) {
      this.setGeneralSelected(selection.rows[0].data)
      this.$refs.sellAircraft.open()
    }
  }
}
</script>

<style>
</style>
