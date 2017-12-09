<template>
  <div id="banana">
    <P>{{ msg }}</P>
    <router-link :to="{path:'color'}">to color</router-link>
    <router-link :to="{path:'color2'}">to color2</router-link>
    <router-view></router-view>
    <router-view name="v1"></router-view>
    <router-view name="v2"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'banana',
    data() {
      return {
        msg: 'BANANA'
      }
    }
  }
</script>

<style>
  #banana {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
