<template>
    <div>
        <q-data-table
                :data="planes"
                :columns="columns"
                :config="config"
                :padding="15"
        >
            <template slot="selection" scope="selection">
                <button @click="editAircraft(selection)" class="warning clear">
                    <i>edit</i>
                </button>
                <button class="dark clear" @click="maintenanceAircraft(selection)" >
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
  import { mapActions } from 'vuex'
  import db from '../../../../modules/firebase'
  export default {
    firebase: function () {
      return {
        planes: db.ref('fleet/aircrafts')
      }
    },
    data () {
      return {
        resource: {},
        config: {
          bodyStyle: {
            maxHeight: '220px'
          },
          selection: 'one',
          rowHeight: '45px',
          title: 'Aircrafts',
          pagination: {
            rowsPerPage: 15,
            options: [5, 10, 15, 30, 50, 500]
          },
          messages: {
            noData: 'Nada para ser exibido.',
            noDataAfterFiltering: 'Nenhum ressultado. Por favor, tente outro filtro.'
          },
          labels: {
            columns: 'Colunas',
            allCols: 'Todas colunas',
            rows: 'Linhas',
            selected: {
              singular: 'aircraft selected.',
              plural: 'aircrafts selected.'
            },
            clear: 'Limpar',
            search: 'Buscar',
            all: 'Tudo'
          }
        },
        columns: [{
          label: 'Register',
          field: 'register',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Equipment',
          field: 'equipment',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Location',
          field: 'location',
          widht: '180px',
          sort: true,
          filter: true

        }, {
          label: 'On Maintece',
          field: 'onMaintence',
          widht: '240px',
          sort: true,
          filter: true,
          format (value, row) {
            if (value === false) {
              return 'No'
            }
            else {
              return 'Yes'
            }
          }
        }, {
          label: 'Reserved',
          field: 'isReserved',
          widht: '180px',
          sort: true,
          filter: true,
          format (value, row) {
            if (value === false) {
              return 'No'
            }
            else {
              return 'Yes'
            }
          }
        }
        ],
        data: []
      }
    },
    created () {
      this.$http.get('fleet/aircrafts.json').then(response => {
        return response.json()
      }).then(data => { this.data = Object.values(data) })
    },
    computed: {
      isEditable: function (selection) {
        return selection.rows[0].data.totalFlights > 0
      }
    },
    methods: {
      ...mapActions(['setAeronaveSelecionada']),
      editAircraft: function (selection) {
        this.setAeronaveSelecionada(selection.rows[0].data)
        this.$emit('btnEditClick')
      },
      maintenanceAircraft: function (selection) {
        this.setAeronaveSelecionada(selection.rows[0].data)
        this.$emit('btnMaintence')
      },
      deleteRow: function (selection) {}
    }
  }
</script>

<style>
</style>
