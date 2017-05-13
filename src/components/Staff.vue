<template>
  <q-layout>
    <div slot="header" class="toolbar dark">
       <!--opens drawer below-->
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
        <q-toolbar-title>
            LATAM Virtual - Staff Center - v0.1a
         </q-toolbar-title>
    </div>

     <!--Drawer-->
    <q-drawer ref="leftDrawer" class="dark" swipe-only>
      <div class="list platform-delimiter secondary">
          <q-drawer-link icon="supervisor_account" to="/staff">
              Pilots
          </q-drawer-link>
          <q-drawer-link icon="flight" to="/staff/fleet" append>
              Fleet
            </q-drawer-link>
          <q-drawer-link icon="flight_takeoff" to="/staff/foo">
          Flight's
        </q-drawer-link>
          <q-drawer-link icon="extension" to="/staff/options">
              General Operations
          </q-drawer-link>
          <q-drawer-link icon="school" to="/staff/exams-and-awards">
              Exam's & Award's
            </q-drawer-link>
          <q-drawer-link icon="cloud_upload" to="/staff/foo">
              Manual's
            </q-drawer-link>
          <q-drawer-link icon="help" :to="{path: '/DO/foo', exact: true}">
              Help
           </q-drawer-link>
      </div>
    </q-drawer>

    <router-view class="layout-view"></router-view>

     <!--Footer-->
    <div slot="footer" class="toolbar dark" >
        <p class="vertical-middle text-center">BIRD {{ actualYear }} - All Rights Reserved</p>
    </div>
  </q-layout>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      actualYear: moment().format('YYYY')
    }
  },
  computed: {}
}
</script>
