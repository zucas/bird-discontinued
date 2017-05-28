<template>
  <div>
    <div class="card bg-five text-white">
      <div class="card-title">My Pireps</div>
      <div class="card-content">
        {{ pilot().pireps }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../../../modules/firebase'
import {mapGetters} from 'vuex'
let pirepsRef
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    pirepsRef = db
  }
})
export default {
  firebase () {
    return {
      pireps: pirepsRef
    }
  },
  methods: {
    ...mapGetters(['pilot'])
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
