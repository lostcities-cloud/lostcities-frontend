import VueRouter from "vue-router";

import ApplicationView from "./components/navigation/ApplicationView"
import UnauthenticatedView from "./components/navigation/UnauthenticatedView"

import Login from "./components/login/Login";

export default function configureRouter(vue) {
  vue.use(VueRouter);

  vue.component('application-view', ApplicationView)
  vue.component('unauthenticated-view', UnauthenticatedView)

  // 2. Define route components
  const Home = { template: '<div>home</div>' }
  const Bar = { template: '<div>bar</div>' }
  const Unicode = { template: '<div>unicode</div>' }
  const Query = { template: '<div>query: "{{ $route.params.q }}"</div>' }

  return new VueRouter({
    mode: "history",
    //base: __dirname,
    routes: [
      { 
        path: "/", 
        component: Home, 
        meta: { layout : 'application-view'}
      },
      { 
        path: "/login", 
        component: Login, 
        meta: { layout : 'unauthenticated-view'} 
      },
      { path: "/bar", component: Bar },
      { path: encodeURI("/é"), component: Unicode },
      { path: "/query/:q", component: Query }
    ]
  });
}
