<template>
  <div id="apple">
    <P>{{ msg }}</P>
    <button @click="addOne">add</button>
    <button @click="minusOne">minus</button>
    <button @click="getParam">get param</button>
    <router-link :to="{path:'red'}">to red</router-link>
    <router-link :to="{path:'green'}">to green</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'APPLE',
      price:5
    }
  },
  methods:{
    getParam(){
      console.log(this.$route.params)
    },
    addOne(){
      this.$store.dispatch('increase',this.price)
    },
    minusOne(){
      this.$store.commit('decrement',this.price)
    }
  }
}
</script>

<style>
#apple {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
