import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Catalog from '@/views/Catalog'
import SignUp from '@/views/SignUp'
import Login from '@/views/Login'
import BandProfile from '@/views/BandProfile'
import PersonProfile from '@/views/PersonProfile'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/band/:id',
      name: 'BandProfile',
      component: BandProfile
    },
    {
      path: '/person/:id',
      name: 'PersonProfile',
      component: PersonProfile
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
