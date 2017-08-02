import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/page/index/index';
import Recommend from '@/page/index/recommend';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {scrollToTop: true},
      children: [
        {
          path: '/',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/recommend',
          name: 'Recommend',
          component: Recommend
        }
      ]
    }
  ]
});
