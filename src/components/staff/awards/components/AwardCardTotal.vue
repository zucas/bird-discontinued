<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
        <div class="card-title no-padding">
          <h3>{{ awardsSize }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Total Awards</h5>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
const dbRoot = db.ref()
const awardsRef = dbRoot.child('school/awards')
export default {
  firebase () {
    return {
      awardsArray: awardsRef
    }
  },
  data () {
    return {}
  },
  computed: {
    awardsSize: function () {
      return this.awardsArray.length
    }
  }
}
</script>

<style>
</style>
