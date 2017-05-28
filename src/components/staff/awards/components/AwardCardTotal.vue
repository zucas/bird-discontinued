<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
        <div class="card-title no-padding">
          <h3>{{ awardsNumber() }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Total Awards</h5>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(['awardsNumber'])
  }
}
</script>

<style>
</style>
