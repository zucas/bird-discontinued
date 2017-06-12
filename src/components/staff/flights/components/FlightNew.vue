<template>
  <div>
    <div class="card shadow-4 round-borders" style="min-width: 98%">
    <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Flight
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
          <div class="list">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Number
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.number" />                 
          </div>
        </div>
      </div>
      <hr>
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          DEP ICAO
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.dep" />                 
          </div>
        </div>
      </div>
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
          ARR  ICAO
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.arr" />                 
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
            Aircrafts <i class="on-right">info</i>
          <q-tooltip>
            You can select one or more models
          </q-tooltip>
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.aircraft " />                 
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
            EET
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.eet" />                 
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
      <hr>
      <!-- Começa aqui -->
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
            ETD
        </span>
            <input 
                   class="full-width text-center"
                   v-model="flight.etd" />                 
          </div>
        </div>
      </div>
      <!-- Acaba aqui -->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flight: {
        number: '',
        dep: '',
        arr: '',
        aircrafts: [],
        eet: '',
        etd: ''
      }
    }
  }
}
</script>

<style>
</style>
