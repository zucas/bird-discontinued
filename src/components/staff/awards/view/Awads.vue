<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable"></router-view>
    </div>
    <q-fab
            class="absolute-bottom-right"
            @click="alert()"
            classNames="bg-teal"
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
              @click.native="$refs.newAward.open()"
              icon="add"
      ></q-small-fab>
    </q-fab>
    <q-modal ref="newAward" :content-css="{padding: '50px', minWidth: '50vw'}">
      <award-new @closeModal="$refs.newAward.close()"></award-new>
    </q-modal>
  </div>
</template>

<script>
import AwardNew from '../components/AwardNew.vue'
export default {
  data () {
    return {}
  },
  methods: {
    showGeneral: function () {
      this.$router.push({name: 'awards-home'})
    },
    showTable: function () {
      this.$router.push({name: 'awards-table'})
    },
    showStats: function () {
      this.$router.push({name: 'awards-stats'})
    }
  },
  components: {
    AwardNew
  }
}
</script>

<style>
</style>
