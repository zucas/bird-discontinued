<template>
  <div>
    <div class="card bg-five text-white">
      <div class="card-title">My Pireps</div>
      <div class="card-content">
        {{ pireps }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../../../modules/firebase'
let pirepsRef
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    pirepsRef = db.ref(`pilots/${firebase.auth().currentUser.uid}/pireps`)
  }
})
export default {
  firebase () {
    return {
      pireps: pirepsRef
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
