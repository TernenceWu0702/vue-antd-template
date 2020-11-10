import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: document.documentElement.clientWidth
  },
  mutations: {
    changeScreenWidth: (state, num) => {
      state.screenWidth = num;
    }
  },
  actions: {
    changeScreenWidth: (context, num) => {
      context.commit("changeScreenWidth", num);
    }
  },
  modules: {}
});
