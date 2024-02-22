import Vue, {createApp} from "@vue/compat";
import Vuex, {createStore} from 'vuex'
import configureRouter from "./router-configurer";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Notifications from '@kyvg/vue3-notification'

import LocalAuthRepository from "@/common/accounts/local-auth-repository";
import App from "./App.vue";

import { default as storeRoot } from "@/store"

import MatchesService from "@/modules/matches/matches-service";
import GameService from "@/modules/game/game-service";



Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Notifications)
Vue.use(Vuex)

export let localAuthRepository = new LocalAuthRepository();
export let matchesService = new MatchesService();
export let gamesService = new GameService();


export let store = createStore(storeRoot)
export let router = configureRouter(Vue);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const vue =  createApp({
  provide() {
    return {
      localAuthRepository,
      matchesService,
      gamesService
    }
  },
  store,
  render: (h) => h(App)
});

vue.use(router)
vue.use(Notifications)

vue.mount("#app");


//vue.use(Vuex)

export default vue;