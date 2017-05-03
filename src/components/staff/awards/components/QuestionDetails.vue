<template>
    <div>
        <h5> {{ question.statement }} </h5>
        <div class="list item-delimiter">
            <div class="item" :class="isCorrect(i)" v-for=" (alternative,i) in question.alternatives">
                <div class="item-content">
                    {{ alternative }}
                </div>
            </div>
        </div>
        <template v-if="question.hasImage">
            <p class="caption">Image Uploaded</p>
            <div class="row">
                <img :src="link" class="responsive">
            </div>
        </template>
        <p class="caption">Subject: {{ question.subject }}  </p>
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
        questionObjRef: {
          source: db.ref('school/questions/' + this.getGeneralSelected()['.key']),
          asObject: true
        }
      }
    },
    data () {
      return {
        link: '',
        question: {}
      }
    },
    methods: {
      ...mapGetters(['getGeneralSelected']),
      start: function () {
        this.question = this.getGeneralSelected()
        if (this.question.hasImage) {
          this.urlImg()
        }
      },
      urlImg: function () {
        Loading.show()
        storageRef.child(this.getGeneralSelected().imgLink).getDownloadURL().then(url => {
          this.link = url
          Loading.hide()
        }).then(() => {
          Loading.hide()
        })
      },
      isCorrect: function (i) {
        return i === parseInt(this.question.ta) ? 'bg-positive text-white' : ''
      }
    }
  }
</script>

<style>
</style>
