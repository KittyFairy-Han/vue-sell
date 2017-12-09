import Vue from 'vue'
import Layout from './components/layout.vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailPubPage from './pages/detail/publish.vue'
// import Vuex from 'vuex'
Vue.use(Router);
Vue.use(VueResource);


let router=new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage,
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/forecast',
      children:[
        {
          path:'/forecast',
          component:DetailForPage,
        },
        {
          path:'/count',
          component:DetailCouPage,
        },
        {
          path:'/analysis',
          component:DetailAnaPage,
        },
        {
          path:'/publish',
          component:DetailPubPage,
        }
      ]
    },
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});
