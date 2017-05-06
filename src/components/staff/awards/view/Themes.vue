<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable"></router-view>
    </div>
    <button
            class="circular absolute-bottom-right bg-pink"
            @click="$refs.newSubject.open()"
            style="right: 25px; bottom: 18px; color: white;"
    >
      <i>add</i>
    </button>
    <q-modal ref="newSubject" :content-css="{padding: '50px', minWidth: '50vw'}">
      <new-subject @closeModal="$refs.newSubject.close()"></new-subject>
    </q-modal>
  </div>
</template>

<script>
  import NewSubject from '../components/SubjectNew.vue'
  export default {
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
