<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <Exam></Exam>
    </div>
  </div>
</template>

<script>
import Exam from './Exam.vue'
export default {
  data () {
    return {}
  },
  components: {
    Exam
  }
}
</script>

<style>
</style>
