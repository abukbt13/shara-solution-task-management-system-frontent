import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/about.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import home from "@/views/dashboard/home.vue"
import dashboard from '../views/dashboard/dashboard.vue'
import Tests from "@/views/Tests.vue";
import Testing from "@/views/Testing.vue";
import Users from "@/views/SuperAdmin/Users.vue";
import Learn from "@/views/Learn"
import Progress from "@/views/Progress"
const routes = [

  {
    path: '/tests',
    name: 'test',
    component: Tests,
    children: [
      {
        path: '',
        name: 'testing',
        component: Testing,
      },
      {
        path: '/learn',
        name: 'learn',
        component: Learn,
      },
      {
        path: '/progress',
        name: 'progress',
        component: Progress,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
    {
    path: '/',
    name: 'dashboard',
    component: dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      }

    ]
  }
  ,
    {
    path: '/about',
    name: 'about',
    component: About
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
