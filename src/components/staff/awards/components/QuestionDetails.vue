<template>
    <div>
        <h5> {{ questionSelected.statement }} </h5>
        <div class="list item-delimiter">
            <div class="item" :class="isCorrect(i)" v-for=" (alternative,i) in questionSelected.alternatives">
                <div class="item-content">
                    {{ alternative }}
                </div>
            </div>
        </div>
        <p class="caption">Image Uploaded</p>
        <div class="row">
            <img :src="link" class="responsive">
        </div>

        <p class="caption">Subject: {{ questionSelected.subject }}  </p>
        <div class="row">
            <div class="card text-center bg-primary text-white" style="padding-bottom: 20px;">
                <div class="card-title no-padding">
                    <h3>0</h3>
                </div>
                <div class="card-content no-padding">
                    Total Calls
                </div>
            </div>
            <div class="space"></div>
            <div class="card text-center bg-primary text-white" style="padding-bottom: 20px;">
                <div class="card-title no-padding">
                    <h3>0</h3>
                </div>
                <div class="card-content no-padding">
                    Hit Rate
                </div>
            </div>
        </div>
        <br>
        <button class="outline negative pull-left" @click="$emit('closeModal')">
            <i class="on-left">close</i> Close
        </button>
        <button class="warning pull-right disabled">
            <i class="on-left">edit</i> Edit
        </button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import firebase from 'firebase'
  import db from '../../../../modules/firebase'
  const storageRef = firebase.storage().ref()
  import {Loading} from 'quasar'
  export default {
    firebase () {
      return {
        questionSelected3: {
          source: db.ref('school/questions/' + this.getGeneralSelected()['.key']),
          asObject: true
        },
        questionSelected2: {
          source: db.ref('school/questions/' + this.key),
          asObject: true
        }
      }
    },
    data () {
      return {
        link: '',
        key: ''
      }
    },
    methods: {
      ...mapGetters(['getGeneralSelected']),
      detroyMe: function () {
        console.log('fui chamado')
      },
      urlImg: function () {
        console.log(this.getGeneralSelected()['.key'])
        Loading.show()
        this.link = ''
        this.key = this.getGeneralSelected()['.key']
        storageRef.child('school/questions/images/' + this.getGeneralSelected().imgLink).getDownloadURL().then(url => {
          this.link = url
          Loading.hide()
          return url
        }).then(error => {
          Loading.hide()
          return error
        })
      },
      isCorrect: function (i) {
        return i === parseInt(this.questionSelected.ta) ? 'bg-positive text-white' : ''
      }
    },
    destroyed () {
      console.log('destruido')
    },
    computed: {
      questionSelected: function () {
        return this.getGeneralSelected()
      }
    }
  }
</script>

<style>
</style>
