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
                
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
      </div>
    </div>
        <button class="circular absolute-bottom-right bg-teal" @click="$refs.newEquipament.open()" style="right: 25px; bottom: 18px; color: white;">
        <i>flight_takeoff</i>
        </button>
        <q-modal ref="newEquipament">
          <AircraftNew></AircraftNew>
        </q-modal>
  </div>
</template>

<script>
import AircraftNew from './AircraftNew.vue'
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
          label: 'Name',
          field: 'name',
          widht: '180px',
          sort: true,
          filter: true
        }
      ]
    }
  },
  components: {
    AircraftNew
  }
}
</script>

<style>
</style>
