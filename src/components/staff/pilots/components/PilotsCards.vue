<template>
  <div>
    <div class="flex">
      <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
        <div class="card-title no-padding">
          <h3>{{ pilots.length }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Total Pilots</h5>
        </div>
      </div>
      <div class="space"></div>
      <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;" @dblclick="$emit('vacanciesEdit')">
        <div class="card-title no-padding">
          <h3>{{ settings.total_vacancies - pilots.length }}</h3>
        </div>
        <div class="card-content no-padding">
          <h5>Free Vacancies</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
