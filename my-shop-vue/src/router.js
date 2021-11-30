import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
// import Vuex from '@/store';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "active-exact",
  //   scrollBehavior(to, from, savedPosition) {
  //     if (to.path !== from.path) {
  //       return { x: 0, y: 0 };
  //     }
  //   },
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    //   meta: { layout: "defaultlayout" },
    },
    // {
    //   path: '/account/signin',
    //   name: 'SignIn',
    //   component: () => import('./views/auth/SignIn.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/signup',
    //   name: 'SignUp',
    //   component: () => import('./views/auth/SignUp.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/verify',
    //   name: 'VerifyOTP',
    //   component: () => import('./views/auth/VerifyOTP.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/forgot-password',
    //   name: 'ForgotPass',
    //   component: () => import('./views/auth/ForgotPass.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/reset-password',
    //   name: 'ResetPass',
    //   component: () => import('./views/auth/ResetPass.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/new-password',
    //   name: 'NewPass',
    //   component: () => import('./views/auth/NewPass.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/success',
    //   name: 'Success',
    //   component: () => import('./views/auth/Success.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '/account/phone-number',
    //   name: 'PhoneNumber',
    //   component: () => import('./views/auth/PhoneNumber.vue'),
    //   meta: {
    //     restriction: ['corporate'],
    //   },
    // },
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: () => import('./views/404.vue'),
    // },
  ],
});
router.beforeEach((to, from, next) => {
  //   if (to.path === '/' && to.query.expiry && to.query.id && to.query.journey) {
  //     account.methods.verifyToken(to.query.id, Vuex, next, to.query.journey, to.query.type);
  //   }
  //   if (Vuex.getters['auth/isCorporateUser']
  //     && (routeProtection.methods.isProductRestricted(to, Vuex))) {
  //     return next({ name: 'home' });
  //   }
  return next();
});
export default router;
