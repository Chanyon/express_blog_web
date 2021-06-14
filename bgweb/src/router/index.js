import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FrontEnd from '../views/FrontEnd.vue'
import BackEnd from '../views/BackEnd.vue'
import Other from '../views/Other.vue'
import ArtiDetails from '../views/ArtiDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/frontend',
    name: 'FrontEnd',
    component: FrontEnd
  },
  {
    path: '/frontend/:id',
    name: 'FrontEnd',
    component: FrontEnd,
    props:true,

  },
  {
    path: '/backend',
    name: 'BackEnd',
    component: BackEnd
  },
  {
    path: '/backend/:id',
    name: 'BackEnd',
    component: BackEnd,
    props:true
  },
   {
    path: '/other',
    name: 'Other',
    component: Other,
    meta:{
      title:'other'
    }
  },
  {
    path: '/other/:id',
    name: 'Other',
    component: Other,
    props:true
  },
  {
    path: '/details/:id',
    name: 'ArtiDetails',
    component: ArtiDetails,
    props:true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      title:'About me'
    }
  },
]

const router = new VueRouter({
  routes
})
router.beforeResolve((to,from,next)=>{
  document.title = to.meta.title;
  next();
})

export default router
