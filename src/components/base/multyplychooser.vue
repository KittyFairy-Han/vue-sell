<template>
  <div>
    <div class="chooser-component">
      <form class="chooser-list">
        <li v-for="(item, index) in selections" :class="{active: checkActive(index)}">
          <label>
            {{item.label}}
          <input type="checkbox"
                 v-model="multy"
                 :value="item">
            </label>
        </li>
      </form>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

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
    data() {
      return {
        nowIndexes: [
          0,0,0
        ],
        multy:[
        ],
      }
    },
    methods:{
      checkActive:function (index) {
//        for(let i=0;i<3;i++){
//          if(index===this.nowIndex[i]) {
//            return true
//          }
//        }
      }
    },
    watch: {
      multy () {
        this.nowIndex=_.map(this.multy, (item) => {
          return item.value
        });
        this.$emit('on-change', this.multy)
      }
    },
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
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



