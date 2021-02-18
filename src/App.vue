<template>
  <div id="app">
    <h1>Posts</h1>
    <div class="posts-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.posts-wrapper {
    width: 95%;
    margin: 0 auto;
    padding: 50px 10px;

    background-color: #A4C2F4;
    border-radius: 20px;
}
</style>
