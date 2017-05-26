<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <ExamsAvaiable></ExamsAvaiable>
    </div>
  </div>
</template>

<script>
import ExamsAvaiable from './ExamsAvaiable.vue'
export default {
  data () {
    return {}
  },
  components: {
    ExamsAvaiable
  }
}
</script>

<style>
</style>
