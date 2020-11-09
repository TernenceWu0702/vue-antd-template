<!--
 * @description: 
 * @Author: T.W
 * @Github: https://github.com/TernenceWu0702
 * @Date: 2020-11-09 10:26:00
 * @LastEditors: T.W
 * @LastEditTime: 2020-11-09 10:41:08
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary">集成antd</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
