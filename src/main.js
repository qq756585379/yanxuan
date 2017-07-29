// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import Vuex from 'vuex';
import iView from 'iview';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'mint-ui/lib/style.css';
import 'iview/dist/styles/iview.css';
import 'vue2-animate/dist/vue2-animate.min.css';

import store from './vuex/store';

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
});
