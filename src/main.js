import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Divider, Popover } from "ant-design-vue";

Vue.component(Button.name, Button);
Vue.component(Divider.name, Divider);
Vue.component(Popover.name, Popover);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
