<template>
    <div>
      <div class="card bg-white">
          <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Questions Table
                    </q-toolbar-title>
                </div>
        <div class="card-content">
        <q-data-table
                :data='questions()'
                :columns="columns"
                :config="config"
                :padding="15"
                style="margin-bottom: 20px;"
        >
            <template slot="selection" scope="selection">
                <button @click="showDetails(selection)" class="dark clear">
                    <i>remove_red_eye</i>
                </button>
                <button class="negative clear" @click="deleteRow(selection)">
                    <i>delete</i>
                </button>
            </template>
        </q-data-table>
        </div>
      </div>
        <sweet-modal ref="modal" overlay-theme="dark"  icon="error">
        	      <h4>Are you sure? </h4>
                <p>This Operation cannot be undone</p>
<button slot="button" class="negative clear" @click="executeDelete()">Yes, I'am </button>
</sweet-modal>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {Toast} from 'quasar'
  import { SweetModal } from 'sweet-modal-vue'
  export default {
    data () {
      return {
        config: {
          selection: 'single',
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
          label: 'Language',
          field: 'language',
          widht: '280px',
          sort: true,
          filter: true,
          format (value, row) {
            let upper = value.toUpperCase()
            if (upper === 'PT') {
              return 'PT-BR'
            }
            else {
              return upper
            }
          }
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
      ...mapGetters(['getGeneralSelected', 'questions']),
      showDetails: function (selection) {
        this.setGeneralSelected(selection.rows[0].data)
        this.$emit('showDetails')
      },

      deleteRow: function (selection) {
        this.$refs.modal.open()
        this.setGeneralSelected(selection.rows[0].data)
      },
      editRow: function (selection) {
      },
      executeDelete: function () {
        const item = this.getGeneralSelected()
        this.$firebaseRef.questionsFire.delete(item)
        // questionsRef.child(item['.key']).remove()
        this.$refs.modal.close()
        Toast.create.negative({
          html: `The Question has been <strong>DELETED<strong>`
        })
      }
    },
    components: {
      SweetModal
    }
  }
</script>

<style>
</style>
