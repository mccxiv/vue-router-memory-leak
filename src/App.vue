
<template>
  <div>
    <router-link to="/route1">Route 1 (el-input and 10k divs)</router-link>
    <br>
    <router-link to="/route2">Route 2 (empty)</router-link>
    <br>
    <router-link to="/route3">Route 3 (10k divs, no components)</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
