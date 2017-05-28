<template>
  <q-layout>
    <div slot="header" class="toolbar primary">
      <button @click="$refs.left_menu.open()" v-if="pilot.rating !== 0">
        <i>menu</i>
      </button>  
      <q-toolbar-title :padding="1">
        LATAM-VA - Pilot Center
      </q-toolbar-title>     
      
      <button class="on-right" @click="$refs.user_info.open()">
        <i>account_circle</i>
      </button>
    </div>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
      <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
      <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
    </q-tabs>
    -->


    <q-drawer swipe-only ref="left_menu">
     
      <div class="row bg-secondary" style="padding-top: 15px; padding-bottom: 15px">
              <div class="auto"></div>
              <img class="img-circle shadow-2" style="max-height: 120px" src="https://pbs.twimg.com/profile_images/792080615470432256/htiHtTlg.jpg">
              <div class="auto"></div>
            </div>

      <div class="toolbar primary">
        <q-toolbar-title>
          Flights
        </q-toolbar-title>
      </div>

        <div class="list no-border platform-delimiter">
        <q-drawer-link class="full-width" :to="{path: '/', exact: true}" icon="flight_takeoff">
          Book a Flight
        </q-drawer-link>

      
        <!--
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Link
        </q-drawer-link>
        -->
        </div>
        <div class="toolbar tertiary">
        <q-toolbar-title>
          Exams
        </q-toolbar-title>
      </div>
      <div class="list no-border platform-delimiter">
        <q-drawer-link :to="{path: '/', exact: true}" icon="school">
          Exams Avaiables
        </q-drawer-link>
        </div>
        <div class="list fixed-bottom no-border platform-delimiter">
          <div class="row  gutter">
            <div class="auto">  </div>
        <button class="on-middle secondary" v-if="1 !== 2" >
        Staff Center
      </button>  
      <div class="auto"></div>
          </div>
        </div>

        
    </q-drawer>

    <q-drawer right-side swipe-only ref="user_info">
      <div class="row no-margin-top text-white" v-if='user().va_info.active' :class="colorNumber">
        <div class="auto"></div>
          <h5 class="thin-paragraph" >TAM{{ user().va_info.number }} </h5>
        <div class="auto"></div>
      </div>
      <div class="row no-margin-top bg-negative text-white" v-else>
        <div class="auto"></div>
          <h5 class="thin-paragraph" > Incomplete Register </h5>
        <div class="auto"></div>
      </div>
      <img class="responsive full-width" :src='user().profilePicUrl' :alt="user.displayName">
      <div class="row">
        <div class="auto"></div>
          <h5 class="light-paragraph">{{ user().name }}</h5>
        <div class="auto"></div>
      </div>
      <div class="row">
        <div class="auto"></div>
          <p class="light-paragraph">{{ user().email }}</p>
        <div class="auto"></div>
      </div>
      <div class="row">
        <div class="auto"></div>
        <button class="thin-paragraph text-faded" @click="signOut"> <i>power_settings_new</i> Logout</button>
        <div class="auto"></div>
      </div>
      <div class="toolbar bg-secondary">
        <q-toolbar-title>
          Personal
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link :to="{path: '/', exact: true}" icon="people">
          Edit My Account
        </q-drawer-link>
        <!--
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Link
        </q-drawer-link>
        -->
        <br><br>
        </div>
    </q-drawer>
    <img class="fit fullscreen" src="http://wallup.net/wp-content/uploads/2015/12/244209-nature-landscape-blue-clear_sky-valley-mountain.jpg" alt="">
    <router-view class="layout-view"></router-view>

    <!-- Footer
    <div slot="footer" class="toolbar"></div>
    -->
  </q-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// let haveVacancies = db.ref('general_settings').child('openVacancies')
export default {
  data () {
    return {
      pilot: {}
    }
  },
  created () {
    this.$store.dispatch('fetchFlightsFromDep', {
      dep_icao: this.user().va_info.local
    })
    this.$store.dispatch('fetchExamsData')
    this.$store.dispatch('fetchPremiumFlight')
    this.$store.dispatch('fetchNextEvents')
  },
  mounted () {
    if (this.user().va_info.rating === 0) {
      this.$router.push({name: 'pilots-exam-center'})
      // Redireciona para exames!
    }
    else {
      // Carrega as informações corretas
      this.$router.push({name: 'do-home'})
    }
  },
  computed: {
    colorNumber () {
      if (this.user().va_info.rating === 0) {
        return 'bg-warning'
      }
      else {
        return 'bg-positive'
      }
    }
  },
  methods: {
    ...mapGetters(['user']),
    ...mapActions(['signOut']),

    redirectFormRegister () {
      this.$router.push({name: 'incomplete-form'})
    }
  },
  redirectNoVacancy () {
    // TODO - Redirect StandBy List
  }
}
</script>
