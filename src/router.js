import Vue from "vue";
import Router from "vue-router";
import News from "./views/News.vue";
import WD from "./views/WD.vue";
import Extra from "./views/Extra.vue";
import Chat from "./views/Chat.vue";
import Armory from "./views/Armory.vue";

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
      path: "/wd",
      name: "wd",
      component: WD
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
