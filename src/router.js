import Vue from "vue";
import Router from "vue-router";
import News from "./views/News.vue";
import WD from "./views/WD.vue";
import Barb from "./views/Barb.vue";
import DH from "./views/DH.vue";
import Necro from "./views/Necro.vue";
import Monk from "./views/Monk.vue";
import Crus from "./views/Crus.vue";
import Wiz from "./views/Wiz.vue";
import Extra from "./views/Extra.vue";
import Chat from "./views/Chat.vue";
import Armory from "./views/Armory.vue";
import Class from "./views/Class.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/armory",
      name: "armory",
      component: Armory
    },
    {
      path: "/class",
      name: "class",
      component: Class
    },
    {
      path: "/",
      name: "news",
      component: News
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/extra",
      name: "extra",
      component: Extra
    },
    {
      path: "/wiz",
      name: "wiz",
      component: Wiz
    },
    {
      path: "/crus",
      name: "crus",
      component: Crus
    },
    {
      path: "/necro",
      name: "necro",
      component: Necro
    },
    {
      path: "/monk",
      name: "monk",
      component: Monk
    },
    {
      path: "/dh",
      name: "dh",
      component: DH
    },
    {
      path: "/wd",
      name: "wd",
      component: WD
    },
    {
      path: "/barb",
      name: "barb",
      component: Barb
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
