<template>
  <div>
    <div class="card bg-four text-white shadow-3">
      <div class="card-title">My Awards</div>
      <div class="card-content">
                <div class="row gutter">
          <div v-for="(award, i) in awards" class="width-1of5">
            <div class="card text-center shadow-4" @click='$refs.confirmation.open()'>
            <div class="card-media">
              <img class="responsive" src="https://i.ytimg.com/vi/NhvQ35mE1OI/hqdefault.jpg" alt="">
            </div>
            <div class="card-content bg-tertiary text-white"> {{award}}</div>
          </div>
            <div class="space"></div>
          </div>          
        </div>   
      </div>
    </div>
    <sweet-modal title="Confirmation" ref='confirmation' icon="warning">
      Confirmation
    </sweet-modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { SweetModal } from 'sweet-modal-vue'
export default {
  data () {
    return {
      awards: []
    }
  },
  methods: {
    ...mapGetters(['getPilot'])
  },
  created () {
    this.awards = this.getPilot().awards
  },
  components: {
    SweetModal
  }
}
</script>

<style>
</style>
