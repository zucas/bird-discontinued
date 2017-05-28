<template>
  <div>
    <div class="card shadow-4 round-borders" style="min-width: 98%">
    <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Special Flight
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
    <q-inline-datetime
    readonly
  v-model="model"
  type="date"
></q-inline-datetime>
</div>
<div class="card-actions card-no-top-padding">
              <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small"><i class="on-left">done</i>Create</button>
    </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      model: moment().add(2, 'hours').format()
    }
  }
}
</script>

<style>
</style>
