<template>
  <!-- root node required -->
  <div>
    <h1>Options</h1>
    <!-- your content -->
    <div class="layout-padding">
      <div class="card bg-white shadow-3">
        <div class="card-title bg-secondary text-white">
          General Settings
        </div>
        <div class="card-content">
          <div class="list no-border">
            <label class="item">
              <div class="item-content">
                First Callsing
              </div>
              <div class="item-secondary">
                <input type="text">
              </div>
            </label>
            <label class="item">
              <div class="item-content">
                First Rating
              </div>
              <div class="item-secondary">
                <q-select
                  type="list"
                  v-model="firstRating"
                  :options="ratingsParsed"
                ></q-select>
              </div>
            </label>
            <label class="item two-lines">
      <div class="item-content has-secondary">
        <div>Admissional Exams</div>
        <div>Active the admissional EXAM</div>
      </div>
      <div class="item-secondary">
        <q-toggle v-model="examRequired" icon="school"  class="purple"></q-toggle>
      </div>
    </label>
            <label class="item two-lines">
      <div class="item-content has-secondary">
        <div>Free Schedule</div>
        <div>When this option is on, all pilots can select there next flight from actual location</div>
      </div>
      <div class="item-secondary">
        <q-toggle v-model="freeFlight" icon='linear_scale'  class="orange"></q-toggle>
      </div>
    </label>
            <label class="item two-lines">
      <div class="item-content has-secondary">
        <div>Fleet Control</div>
        <div class="text-red">CAUTION:When you dismark this option, the fleet control will be disable.</div>
      </div>
      <div class="item-secondary">
        <q-toggle icon='airplanemode_active' v-model="fleetControl"  class="red"></q-toggle>
      </div>
    </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        examRequired: true,
        freeFlight: true,
        fleetControl: true,
        hub: '',
        firstRating: ''
      }
    },
    methods: {
      ...mapGetters(['ratings'])
    },
    computed: {
      ratingsParsed () {
        return this.ratings().map(rating => {
          return {
            value: rating,
            label: rating
          }
        })
      }
    }
  }
</script>

<style>

</style>
