<template>
    <div>
        <h3>
            New Award
        </h3>
        <div class="list">

            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          Name
        </span>
                        <input
                                class="full-width text-center"
                                v-model="award.name"
                        >
                    </div>
                </div>
            </div>

            <hr>

            <label class="item">
                <div class="item-primary">
                    <q-checkbox v-model="award.hasExpiration"></q-checkbox>
                </div>
                <div class="item-content">
                    Expires ?
                </div>
            </label>

            <hr>

            <div class="item multiple-lines"  v-if="award.hasExpiration">
                <div class="item-content">
                    <div class="floating-label">
            <span class="label inline bg-primary text-white">
          How Many Months?
        </span>
                        <q-range v-model="award.expirationTime" :min="3" :max="24" :step="3" label snap
                                 markers></q-range>
                    </div>
                </div>
            </div>

        </div>
        <br>
        <br>
        <button class="outline negative pull-left" @click="$emit('closeModal')">
            <i class="on-left">close</i> Close
        </button>
        <button class="secondary pull-right" @click="createAward">
            <i class="on-left">done</i> Save
        </button>
        <br>
        <br>
    </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  let awardsRef = db.ref('school/awards')
  import {Toast} from 'quasar'
  export default {
    data () {
      return {
        award: {
          hasExpiration: true,
          expirationTime: 12,
          concessionsNumber: 0
        }
      }
    },
    methods: {
      createAward: function () {
        if (this.award.hasExpiration === false) {
          this.expirationTime = 0
        }
        awardsRef.push(this.award)
        Toast.create.positive({
          html: 'Awards has been created!'
        })
        this.$emit('closeModal')
      }
    }
  }
</script>

<style>
</style>
