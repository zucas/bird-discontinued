<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <router-view></router-view>
    </div>
    <q-fab
            class="absolute-bottom-right"
            @click="alert()"
            classNames="primary"
            icon="keyboard_arrow_do"
            direction="up"
            style="right: 18px; bottom: 18px;"
    >
      <q-small-fab
              class="white"
              @click.native="$refs.newAircraft.open()"
              icon="add"
      ></q-small-fab>
    </q-fab>
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
