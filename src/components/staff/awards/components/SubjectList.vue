<template>
    <div>
      <div class="card bg-white">
        <div class="card-content">
          <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Subjects Table
                    </q-toolbar-title>
                </div>
        <q-data-table
                :data="subjects()"
                :columns="columns"
                :config="config"
                :padding="15"
        >
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
            columns: 'Columns',
            allCols: 'All Columns',
            rows: 'Linhas',
            selected: {
              singular: 'Subject selected.',
              plural: 'Subjects selected.'
            },
            clear: 'Clear',
            search: 'Search',
            all: 'All'
          }
        },
        columns: [{
          label: 'Name',
          field: 'name',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Total Questions',
          field: 'numberOfQuestions',
          widht: '180px',
          sort: true,
          filter: false
        }]
      }
    },
    methods: {
      ...mapGetters(['subjects'])
    }
  }
</script>

<style>
</style>
