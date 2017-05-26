<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <RegisterForm></RegisterForm>
    </div>
  </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue'
export default {
  components: {
    RegisterForm
  }
}
</script>

<style>
</style>
