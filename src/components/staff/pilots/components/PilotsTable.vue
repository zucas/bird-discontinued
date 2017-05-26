<template>
  <div>
    <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Pilots Table
                    </q-toolbar-title>
                </div>
        <q-data-table
                :data="pilots"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
let pilotsRef = db.ref('pilots')
export default {
  firebase () {
    return {
      pilots: pilotsRef
    }
  },
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
          label: 'First Name',
          field: 'first_name',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Last Name',
          field: 'last_name',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Country',
          field: 'country',
          widht: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Rating',
          field: 'rating',
          widht: '150px',
          sort: true,
          filter: true
        },
        {
          label: 'Flights',
          field: 'total_flights',
          widht: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Flight Hours',
          field: 'total_flight_hours',
          widht: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'XP',
          field: 'total_xp',
          widht: '100px',
          sort: true,
          filter: true
        }
      ]
    }
  }
}
</script>

<style>
</style>
