import Vue from 'vue'
import Router from 'vue-router'
import CloudTestRoutes from "../modules/cloudtest/routes/routes";

Vue.use(Router)

let router = new Router({
  mode: "history",
  base: "/admin",
  routes: [
    ...CloudTestRoutes,
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path) {
//     window._hmt.push(["_trackPageview", "/cloudtest" + to.fullPath]);
//   }
// });



export default router;
