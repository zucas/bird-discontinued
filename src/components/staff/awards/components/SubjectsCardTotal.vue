<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3" style="padding-bottom: 20px;">
                <div class="card-title no-padding">
                    <h3>{{ totalSubjects() }}</h3>
                </div>
                <div class="card-content no-padding">
                    <h5>Total Subjects</h5>
                </div>
            </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(['totalSubjects'])
  }
}
</script>

<style>
</style>
