<template>
  <div>
    <div class="card bg-white">
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Flights Table
                    </q-toolbar-title>
                </div>
        <div class="card-content">
          <q-data-table
                :data="flights()"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        <template slot="selection" scope="selection">
                <button disabled class="warning clear" @click="editFlight(selection)">
                    <i>edit</i> Edit Flight
                </button>
                <button class="red clear" @click="deleteFlight(selection)">
                    <i>delete</i> Delete Flight
                </button>
            </template>
        </q-data-table>
        </div>
    </div>
    <q-modal ref='deleteFlight'>
        <div class="card bg-red text-white no-margin">
          <div class="toolbar red">
            <q-toolbar-title>
              <i>delete</i> Delete Flight - {{ flight.number }}
            </q-toolbar-title>
          </div>
          <div class="card-content text-center">
            <h1><i>warning</i> </h1>
            <h5>Do you confirm?</h5> 
            <h5>This operation cannot be undone!</h5>
          </div>
          <div class="card-actions">
            <button @click='$refs.deleteFlight.close()' > <i>close</i> Cancel</button>
            <div class="auto"></div>
            <button> <i>delete</i> Delete</button>
          </div>
        </div>
    </q-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      flight: {},
      config: {
        bodyStyle: {
          maxHeight: '220px'
        },
        selection: 'one',
        rowHeight: '45px',
        pagination: {
          rowsPerPage: 50,
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
    ...mapGetters(['flights']),
    ...mapActions(['setGeneralSelected']),
    deleteFlight (selection) {
      this.flight = selection.rows[0].data
      this.$refs.deleteFlight.open()
    }
  }
}
</script>

<style>
</style>
