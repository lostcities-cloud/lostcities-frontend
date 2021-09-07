import Vue from "vue";
import configureRouter from "./router-configurer";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AccountsService from "@/common/accounts-service";

import App from "./App.vue";

Vue.config.productionTip = false;

let router = configureRouter(Vue);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



new Vue({
  router,
  provide() {
    return {
      accountsService: new AccountsService()
    }
  },
  render: (h) => h(App)
}).$mount("#app");
