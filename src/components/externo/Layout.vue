<template>
  <q-layout>
    <div slot="header" class="toolbar bg-primary">
      <!-- opens drawer below
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title :padding="1">
        Bird System
      </q-toolbar-title>
    </div>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
      <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
      <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
    </q-tabs>
    -->

    <!-- Drawer
    <q-drawer ref="drawer">
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Link
        </q-drawer-link>
      </div>
    </q-drawer>
    -->

    <router-view class="layout-view"></router-view>


    <div slot="footer" class="toolbar dark">
      <div class="row">
        <div class="auto"></div>
      <p class="light-paragraph">Project Bird</p>
        <div class="auto"></div>
      </div>
    </div>

  </q-layout>
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
