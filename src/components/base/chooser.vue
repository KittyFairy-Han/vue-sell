<template>
    <form class="chooser-component">
      <ul class="chooser-list">
        <li v-for="(item, index) in selections" :class="{active:index === nowIndex}">
          <label>{{item.label}} <input type="radio" :value="item" v-model="choosed"></label>
        </li>
      </ul>
      </form>
</template>


<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data () {
      return {
        nowIndex: 0,
        choosed:{
          label: '半年',
          value: 0
        }
      }
    },
    watch: {
      choosed () {
        this.nowIndex=this.choosed.value;
        this.$emit('on-change', this.choosed)
      }
    },
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
