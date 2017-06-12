<template>
    <!-- Don't drop "q-app" class -->
    <div id="q-app">
        <router-view></router-view>
        <q-ajax-bar class="bg-secondary"></q-ajax-bar>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>

</style>
