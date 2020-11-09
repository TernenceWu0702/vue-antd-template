import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/website"),
    children: [
      // home
      {
        path: "/",
        redirect: "/website/home"
      },
      {
        path: "/website",
        name: "website",
        // meta: { icon: "dashboard", title: "仪表盘" },÷
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/website/home",
            name: "websiteHome",
            meta: { title: "官网首页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/website/home"
              )
          }
        ]
      }
    ]
  },
  {
    path: "/admin",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/admin"),
    children: [
      // home
      {
        path: "/admin",
        redirect: "/admin/home"
      },
      {
        path: "/admin",
        name: "admin",
        // meta: { icon: "dashboard", title: "仪表盘" },÷
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/admin/home",
            name: "adminHome",
            meta: { title: "官网首页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/admin/home"
              )
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
