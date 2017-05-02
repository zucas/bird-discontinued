<template>
    <div>
        <q-data-table
                :data="subjects"
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
  const dbRoot = db.ref()
  const subjectsRef = dbRoot.child('school/subjects')
  const questionsRef = dbRoot.child('school/questions')

  export default {
    firebase () {
      return {
        subjects: subjectsRef
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
          title: 'Subjects',
          pagination: {
            rowsPerPage: 15,
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
          field: 'totalQuestions',
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
    computed: {
      totalQuestions: function (subject) {
        let allQuestions = questionsRef
        let count
        allQuestions.forEach(question => {
          if (question.subject === subject) {
            count++
          }
        })
        return count
      }
    }
  }
</script>

<style>
</style>
