<template>
  <div>
    <div class="card shadow-4" style="min-width: 98%">
      <div class="toolbar secondary">
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
      <div class="item multiple-lines">
        <div class="item-content">
          <div class="floating-label">
            <span class="label inline bg-primary text-white">
                Exam's Group
              </span>
            <q-autocomplete
                        v-model="award.examsGruop" 
                        @search="searchGruops">
                            <input v-model="award.examsGruop"                            
                            class="full-width text-center"
                                   placeholder="Type the name of Gruop of exams."
                                    />                            
                        </q-autocomplete>
          </div>
        </div>
      </div>
      <hr>
      <label class="item">
                      <div class="item-primary">
                          <q-checkbox v-model="award.itChangeRating"></q-checkbox>
                      </div>
                      <div class="item-content">
                          Change Rating ?
                      </div>
                  </label>

                  <div class="item multiple-lines" v-if="award.itChangeRating">
                    <hr>
        <div class="item-content">
          <div class="floating-label">
            <span class="label bg-primary text-white">
                Next Rating  <i class="on-right">info</i>
              </span>
              <q-select
                type="list"
                v-model="award.nextRating"
                :options="parsedRatings()"
                class="full-width text-center"
              ></q-select>
          </div>
        </div>
      </div>
      <q-uploader
                @add="addFile"
                :labels="labels"
                extensions=".gif,.jpg,.jpeg,.png"
                hide-upload-button
        >
        </q-uploader>


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
  import { required, minLength } from 'vuelidate/lib/validators'
  import {
    Toast,
    Utils
  } from 'quasar'
  import { mapActions, mapGetters } from 'vuex'
  import firebase from 'firebase'
  export default {
    data () {
      return {
        labels: {
          add: '<i class="on-left">add</i> ADD Image'
        },
        url: '',
        award: {
          examsGruop: '',
          name: '',
          concessionsNumber: 0,
          itChangeRating: true,
          nextRating: '',
          imgPath: ''
        }
      }
    },
    validations: {
      award: {
        name: { required, minLength: minLength(2) }
      }
    },
    methods: {
      ...mapGetters(['ratings', 'examsGruops']),
      ...mapActions(['addAward']),
      addFile: function (files) {
        this.file = files[0]
      },
      createAward: function () {
        if (this.award.hasExpiration === false) {
          this.award.expirationTime = 0
        }
        this.$v.award.$touch()
        if (this.$v.award.$error) {
          Toast.create.negative('Please review fields again.')
          return
        }
        else {
          let uid = Utils.uid()
          this.award.imgPath = 'school/awards/images/' + uid
          firebase.storage().ref().child('latam-va/school/awards/images/' + uid).put(this.file)
          this.addAward(this.award)
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
      },
      parsedAwardsGroup () {
        return this.awardsArray.map(obj => {
          return {
            label: obj['.key'],
            value: obj['.key']
          }
        })
      },
      parsedRatings () {
        return this.ratings().map(rating => {
          return {
            value: rating,
            label: rating
          }
        })
      },
      parsedGruops () {
        return this.examsGruops().map(gruop => {
          return {
            value: gruop,
            label: gruop
          }
        })
      },
      searchAwards (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.parsedAwardsGroup()}))
        }, 0)
      },
      searchGruops (terms, done) {
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.parsedGruops()}))
        }, 0)
      }
    }
  }
</script>

<style>

</style>
