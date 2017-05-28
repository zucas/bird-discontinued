<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3">
                <div class="card-title no-padding">
                    <h3>{{ totalQuestions() }}</h3>
                </div>
                <div class="card-content no-padding">
                    <h5>Total Questions</h5>
                </div>
            </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(['totalQuestions'])
  }
}
</script>

<style>
</style>
