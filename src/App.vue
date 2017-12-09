<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <router-link :to="{path:'apple'}" tag="li">to apple</router-link>
    <router-link to="banana" tag="li">to banana</router-link>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Apple from './try/apple.vue'
  import Banana from './try/banana.vue'

  export default {
    components: {Apple, Banana},
    computed: {
      totalPrice(){
        return this.$store.state.totalPrice
      }
    },
    methods:{

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
