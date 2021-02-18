<template>
  <div class="post-list__item">
    <div class="details">
      <span class="post-list__id details__title">[Post# {{ getFullPost.postId }}]:</span>
      <span class="post-list__title details__title">
        [Post Title: {{ getFullPost.postTitle }} ]
      </span>
      <span class="post-list__title details__title">[Post Text: {{getFullPost.postBody}} ]</span>
      <router-link
        class="post-list__button details__button"
        to="/"
      >
        Back
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PostDetails',
  computed: mapGetters(['getFullPost']),
};
</script>

<style scoped lang="scss">
  .details {
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 1000px) {
      text-align: left;
    }

    &__title {
      margin-bottom: 20px;

      @media (min-width: 1000px) {
        margin-bottom: 10px;
      }
    }
  }
</style>
