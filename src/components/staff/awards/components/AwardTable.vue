<template>
    <div>
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Awards Table
                    </q-toolbar-title>
                </div>
                
        <q-data-table
                :data="awards"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
    </div>
</template>

<script>
import db from '../../../../modules/firebase'
let awardsRef = db.ref('school/awards')
export default {
  firebase () {
    return {
      awards: awardsRef
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
        label: 'Name',
        field: 'name',
        widht: '180px',
        sort: true,
        filter: true
      },
      {
        label: 'Do it expires?',
        field: 'hasExpiration',
        widht: '150px',
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
      },
      {
        label: 'Expire in (months)',
        field: 'expirationTime',
        widht: '180px',
        sort: true,
        filter: true
      }, {
        label: 'Concessions number',
        field: 'concessionsNumber',
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
