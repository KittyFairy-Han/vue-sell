<template>
  <div>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{ product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
                <div v-if="!item.last" class="hr"></div>
              </li>
            </ul>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url" class="new-item">{{ item.title }}</a>
              <div v-if="!item.last" class="hr"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" @onchange="doSomeThingOnSlideChange"></slide-show>
        <div class="index-board-list">
          <div class="index-board-item"
               v-for="(item,index) in boardList"
               :class="'index-board-' + item.id">
            <div class="index-board-item-inner">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="index-board-button">
                <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideshow.vue'
  export default {
    components:{
      slideShow
    },
    created:function () {
      this.$http.get('api/products').then(
        (res)=> {
          this.productList = res.data.data;
        },
        (err)=> {
          console.log(err)
        }
      );
      this.$http.get('api/news').then(
        (res)=> {
          this.newsList = res.data.data;
        },
        (err)=> {
          console.log(err)
        }
      );
      this.$http.get('api/boards').then(
        (res)=> {
          this.boardList = res.data.data;
        },
        (err)=> {
          console.log(err)
        }
      );
    },
    data() {
      return {
        invTime: 2000,
        productList: {
        },
        newsList: [

        ],
        boardList: [
        ],
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: '/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: '/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: '/count'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: '/forecast'
          }
        ],
      }
    },
    methods:{
      doSomeThingOnSlideChange:function () {
      }
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr {
    margin: 10px 0;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-board-list {
    margin-top: 20px;
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }


  .index-board-loud {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/lound.png) no-repeat;
  }
  .index-board-car {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .index-board-car .index-board-item-inner {
    background: url(../assets/images/car.png) no-repeat;
  }
  .index-board-earth{
    margin-right: 10px;
    margin-top: 10px;
  }
  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/earth.png) no-repeat;

  }
  .index-board-hill {
    margin-top: 10px;
    margin-left: 10px;
  }
  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/hill.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 512px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
