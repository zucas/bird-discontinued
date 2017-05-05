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
                <q-context-menu ref="context">
  <div
    class="list highlight"
    style="min-width: 150px; max-height: 300px;"
  >
    <div
      class="item item-link two-lines item-delimiter"
      v-for="n in 5"
      @click="$refs.context.close()"
    >
      <div class="item-content">
        <div>Where</div>
        <div>Action</div>
      </div>
    </div>
  </div>
</q-context-menu>
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
