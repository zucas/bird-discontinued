<template>
  <div>
    <h5>New Equipment</h5>
    <form action="">
      <div class="list">

        <div class="item multiple-lines">
          <div class="item-content">
            <div class="floating-label">
              <label>Name</label>
              <input
                      class="full-width text-center"
                      v-model="equipment.name"
              >
            </div>
          </div>
        </div>

        <hr>

        <div class="item multiple-lines">
          <div class="item-content">
            <div class="floating-label">
              <label>ICAO</label>
              <input
                      class="full-width text-center"
                      v-model="equipment.icao"
              >
            </div>
          </div>
        </div>

        <hr>

        <div class="list-label">Minimum Rating</div>
        <div class="item two-lines">
          <div class="item-content">
            <q-select
                    class="full-width text-center"
                    type="list"
                    v-model="equipment.min_rating"
                    :options="ratings">
            </q-select>
          </div>
        </div>

      <hr>

      <label class="item">
        <div class="item-content has-secondary">
          Need Exam?
        </div>
        <div class="item-secondary">
          <q-toggle icon="school" class="negative" v-model="equipment.needExam"></q-toggle>
        </div>
      </label>
      </div>
      <br>
      <button class="outline negative pull-left" @click="$emit('closeModal')">
        <i class="on-left">close</i> Close
      </button>
      <button class="secondary pull-right" @click="$emit('addEquipment', equipment)">
        <i class="on-left">done</i> Save

      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratings: [
        {label: 'F/O', value: 'F/O'},
        {label: 'CMTE', value: 'CMTE'},
        {label: 'CMST', value: 'CMST'}
      ],
      equipment: {
        min_rating: {},
        needExam: false
      }
    }
  }
}
</script>

<style>
</style>
