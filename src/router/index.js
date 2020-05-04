import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import User from '../views/User.vue'

/** 
 * Add authentication token to sessionStorage.
 * 
 * Token is retrieved from uri path.
 * */ 
function addSessionTokens (tokens, next) {
  function addToken (key, value) {
    const decodedUriToken = decodeURIComponent(value)
    sessionStorage.setItem(key, decodedUriToken)
  }

  for (const token of tokens) {
    addToken(token.key, token.value)
  }
  
  return next('/');
}

/** 
 * Check if route requires authentication.
 * 
 * Check if token is present in sessionStorage.
 * */ 
function isAuthenticated (match, next) {
  const token = sessionStorage.getItem('access')
  if (match && token.length > 0) {
    return next()
  } else if (match && token.length === 0) {
    return next('/signin')
  } else {
    return next()
  }
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
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
  if (to.query.access && to.query.refresh) {
    addSessionTokens(
      [ { key: 'access', value: to.query.access },
        { key: 'refresh', value: to.query.refresh } ], 
      next
    );
  }
  isAuthenticated(to.matched.some(record => record.meta.requiresAuth), next);
})

export default router
