<template>
  <div style="text-align: left">
    <Critere @tryresearch="handleTryResearch" @badresearch="handleBadResearch"/>
    <ErrorPopUp v-if="researchIsBad"/>
    <Request v-if="activityNonNull" :activity="activity"/>

  </div>
</template>

<script>

  import axios from "axios"
  import Request from './components/Request.vue'
  import Critere from './components/Critere.vue'
  import ErrorPopUp from './components/ErrorPopUp.vue'

export default {
  name: 'App',
  components: {
    Request,
    Critere,
    ErrorPopUp,
  },
  data() {
    return {
      activity: null,
      bad: false,
    }
  },
  methods: {
    handleTryResearch(act) {
      this.activity=act;
      this.bad=false
    },
    handleBadResearch() {
      this.activity=null
      this.bad=true
    }
  },
  computed : {
    activityNonNull() {
        return this.activity!==null;
    },
    researchIsBad() {
      return this.bad;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
