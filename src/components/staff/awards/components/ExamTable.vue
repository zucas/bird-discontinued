<template>
    <div>
        <q-data-table
                :data="exams"
                :columns="columns"
                :config="config"
                :padding="15"
        >
            <template slot="selection" scope="selection">
                <button @click="editAircraft(selection)" class="warning clear">
                    <i>edit</i>
                </button>
                <button class="dark clear" @click="maintenanceAircraft(selection)">
                    <i>build</i>
                </button>
                <button class="positive clear">
                    <i>flight_takeoff</i>
                </button>
                <button class="light clear">
                    <i>history</i>
                </button>
                <button class="negative clear" @click="deleteRow(selection)">
                    <i>delete</i>
                </button>
            </template>
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
          title: 'Exams',
          pagination: {
            rowsPerPage: 15,
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
