<template>
  <div>
    <div class="row">
    </div>
      <div class="row">
        <div class="auto"></div>
        <div class="card bg-white shadow-4" style="max-width: 60%">
        <div class="card-title bg-secondary text-white">
            Complete your register            
          </div>
        <div class="card-content">
          <div class="row">
            <p class="thin-paragraph">Welcome aboard, {{ pilot.full_name }}! Please, complete your register and start flight in few minutes. </p>
          </div>
          <br>
          <div class="row">
            <div class="auto"></div>

          <img src='http://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Airplanes-PNG-Clipart/Airplane_Transparent_Vector_Clipart.png?m=1433777004' :alt="user.displayName">

            <div class="auto"></div>
          </div>
          <br>
          <br>
          <div class="list text-left">
        <div class="item">                
                <div class="item-content text-center">
                  <p class="item-label"></p>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label text-left">Full Name: </span>
                  <input v-model="pilot.full_name" type="text" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Email: </span>
                  <input v-model="pilot.email" type="text" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">HUB: </span>
                  <q-select
                    type="list"
                    v-model="pilot.hub"
                    :options="hubsParsed()"
                    style="min-width: 40%"
                  ></q-select>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Brithday: </span>
                  <q-datetime
                    v-model="pilot.birthday"
                    type="date"
                    style="min-width: 40%"
                    class="text-left"
                  ></q-datetime>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">City: </span>
                  <input type="text" v-model="pilot.city" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Country: </span>
                  <input type="text" v-model="pilot.country" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">VID IVAO: </span>
                  <input type="text" v-model="pilot.vid_ivao" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">VID VATSIM: </span>
                  <input type="text" v-model="pilot.vatsim" style="min-width: 40%">
                </div>
        </div>
        <br>
      </div>
      </div>
        <div class="card-actions">
        <div class="auto"></div>
        <button @click="newPilot" class='positive clear pull-right'>Complete <i>send</i> </button>
        </div>

        </div>
        <div class="auto"></div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      pilot: {
        birthday: moment().format(),
        hub: {}
      },
      user: {}
    }
  },
  created () {
    this.$store.dispatch('fetchHubs')
  },
  mounted () {
    this.user = firebase.auth().currentUser
    this.pilot.full_name = this.user.displayName
    this.pilot.email = this.user.email
  },
  methods: {
    ...mapGetters(['hubs']),
    ...mapActions(['setPilot']),
    newPilot () {
      this.completePilot()
      this.setPilot({uid: this.user.uid, pilot: this.pilot})
    },
    completePilot () {
      this.pilot.total_flights = 0
      this.pilot.flight_hours = 0
      this.pilot.xp = 0
      this.pilot.rating = 0
      this.pilot.local = this.pilot.hub
      this.pilot.schedule = false
    },
    hubsParsed () {
      return this.hubs().map(hub => {
        return {
          value: hub,
          label: hub
        }
      })
    }
  }
}
</script>

<style>
</style>
