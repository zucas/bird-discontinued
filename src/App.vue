<template>
    <!-- Don't drop "q-app" class -->
    <div id="q-app">
        <router-view></router-view>
        <q-ajax-bar></q-ajax-bar>
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
    .space {
        width: 15px;
    }
</style>
