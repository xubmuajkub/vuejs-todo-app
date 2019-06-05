import Vue from 'vue'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Login from './auth/Login'
import Register from './auth/Register'
import VueRouter from 'vue-router'

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
        component: () => import('./pages/todo/TodoNavLayout'),
        redirect: '/todo/list',
        children: [
            {
                path: '/',
                redirect: 'list'
            },
            {
                name: 'todo-list',
                path: 'list',
                component: () => import('./pages/todo/TodoList'),
            },
            {
                name: 'todo-detail',
                path: ':id',
                component: () => import('./pages/todo/TodoDetail'),
            },
            {
                name: 'add',
                path: 'new-todo',
                component: () => import('./pages/todo/TodoAdd'),
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