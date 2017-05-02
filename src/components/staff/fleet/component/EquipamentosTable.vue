<template>
    <div>
        <q-data-table
                :data="equipments"
                :columns="columns"
                :config="config"
                :padding="15"
        >

            <template slot="selection" scope="selection">
                <button @click="editEquipment(selection)" class="warning clear">
                    <i>edit</i>
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
  export default {
    firebase () {
      return {
        equipments: db.ref('fleet/equipments')
      }
    },
    data () {
      return {
        config: {
          selection: 'one',
          rowHeight: '45px',
          title: 'Equipments',
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
              singular: 'equipamento selecionado.',
              plural: 'equipamentos selecionado.'
            },
            clear: 'Limpar',
            search: 'Buscar',
            all: 'Tudo'
          }
        },
        columns: [{
          label: 'ICAO',
          field: 'icao',
          widht: '180px',
          sort: true,
          filter: true
        }, {
          label: 'Name',
          field: 'name',
          widht: '180px',
          sort: true,
          filter: true

        }, {
          label: 'Minimum Rating',
          field: 'min_rating',
          widht: '240px',
          sort: true,
          filter: true

        }, {
          label: 'Type',
          field: 'type',
          widht: '240px',
          sort: true,
          filter: true

        }, {
          label: 'Total Aircrafts',
          field: 'total_aircrafts',
          widht: '240px',
          sort: true,
          filter: true

        }],
        data: []
      }
    },
    created () {
      console.log(this.equipments)
    }
  }
</script>

<style>
</style>
