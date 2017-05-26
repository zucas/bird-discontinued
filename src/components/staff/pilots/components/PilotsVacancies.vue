<template>
  <div>
    <div class="card shadow-4" style="min-width: 98%">
        <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        Total Vacancies
                    </q-toolbar-title>
        </div>
         <div class="card-content">
          <div class="list">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Total
        </span>
        <q-numeric
          v-model="settings.total_vacancies"
          class="full-width"
          :min="pilots.length"
        ></q-numeric>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="card-actions card-no-top-padding">
              <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small"@click="changeVacancies"><i class="on-left">done</i>Save</button>
    </div>
    </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
let pilotsRef = db.ref('pilots')
let settingsRef = db.ref('general_settings')
import {Toast} from 'quasar'
export default {
  firebase () {
    return {
      pilots: pilotsRef,
      settings: {
        asObject: true,
        source: settingsRef
      }
    }
  },
  data () {
    return {
      vacancies: 230
    }
  },
  methods: {
    changeVacancies () {
      settingsRef.child('total_vacancies').set(this.settings.total_vacancies)
      Toast.create.positive({
        html: 'The number of <strong>vacancies</strong> has been uploaded!'
      })
      this.$emit('closeModal')
    }
  }
}
</script>

<style>
</style>
