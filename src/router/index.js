import { createRouter, createWebHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';
import LayoutMain from '../Layouts/LayoutMain.vue';

const routes = [
  {
    path: '/',
    component: LayoutOverall,
    children: [
      {
        path: 'level-:level(\\d+)?', // 动态路由匹配层级
        component: LayoutMain,
        props: true, // 将路由参数传递给组件props
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
