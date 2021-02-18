<template>
  <div>
    <div class="posts-section">
      <posts-list :userPosts="userPosts"></posts-list>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';

export default {
  data() {
    return {
      userPosts: [],
      allUsers: [],
    };
  },
  name: 'App',
  components: {
    PostsList,
  },
};
</script>
