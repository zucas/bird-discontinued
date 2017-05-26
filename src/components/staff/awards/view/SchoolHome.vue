<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <ExamCard></ExamCard>
      <AwardCard></AwardCard>
      <QuestionCard></QuestionCard>
      <SubjectCard></SubjectCard>
    </div>
  </div>
</template>

<script>
import AwardCard from '../components/AwardCardTotal.vue'
import ExamCard from '../components/ExamsCardTotal.vue'
import QuestionCard from '../components/QuestionsCardTotal.vue'
import SubjectCard from '../components/SubjectsCardTotal.vue'
export default {
  data () {
    return {}
  },
  components: {
    AwardCard, QuestionCard, SubjectCard, ExamCard
  }
}
</script>

<style>
</style>
