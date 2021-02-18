import Vue from 'vue';
import Router from 'vue-router';
import PostsPreviews from '@/views/PostsPreviews.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PostsPreviews,
    },
    {
      path: '/post',
      name: 'PostDetails',
      component: () => import('@/views/PostDetails'),
    },

  ],
});
