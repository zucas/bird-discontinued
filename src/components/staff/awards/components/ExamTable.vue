<template>
    <div>
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Exams Table
                    </q-toolbar-title>
                </div>
        <q-data-table
                :data="exams"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  let examsRef = db.ref('school/exams')
  export default {
    firebase () {
      return {
        exams: examsRef
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
            allCols: 'All Coluns',
            rows: 'Rows',
            selected: {
              singular: 'Exam selected.',
              plural: 'Exams selected.'
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
        },
        {
          label: 'Time (minutes)',
          field: 'time',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Questions',
          field: 'questions',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Minimum Score',
          field: 'minScore',
          widht: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Retry in (days)',
          field: 'daysToNewChance',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Approval rate',
          field: 'approvalRate',
          widht: '180px',
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
