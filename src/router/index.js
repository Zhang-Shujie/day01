import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"/about",
    children:[
      {
        path: '/app',
        name: 'app',
        component: () => import( '../views/App.vue')
      } ,
       {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  } ,
  {
    path: '/add',
    name: 'add',
    component: () => import( '../views/Add.vue')
  } ,
  {
    path: '/main',
    name: 'main',
    component: () => import( '../views/Main.vue')
  } 
    ]
  },
 
  {
    path: '/xiangq',
    name: 'xiangq',
    component: () => import( '../views/Xiangq.vue')
  } ,
 
  {
    path: '/ss',
    name: 'ss',
    component: () => import( '../views/Ss.vue')
  } 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
