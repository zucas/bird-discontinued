<template>
  <div>
    <div class="card text-center bg-primary text-white shadow-3">
                <div class="card-title no-padding">
                    <h3>{{ questions.total_questions }}</h3>
                </div>
                <div class="card-content no-padding">
                    <h5>Total Questions</h5>
                </div>
            </div>
  </div>
</template>

<script>
import db from '../../../../modules/firebase'
export default {
  firebase () {
    return {
      questions: {
        source: db.ref('school'),
        asObject: true
      }
    }
  }
}
</script>

<style>
</style>
