<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view @showTable="showTable"></router-view>
    </div>
    <q-modal ref="newExam" :content-css="{padding: '1%', minWidth: '50%'}">
      <new-exam @closeModal="$refs.newExam.close()"></new-exam>
    </q-modal>
        <button class="circular absolute-bottom-right bg-pink" @click="$refs.newExam.open()" style="right: 25px; bottom: 18px; color: white;">
          <i>add</i>
        </button>
  </div>
  
</template>

<script>
  import NewExam from '../components/ExamNew.vue'
  export default {
    data () {
      return {}
    },
    methods: {
      showGeneral: function () {
        this.$router.push({name: 'exams-home'})
      },
      showTable: function () {
        this.$router.push({name: 'exams-table'})
      },
      showStats: function () {
        this.$router.push({name: 'exams-stats'})
      }
    },
    components: {
      NewExam
    }
  }
</script>

<style>
</style>
