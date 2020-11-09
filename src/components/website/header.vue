<!--
 * @description: 
 * @Author: T.W
 * @Github: https://github.com/TernenceWu0702
 * @Date: 2020-11-09 14:10:29
 * @LastEditors: T.W
 * @LastEditTime: 2020-11-09 15:53:03
-->
<template>
  <div class="header-container">
    <div class="header-box">
      <img src="../../assets/website/logo.png" class="header-item-img" />
      <div class="rig">
        <div class="text" v-for="(item, index) in link" :key="index">
          <a>
            <div>{{ item.label }}</div>
          </a>
        </div>
        <a target="_blank">
          <p class="text botton1">用户登录</p>
        </a>
        <router-link to="/trial">
          <p class="text botton2">免费试用</p>
        </router-link>
        <a-divider type="vertical" style="margin-left:20px;margin-right:20px" />
        <a-popover placement="bottomRight" class="header-right-img">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <img src="../../assets/website/baise.png" />
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      link: [
        {
          value: "#0",
          label: "首页"
        },
        {
          value: "#1",
          label: "产品"
        },
        {
          value: "#2",
          label: "解决方案"
        },
        {
          value: "#3",
          label: "客户方案"
        },
        {
          value: "#4",
          label: "新闻资讯"
        },
        {
          value: "#5",
          label: "联系我们"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 80px;
  background: #1c1f28;
  position: fixed;
  z-index: 99;
  top: 0;

  .header-box {
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header-item-img {
      margin-top: 20px;
      width: 205px;
      height: 40px;
    }

    .text {
      margin-top: 30px;
      display: inline-block;
      margin-left: 32px;
      height: 32px;
    }

    a {
      color: #fafafa;
      font-size: 16px;
      font-weight: bold;
    }

    .botton1,
    .botton2 {
      border-radius: 16px;
      border: 1px solid rgba(0, 204, 151, 1);
      width: 78px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      text-align: center;
    }
    .botton2 {
      margin-left: 20px;
      background-color: #00cc97;
      color: #ffffff;
    }

    .header-right-img {
      line-height: 40px;
    }
  }
}
</style>