<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable"></router-view>
    </div>
    <q-modal ref="newAward" :content-css="{padding: '1%', minWidth: '50%'}">
      <award-new @closeModal="$refs.newAward.close()"></award-new>
    </q-modal>
    <button class="circular absolute-bottom-right bg-pink" @click="$refs.newAward.open()" style="right: 25px; bottom: 18px; color: white;">
        <i>add</i>
          </button>
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
        this.$router.push({
          name: 'awards-home'
        })
      },
      showTable: function () {
        this.$router.push({
          name: 'awards-table'
        })
      },
      showStats: function () {
        this.$router.push({
          name: 'awards-stats'
        })
      }
    },
    components: {
      AwardNew
    }
  }
</script>

<style>

</style>
