<!--
 * @description: 
 * @Author: T.W
 * @Github: https://github.com/TernenceWu0702
 * @Date: 2020-11-09 11:12:00
 * @LastEditors: T.W
 * @LastEditTime: 2020-11-10 10:29:51
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        this.changeScreenWidth(window.fullWidth);
      })();
    };
  },
  methods: {
    ...mapActions(["changeScreenWidth"])
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
