<template>
  <div>
    <div class="card shadow-3">
          <div class="toolbar bg-tertiary">
                    <q-toolbar-title :padding="1">
                      <i>flight_takeoff</i> Avaible Flights From {{ pilot().va_info.local }}
                    </q-toolbar-title>
                </div>
<div class="card-content bg-white text-primary">
          <q-data-table
                :data="flights()"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        <template slot="selection" scope="selection">
                <button @click="showDetails(selection)" class="dark clear">
                    <i>flight_takeoff</i>
                </button>
                <button class="negative clear" @click="deleteRow(selection)">
                    <i>delete</i>
                </button>
            </template>
        </q-data-table>
</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
            singular: 'flight selected.',
            plural: 'flights selected.'
          },
          clear: 'Clear',
          search: 'Search',
          all: 'All'
        }
      },
      columns: [
        {
          label: 'Number',
          field: 'number',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Departure',
          field: 'dep',
          widht: '180px',
          sort: true,
          filter: true
        },
        {
          label: 'Arrival',
          field: 'arr',
          widht: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Aircraft',
          field: 'aircraft',
          widht: '150px',
          sort: true,
          filter: true
        },
        {
          label: 'EET',
          field: 'eet',
          widht: '100px',
          sort: true,
          filter: true
        }
      ]
    }
  },
  methods: {
    ...mapGetters(['flights', 'pilot'])
  },
  mounted () {
  }
}
</script>
