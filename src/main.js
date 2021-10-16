import Vue from "vue";
import Vuex from 'vuex'
import configureRouter from "./router-configurer";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Notifications from 'vue-notification'

import accountsStore from "@/common/accounts/accounts-store";
import matchesStore from "@/modules/matches/matches-store";
import LocalAuthRepository from "@/common/accounts/local-auth-repository";
import App from "./App.vue";

import MatchesService from "@/modules/matches/matches-service";

Vue.config.productionTip = false;

export let router = configureRouter(Vue);

export let localAuthRepository = new LocalAuthRepository()
export let matchesService = new MatchesService()



Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Notifications)

new Vue({
  router,
  provide() {
    return {
      localAuthRepository,
      matchesService
    }
  },
  store: new Vuex.Store({


    modules: {
      matches: matchesStore,
      accounts: accountsStore
    }
  }),
  render: (h) => h(App)
}).$mount("#app");
