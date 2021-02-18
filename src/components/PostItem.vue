<template>
  <li class="post-list__item" @click="setState(post.id, post.userId, post.title, post.body)">
      <div class="post-list__details">
        <span class="post-list__user">[User# {{ post.userId }}]:</span>
        <span class="post-list__title">{{ post.title }}</span>
      </div>
      <router-link
        class="post-list__button"
        to="/post"
      >
        Open details
      </router-link>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PostItem',
  data() {
    return {
      fullPost: {},
    };
  },
  props: {
    post: Object,
  },
  methods: {
    ...mapMutations(['postDetails']),
    setState(postId, userId, postTitle, postBody) {
      this.fullPost.postId = postId;
      this.fullPost.userId = userId;
      this.fullPost.postTitle = postTitle;
      this.fullPost.postBody = postBody;
      this.postDetails(this.fullPost);
    },
  },
};
</script>

<style  lang="scss">
.post-list {
  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 40px;
    padding: 10px 40px 10px 20px;

    border-radius: 20px;
    background-color: #fff;

    text-align: left;
    color: #489ee2;
    font-size: 20px;
    line-height: 40px;
    @media (min-width: 1000px){
      flex-direction: row;
    }
  }

  &__user {
    margin-right: 10px;
  }

  &__button {
    display: inline-block;
    width: 150px;
    height: 30px;
    align-self: center;

    border-radius: 10px;
    border: none;
    background: #A4C2F4;
    cursor: pointer;
    transition: all .5s;

    font-size: 17px;
    color: #1660BF;
    text-decoration: none;
    text-align: center;
    line-height: 30px;

    &:hover {
      background-color: #489ee2;
      color: #fff;
      transition: all .5s;
    }
  }
  &__details {
    margin-bottom: 20px;
    text-align: center;

    @media (min-width: 1000px){
      margin-bottom: 0;
    }
  }
}
</style>
