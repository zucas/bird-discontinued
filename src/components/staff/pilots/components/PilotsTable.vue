<template>
  <div>
    <div class="card bg-white">
        <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Pilots Table
                    </q-toolbar-title>
                </div>
      <div class="card-content">  
        <q-data-table
                :data="allPilots()"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        <template slot="selection" scope="selection">
                <button @click="changeLocation(selection)" class="primary clear">
                    <i>mail</i> Send Email
                </button>
                <button @click="changeHub(selection)" class="red clear">
                    <i>device_hub</i> Tranfer HUB
                </button>
                <button @click="changeLocation(selection)" class="indigo clear">
                    <i>local_airport</i> Change Location
                </button>
                <button @click="showHistoric(selection)" class="teal clear">
                    <i>history</i> Historic
                </button>
                <button class="dark clear" @click="sellAircraftBtn(selection)">
                    <i>block</i> Black List
                </button>
            </template>
        </q-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
            singular: 'pilot selected.',
            plural: 'pilots selected.'
          },
          clear: 'Clear',
          search: 'Search',
          all: 'All'
        }
      },
      columns: [
        {
          label: 'Name',
          field: 'full_name',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'HUB',
          field: 'hub',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Local',
          field: 'local',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Rating',
          field: 'rating',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Hours',
          field: 'flight_hours',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Flights',
          field: 'total_flights',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'XP',
          field: 'xp',
          widht: '180px',
          sort: true,
          filter: true
        }
      ]
    }
  },
  methods: {
    ...mapGetters(['allPilots'])
  }
}
</script>

<style>
</style>
