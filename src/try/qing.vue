<template>
  <div id="qing">
    <P>{{ msg }}</P>
  </div>
</template>

<script>
export default {
  name: 'qing',
  data () {
    return {
      msg: 'Qing'
    }
  },
}
</script>

<style>
#qing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
