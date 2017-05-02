<template>
  <!-- root node required -->
  <div>
    <div class="toolbar bg-amber">
      <!-- Toolbar title -->
      <button @click="showGeneral">
        <i>dashboard</i>
        General
      </button>
      <button @click="$refs.newTheme.open()">
        <i>add</i>
        New
      </button>
      <button @click="showTable">
        <i>list</i>
        Show All
      </button>
      <button @click="showStats">
        <i>timeline</i>
        Stats
      </button>
    </div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable"></router-view>
    </div>
    <q-fab
            class="absolute-bottom-right"
            @click="alert()"
            classNames="bg-amber"
            icon="keyboard_arrow_up"
            direction="up"
            style="right: 18px; bottom: 18px; color: white;"
    >
      <q-small-fab
              class="purple"
              @click.native="showStats"
              icon="timeline"
      ></q-small-fab>
      <q-small-fab
              class="negative"
              @click.native="showTable"
              icon="delete"
      ></q-small-fab>
      <q-small-fab
              class="warning"
              @click.native="showTable"
              icon="edit"
      ></q-small-fab>
      <q-small-fab
              class="positive"
              @click.native="$refs.newTheme.open()"
              icon="add"
      ></q-small-fab>
    </q-fab>
    <q-modal ref="newTheme" :content-css="{padding: '50px', minWidth: '50vw'}">
      <new-subject @closeModal="$refs.newTheme.close()"></new-subject>
    </q-modal>
  </div>
</template>

<script>
  import NewSubject from '../components/SubjectNew.vue'
  export default {
    data () {
      return {}
    },
    methods: {
      showGeneral: function () {
        this.$router.push({name: 'subject-home'})
      },
      showTable: function () {
        this.$router.push({name: 'subject-table'})
      },
      showStats: function () {
        this.$router.push({name: 'subject-stats'})
      }
    },
    components: {
      NewSubject
    }
  }
</script>

<style>
</style>
