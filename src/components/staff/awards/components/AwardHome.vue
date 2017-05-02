<template>
  <div>
    <div class="row">
      <div class="notice warning">
        There is/are awards not used!
      </div>
    </div>
    <div class="row">
      <div class="card text-center bg-primary text-white" style="padding-bottom: 20px;" @click="$emit('showTable')">
        <div class="card-title no-padding">
          <h3>{{ awardsSize }}</h3>
        </div>
        <div class="card-content no-padding">
          Total Awards
        </div>
      </div>
    </div>
    <div class="row">
      <award-table></award-table>
    </div>
  </div>
</template>

<script>
  import db from '../../../../modules/firebase'
  const dbRoot = db.ref()
  const awardsRef = dbRoot.child('school/awards')
  import AwardTable from './AwardTable.vue'
  export default {
    firebase () {
      return {
        awardsArray: awardsRef
      }
    },
    data () {
      return {}
    },
    computed: {
      awardsSize: function () {
        return this.awardsArray.length
      }
    },
    components: {
      AwardTable
    }
  }
</script>

<style>

  .notice {
    position: relative;
    margin: 1em;
    background: #F9F9F9;
    padding: 1em 1em 1em 2em;
    border-left: 4px solid #DDD;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
    width: 100%;
  }

  .notice:before {
    position: absolute;
    top: 50%;
    margin-top: -17px;
    left: -17px;
    background-color: #DDD;
    color: #FFF;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    font-family: Georgia;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  }
  .warning {
    border-color: #FFDC00;
  }

  .warning:before {
    content: "!";
    background-color: #FFDC00;
  }
</style>
