import VueRouter from "vue-router";

import ApplicationView from "./common/navigation/ApplicationView";
import UnauthenticatedView from "./common/navigation/UnauthenticatedView"

import Register from "./modules/register/Register";
import Login from "./modules/login/Login";
import Match from "./modules/matches/Matches";
import Game from "./modules/game/Game";

import LocalAuthRepository from "@/common/accounts/local-auth-repository";
const localAuthRepository = new LocalAuthRepository();

export default function configureRouter(vue) {
  vue.use(VueRouter);

  vue.component('application-view', ApplicationView)
  vue.component('unauthenticated-view', UnauthenticatedView)

  // 2. Define route components
  const Home = { template: '<div>home</div>' }


  let router = new VueRouter({
    mode: "history",
    //base: __dirname,
    routes: [
      { 
        path: "/", 
        component: Home, 
        meta: { 
          layout : 'application-view', 
          requiresAuth: false
        }
      },
      { 
        name: 'Login',
        path: '/login', 
        component: Login, 
        meta: { 
          layout : 'unauthenticated-view', 
          requiresAuth: false
        } 
      },
      { 
        path: "/register", 
        component: Register, 
        meta: { 
          layout : 'unauthenticated-view', 
          requiresAuth: false
        } 
      },
      { 
        path: "/matches", 
        component: Match,
        meta: {
          layout : 'application-view',
          requiresAuth: true 
        }
      },
      {
        name: "game",
        path: "/game/:id",
        component: Game,
        meta: {
          layout : 'application-view',
          requiresAuth: true
        }
      }
    ]
  });

  router.beforeEach((to, from, next) => {
    console.dir(to.meta)
    if (to.meta.requiresAuth && !localAuthRepository.isAuthenticated()) {
      next({ name: 'Login' })  
    } else {
      next()
    }
  })

  return router;
}
