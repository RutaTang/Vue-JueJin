// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    tab_home: true,
    tab_search: false,
    tab_bell: false,
    tab_people: false,
    nav_home:true,
    nav_prd: false,
    nav_front: false,
    nav_ios: false,
    isReadArticle: false,
  },
  mutations:{
    tab_home(state,status){
      state.tab_home = status
    },
    tab_search(state,status){
      state.tab_search = status
    },
    tab_bell(state,status){
      state.tab_bell = status
    },
    tab_people(state,status){
      state.tab_people = status
    },
    changeNav(state,name){
      switch (name){
        case 'nav_home':
          state.nav_home = true;
          state.nav_prd = false;
          state.nav_front = false;
          state.nav_ios = false;
          break;
        case 'nav_prd':
          state.nav_home = false;
          state.nav_prd = true;
          state.nav_front = false;
          state.nav_ios = false;
          break;
        case 'nav_front':
          state.nav_home = false;
          state.nav_prd = false;
          state.nav_front = true;
          state.nav_ios = false;
          break;
        case 'nav_ios':
          state.nav_home = false;
          state.nav_prd = false;
          state.nav_front = false;
          state.nav_ios = true;
          break;
      }
    },
    showReadArticle(state,status){
      state.isReadArticle = status;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


