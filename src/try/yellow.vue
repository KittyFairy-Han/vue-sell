<template>
  <div id="yellow">
    <P>{{ msg }}</P>
  </div>
</template>

<script>
export default {
  name: 'yellow',
  data () {
    return {
      msg: 'YELLOW'
    }
  },
}
</script>

<style>
#yellow {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
