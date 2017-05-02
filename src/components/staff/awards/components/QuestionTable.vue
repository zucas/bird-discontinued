<template>
    <div>
        <q-data-table
                :data="questions"
                :columns="columns"
                :config="config"
                :padding="15"
                style="margin-bottom: 20px;"
        >
            <template slot="selection" scope="selection">
                <button @click="showDetails(selection)" class="dark clear">
                    <i>remove_red_eye</i>
                </button>
                <button @click="showDetails" class="yellow clear">
                    <i>edit</i>
                </button>
                <button class="negative clear" @click="deleteRow(selection)">
                    <i>delete</i>
                </button>
            </template>
        </q-data-table>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import db from '../../../../modules/firebase'
  const rootRef = db.ref()
  const questionsRef = rootRef.child('school/questions')
  export default {
    firebase () {
      return {
        questions: questionsRef
      }
    },
    data () {
      return {
        config: {
          bodyStyle: {
            maxHeight: '220px'
          },
          selection: 'single',
          rowHeight: '45px',
          title: 'Questions',
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
              singular: 'Question selected.',
              plural: 'Questions selected.'
            },
            clear: 'Clear',
            search: 'Search',
            all: 'All'
          }
        },
        columns: [{
          label: 'Statement',
          field: 'statement',
          widht: '280px',
          sort: true,
          filter: true
        }, {
          label: 'Theme',
          field: 'theme',
          widht: '280px',
          sort: true,
          filter: true
        }, {
          label: 'True Awenser',
          field: 'ta',
          widht: '280px',
          sort: false,
          filter: true,
          format (value, row) {
            return row.alternatives[value]
          }
        }, {
          label: 'Total calls',
          field: 'totalCalls',
          widht: '120px',
          sort: true,
          filter: false
        }, {
          label: 'Hit Rate',
          field: 'hitRate',
          widht: '120px',
          sort: true,
          filter: false
        }
        ]
      }
    },
    methods: {
      ...mapActions(['setGeneralSelected']),
      showDetails: function (selection) {
        this.setGeneralSelected(selection.rows[0].data)
        this.$emit('showDetails')
      }
    }
  }
</script>

<style>
</style>
