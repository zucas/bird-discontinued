<template>
  <div>
    <div class="card no-margin bg-white">
      <div class="toolbar red">
        <q-toolbar-title>
          <i>device_hub</i> Transfer HUB | {{ getGeneralSelected().number }} - {{ getGeneralSelected().full_name }}
        </q-toolbar-title>
      </div>
      <div class="card-content">
        <div class="list no-border">
          <div class="item ">
              <h5 class="thin-paragraph text-center vertical-middle"> FROM - {{ getGeneralSelected().hub }} </h5>
            </div>
          <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-red text-white">
          New Hub
        </span>
            <q-select
                type="list"
                v-model="newHub"
                :options="hubsParsed()"
                class="full-width text-center"
              ></q-select>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="clear negative" @click='$emit("closeModal")'> <i>close</i> Cancel </button>
        <div class="auto"></div>
        <button class="clear positive" @click='changeHub'> <i>done</i> Chage </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { Toast } from 'quasar'
export default {
  data () {
    return {
      newHub: ''
    }
  },
  methods: {
    ...mapGetters(['getGeneralSelected', 'hubs']),
    ...mapActions(['editPilot']),
    hubsParsed () {
      return this.hubs().map(hub => {
        return {
          value: hub,
          label: hub
        }
      })
    },
    changeHub () {
      this.getGeneralSelected().hub = this.newHub
      this.editPilot(this.getGeneralSelected())
      Toast.create.positive(`HUB changed to ${this.getGeneralSelected().hub}`)
      this.$emit('closeModal')
    }
  }
}
</script>

<style>
</style>
