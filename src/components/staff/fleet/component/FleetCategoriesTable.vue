<template>
    <div>
        <q-data-table
                :data="data"
                :columns="columns"
                :config="config"
                :padding="15"
        >
        </q-data-table>
        <q-fab
                class="absolute-bottom-right"
                @click="alert()"
                classNames="primary"
                icon="keyboard_arrow_up"
                direction="up"
                style="right: 18px; bottom: 18px;"
        >
            <q-small-fab
                    class="white"
                    @click.native="addCategory()"
                    icon="add"
            ></q-small-fab>
        </q-fab>
    </div>
</template>

<script>
  import { Toast, Dialog } from 'quasar'

  export default {
    data () {
      return {
        resource: {},
        config: {
          rowHeight: '45px',
          title: 'Fleet Categories',
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
          label: 'Nome',
          field: 'nome',
          widht: '180px',
          sort: true,
          filter: true
        }],
        data: []
      }
    },
    created () {
      this.resource = this.$resource('api/categoria-de-frota')
      this.resource.get().then(response => {
        this.data = response.body
      })
    },
    methods: {
      addCategory: function () {
        let that = this
        Dialog.create({
          title: 'New Fleet Category',
          form: {
            nome: {
              type: 'textbox',
              label: 'Name',
              model: ''
            }
          },
          buttons: [
            'Cancel',
            {
              label: 'Create',
              handler (data) {
                that.resource.save(data).then(() => {
                  Toast.create.positive('Categoria: ' + data.nome + ' criada com sucesso!')
                }, response => {
                  Toast.create({
                    bgColor: 'red',
                    html: '<strong>Anubis</strong> - Algo deu errado: ' + response.status,
                    image: 'https://www.altoastral.com.br/wp-content/uploads/2015/05/anubis.jpg'
                  })
                })
              }
            }
          ]
        })
      }
    }
  }
</script>

<style>
</style>
