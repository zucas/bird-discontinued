<template>
    <div>
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Subjects Table
                    </q-toolbar-title>
                </div>
        <q-data-table
                class=""
                :data="subjects"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const questionsRef = dbRoot.child('school/questions')
  export default {
    firebase () {
      return {
        subjects: questionsRef
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
          field: '.key',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Total Questions',
          field: '',
          widht: '180px',
          sort: true,
          filter: false
        }, {
          label: 'Number of usages',
          field: 'usagesNumber',
          widht: '180px',
          sort: true,
          filter: false
        }]
      }
    },
    computed: {}
  }
</script>

<style>
</style>
