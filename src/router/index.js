import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/page/index/index';
import Recommend from '@/page/index/recommend';
import Home from '@/page/index/home';
import Cook from '@/page/index/cook';
import Parts from '@/page/index/parts';
import Cloth from '@/page/index/cloth';
import Wash from '@/page/index/wash';
import Baby from '@/page/index/baby';
import Messy from '@/page/index/messy';
import Drink from '@/page/index/drink';
import Hobby from '@/page/index/hobby';
// 专题
import SpecialIndex from '@/page/special/index';
// 购物车
import ShopCartIndex from '@/page/shopcart/index';
// 个人中心
import SelfIndex from '@/page/selfcenter/index';

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
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/cook',
          name: 'Cook',
          component: Cook
        },
        {
          path: '/parts',
          name: 'Parts',
          component: Parts
        },
        {
          path: '/cloth',
          name: 'Cloth',
          component: Cloth
        },
        {
          path: '/wash',
          name: 'Wash',
          component: Wash
        },
        {
          path: '/baby',
          name: 'Baby',
          component: Baby
        },
        {
          path: '/messy',
          name: 'Messy',
          component: Messy
        },
        {
          path: '/drink',
          name: 'Drink',
          component: Drink
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/special',
      name: 'Special',
      component: SpecialIndex,
      meta: {scrollToTop: true}
    },
    {
      path: '/shopcart',
      name: 'ShopCartIndex',
      component: ShopCartIndex
    },
    {
      path: '/self',
      name: 'SelfIndex',
      component: SelfIndex
    }
  ]
});
