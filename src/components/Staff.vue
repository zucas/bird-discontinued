<template>
  <q-layout>
    <div slot="header" class="toolbar dark">
       <!--opens drawer below-->
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
        <q-toolbar-title>
            Bird SYS - Staff Center - v0.12a
         </q-toolbar-title>
    </div>

     <!--Drawer-->
    <q-drawer ref="leftDrawer" class="dark" swipe-only>
      <div class="list platform-delimiter secondary">
          <q-drawer-link icon="home" to="/">
              Home
          </q-drawer-link>
          <q-drawer-link icon="supervisor_account" to="/staff/pilots">
              Pilots
          </q-drawer-link>
          <q-drawer-link icon="flight" to="/staff/fleet" append>
              Fleet
            </q-drawer-link>
          <q-drawer-link icon="flight_takeoff" to="/staff/flights">
          Flights
        </q-drawer-link>
          <q-drawer-link icon="today" to="/staff/events">
          Events
        </q-drawer-link>
          <q-drawer-link icon="extension" to="/staff/options">
              General Operations
          </q-drawer-link>
          <q-drawer-link icon="school" to="/staff/exams-and-awards">
              Exams & Awards
            </q-drawer-link>
          <q-drawer-link icon="cloud_upload" to="/staff/foo">
              Manual Files
            </q-drawer-link>
          <q-drawer-link icon="help" :to="{path: '/staff/help', exact: true}">
              Help
           </q-drawer-link>
      </div>
    </q-drawer>
    <img class="fullscreen" src="http://lightersideofrealestate.com/wp-content/uploads/2014/09/clouds-background-light.jpg">
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
  computed: {},
  mounted () {
    this.$store.dispatch('fetchAllQuestions')
    this.$store.dispatch('fetchSubjects')
    this.$store.dispatch('fetchExamsData')
    this.$store.dispatch('fetchAwardsData')
    this.$store.dispatch('fetchRatings')
    this.$store.dispatch('fetchAllPilots')
    this.$store.dispatch('fetchAllFlights')
    this.$store.dispatch('fetchEquipments')
    this.$store.dispatch('fetchAircrafts')
    this.$store.dispatch('fetchHubs')
  }
}
</script>
