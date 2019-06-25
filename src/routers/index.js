import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const login = () => import(/* webpackChunkName:'login'*/ '../views/Login');
const trip = () => import(/* webpackChunkName: 'trip' */ '../views/Trip');
const traffic = () => import(/* webpackChunkName: 'traffic' */ '../views/Traffic');
const history = () => import(/* webpackChunkName: 'history' */ '../views/History');
const me = () => import(/* webpackChunkName: 'me' */ '../views/Me');

const routes = [
  { path: '/login', component: login },
  { path: '/trip', component: trip },
  { path: '/traffic', component: traffic },
  { path: '/history', component: history },
  { path: '/me', component: me }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    if (store.state.login.isLogin) {
      next({ path: '/me' });
    } else {
      next();
    }
  } else if (!store.state.login.isLogin) {
    next({ path: '/login' });
  } else {
    next();
  }
})

export default router;