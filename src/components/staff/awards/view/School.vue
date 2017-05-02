<template>
  <!-- root node required -->
  <div>
    <q-tabs class="primary justified">
        <q-tab route="/staff/exams-and-awards/awards" >
            Awards
        </q-tab>
        <q-tab
                route="/staff/exams-and-awards/exams"
        >
            Exams
        </q-tab>
        <q-tab
                route="/staff/exams-and-awards/themes"
        >
            Subjects
        </q-tab>
        <q-tab
                route="/staff/exams-and-awards/questions"
        >
            Questions
        </q-tab>
    </q-tabs>

    <router-view></router-view>
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
