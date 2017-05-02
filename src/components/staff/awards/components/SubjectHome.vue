<template>
    <div>
        <div class="row">
            <div class="card text-center bg-negative text-white" style="padding-bottom: 20px;" @click="$emit('showTable')">
                <div class="card-title no-padding">
                    <h3>{{ subjectsSize }}</h3>
                </div>
                <div class="card-content no-padding">
                    Total Subjects
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const subjectsRef = dbRoot.child('school/subjects')
  export default {
    firebase () {
      return {
        subjectsArray: subjectsRef
      }
    },
    data () {
      return {}
    },
    computed: {
      subjectsSize: function () {
        return this.subjectsArray.length
      }
    }
  }
</script>

<style>

</style>
