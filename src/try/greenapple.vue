<template>
  <div id="green">
    <P>{{ msg }}</P>
    <button @click="getParam">get param</button>
  </div>
</template>

<script>
export default {
  name: 'green',
  data () {
    return {
      msg: 'green'
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
