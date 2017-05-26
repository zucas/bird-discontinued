<template>
  <div>
      <AwardCardTotal></AwardCardTotal>

      <award-table class="shadow-3"></award-table>
    <award-stats> </award-stats>  
  </div>
</template>

<script>
  import AwardTable from './AwardTable.vue'
  import AwardStats from './AwardStats.vue'
  import AwardCardTotal from './AwardCardTotal.vue'
  export default {
    data () {
      return {}
    },
    components: {
      AwardTable, AwardStats, AwardCardTotal
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
