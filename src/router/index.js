import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

/** 
 * Add authentication token to sessionStorage.
 * 
 * Token is retrieved from uri path.
 * */ 
function addSessionToken (token, key, next) {
  if (token) {
    const decodedUriToken = decodeURIComponent(token)
    sessionStorage.setItem(key, decodedUriToken)
  }
  return next();
}

/** 
 * Check if route requires authentication.
 * 
 * Check if token is present in sessionStorage.
 * */ 
function isAuthenticated (match, next) {
  const token = sessionStorage.getItem('token')
  if (match && token !== null) {
    return next()
  } else {
    return next('/')
  }
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  }  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  addSessionToken(to.query.access, 'access', next);
  addSessionToken(to.query.refresh, 'refresh', next);
  isAuthenticated(to.matched.some(record => record.meta.requiresAuth), next);
})

export default router
