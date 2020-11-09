<!--
 * @description: 
 * @Author: T.W
 * @Github: https://github.com/TernenceWu0702
 * @Date: 2020-11-09 10:52:37
 * @LastEditors: T.W
 * @LastEditTime: 2020-11-09 14:18:45
-->
<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/website/header";
import Footer from "../../components/website/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
