<template>
    <div>
      <div class="card bg-white">
        <div class="card-content">
          <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Awards Table
                    </q-toolbar-title>
                </div>
        <q-data-table
                :data="awards()"
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
import { mapGetters } from 'vuex'
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
        label: 'Exams Gruop',
        field: 'examsGruop',
        widht: '180px',
        sort: true,
        filter: true
      },
      {
        label: 'Change Rating?',
        field: 'itChangeRating',
        widht: '100px',
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
        label: 'Next Rating',
        field: 'nextRating',
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
  },
  methods: {
    ...mapGetters(['awards'])
  }
}
</script>

<style>
</style>
