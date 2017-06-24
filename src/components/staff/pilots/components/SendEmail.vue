<template>
  <div>
    <div class="card bg-primary no-margin text-white">
      <div class="toolbar">
        <q-tollbar-title>
          <i>mail</i> Send Message
        </q-tollbar-title>
      </div>
      <div class="card-content">
        Destinator: {{ getGeneralSelected().full_name }}
        <br>
        Subject: 
        <input type="text" class="text-white" v-model="subject">
        <br>
        Message: 
        <br>
        <textarea class="text-white" v-model="msg"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapActions([]),
    ...mapGetters(['getGeneralSelected'])
  }
}
</script>

<style>
</style>
