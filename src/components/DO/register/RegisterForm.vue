<template>
  <div>
      <div class="row">
        <div class="auto"></div>
        <div class="card bg-white shadow-4" style="max-width: 60%">
        <div class="card-title bg-secondary text-white">
            Complete your register
            
          </div>
        <div class="card-content">
          <div class="row">
            <div class="auto"></div>

          <img class="img-circle shadow-2" :src='user.photoURL' :alt="user.displayName">
          <br>
            <div class="auto"></div>
          </div>
          
          <div class="list text-left">
        <div class="item">                
                <div class="item-content text-center">
                  <p class="item-label">LATAM VID: {{ settingsObj.nextCallsing }}</p>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label text-left">Full Name: </span>
                  <input v-model="pilot.personal_info.full_name" type="text" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Email: </span>
                  <input v-model="pilot.personal_info.email" type="text" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">HUB: </span>
                  <q-select
                    type="list"
                    v-model="pilot.va_info.hub"
                    :options="hubs"
                    style="min-width: 40%"
                  ></q-select>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Brithday: </span>
                  <q-datetime
                    v-model="pilot.personal_info.birthday"
                    type="date"
                    style="min-width: 40%"
                    class="text-left"
                  ></q-datetime>
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">City: </span>
                  <input type="text" v-model="pilot.personal_info.city" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Country: </span>
                  <input type="text" v-model="pilot.personal_info.country" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">VID IVAO: </span>
                  <input type="text" v-model="pilot.personal_info.vid_ivao" style="min-width: 40%">
                </div>
        </div>
        <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">VID VATSIM: </span>
                  <input type="text" v-model="pilot.personal_info.vatsim" style="min-width: 40%">
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
import db from '../../../modules/firebase'
let pilotsRef = db.ref('pilots')
import moment from 'moment'
import {Toast} from 'quasar'
export default {
  firebase () {
    return {
      settingsObj: {
        source: db.ref('general_settings'),
        asObject: true
      },
      hubsFire: db.ref('operations/hubs')
    }
  },
  data () {
    return {
      hubs: [],
      pilot: {
        personal_info: {
          birthday: moment().format()
        },
        va_info: {
          hub: {}
        },
        pireps: {}
      },
      user: {}
    }
  },
  mounted () {
    this.user = firebase.auth().currentUser
    this.pilot.personal_info.full_name = this.user.displayName
    this.pilot.personal_info.email = this.user.email
    this.hubsParsed()
  },
  methods: {
    newPilot () {
      this.completePilot()
      pilotsRef.child(this.user.uid).set(this.pilot).then(() => {
        Toast.create.positive({
          html: 'Your Register has been finalized!'
        })
        // Levar para exame de admissão
        this.$router.push({name: 'pilots-exam-center'})
      })
    },
    completePilot () {
      this.pilot.va_info.total_flights = 0
      // this.pilot.va_info.number = this.settingsObj.nextCallsing
      this.pilot.va_info.flight_hours = 0
      this.pilot.va_info.xp = 0
      this.pilot.va_info.rating = 0
      this.pilot.va_info.local = this.pilot.va_info.hub
    },
    hubsParsed () {
      this.hubsFire.map(hub => {
        this.hubs.push({
          label: hub['.key'],
          value: hub['.key']
        })
      })
    }
  }
}
</script>

<style>
</style>
