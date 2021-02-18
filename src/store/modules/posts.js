export default {
  actions: {
    async allPosts(ctx) {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const result = await response.json();

      ctx.commit('setPosts', result);
    },
  },
  mutations: {
    setPosts(state, result) {
      state.posts = result;
    },
    postDetails(state, fullPost) {
      state.fullPost = fullPost;
    },
  },
  state: {
    posts: [],
    fullPost: {},
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getFullPost(state) {
      return state.fullPost;
    },
  },
};
