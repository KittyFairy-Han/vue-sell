<template>
  <div id="red">
    <P>{{ msg }}</P>
    <button @click="getParam">get param</button>
  </div>
</template>

<script>
export default {
  name: 'red',
  data () {
    return {
      msg: 'RED'
    }
  },
  methods:{
    getParam(){
      console.log(this.$route.params)
    }
  }
}
</script>

<style>
#red {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
