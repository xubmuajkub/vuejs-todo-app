import Vue from 'vue'
import Todo from './pages/Todo'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Login from './auth/Login'
import Register from './auth/Register'
import VueRouter from 'vue-router'

import TodoDetail from './components/todo/TodoDetail'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/todo', 
        name: 'todo',
        component: Todo,
        children: [
            {
                path: ':id',
                component: TodoDetail
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: About
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
]
})


export default router