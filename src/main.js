import Vue from "vue";
import Vuex from 'vuex'
import configureRouter from "./router-configurer";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import accountsStore from "@/common/accounts/accounts-store";

import App from "./App.vue";

Vue.config.productionTip = false;

let router = configureRouter(Vue);



Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



new Vue({
  router,
  store: new Vuex.Store({
    modules: {
      accounts: accountsStore
    }
  }),
  render: (h) => h(App)
}).$mount("#app");
