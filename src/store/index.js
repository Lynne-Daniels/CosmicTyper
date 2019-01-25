import Vue from "vue";
import Vuex from "vuex";

import lessons from "./modules/lessons";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lessons
  },
  actions: {},
  mutations: {},
  getters: {}
});
