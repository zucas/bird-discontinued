<template>
  <div>
    <div class="card shadow-4" style="min-width: 98%">
      <div class="toolbar">
                    <q-toolbar-title :padding="1">
                        New Award
                    </q-toolbar-title>
        </div>  
        <div class="card-content">
           <div class="list">
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
                Name
              </span>
            <input 
            @input="$v.award.name.$touch()"
            class="full-width text-center" 
            v-model="award.name"
            :class="{'has-error': $v.award.name.$error}"
            />
             <span v-if='$v.award.name.$error' class="text-red">
               Name is required and need be 4 or more chars
              </span>
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
      <div class="item multiple-lines" v-if="award.hasExpiration">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
                How Many Months?
              </span>
            <q-range v-model="award.expirationTime" :min="3" :max="24" :step="3" label snap markers></q-range>
          </div>
        </div>
      </div>
    </div>
        </div>
         <div class="card-actions card-no-top-padding">
         <button class="negative clear small" @click="$emit('closeModal')"><i class="on-left">close</i>Close</button>
              <div class="auto"></div>
              <button class="positive clear small" @click="createAward"><i class="on-left">done</i>Save</button>
      </div>
    </div>
   
  </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  let awardsRef = db.ref('school/awards')
  import { required, minLength } from 'vuelidate/lib/validators'
  import {
    Toast
  } from 'quasar'
  export default {
    data () {
      return {
        award: {
          name: '',
          hasExpiration: false,
          expirationTime: 12,
          concessionsNumber: 0
        }
      }
    },
    validations: {
      award: {
        name: { required, minLength: minLength(4) }
      }
    },
    methods: {
      createAward: function () {
        if (this.award.hasExpiration === false) {
          this.award.expirationTime = 0
          console.log(this.award)
        }
        this.$v.award.$touch()
        if (this.$v.award.$error) {
          Toast.create.negative('Please review fields again.')
          return
        }
        else {
          awardsRef.push(this.award)
          Toast.create.positive({
            html: 'Awards has been created!'
          })
          this.clearData()
          this.$emit('closeModal')
        }
      },
      clearData: function () {
        this.award.name = ''
        this.award.hasExpiration = false
        this.award.expirationTime = 12
        this.award.concessionsNumber = 0
      }
    }
  }
</script>

<style>

</style>
