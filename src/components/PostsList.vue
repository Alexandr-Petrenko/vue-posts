<template>
  <ul class="post-list">
    <post-item
      v-for="post of getAllPosts"
      :key="post.id"
      :post="post"
    ></post-item>
  </ul>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import PostItem from '@/components/PostItem.vue';

export default {
  name: 'PostsList',
  components: {
    PostItem,
  },
  computed: mapGetters(['getAllPosts']),
  methods: {
    ...mapActions(['allPosts']),
  },
  mounted() {
    this.allPosts();
  },
};
</script>

<style lang="scss">
  .post-list {
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
</style>
