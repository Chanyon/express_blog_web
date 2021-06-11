import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../view/login/Login.vue'),
      meta:{isPublic:true}
    },
    {
      path: '/',
      name: 'MainHome',
      component: () => import('../view/MainHome.vue'),
      children:[{
       path: '/categories/edit',
       name: 'CategoryEdit',
       component: () => import('../view/CategoryEdit.vue'),
     },
     {
      path: '/categories/list',
      name: 'CategoryList',
      component: () => import('../view/CategoryList.vue'),
    },
    {
      path: '/categories/edit/:id',
      name: 'categoryEdit',
      component: () => import('../view/CategoryEdit.vue'),
      props:true
    },
    //article start
    {
       path: '/articles/edit',
       name: 'ArticleEdit',
       component: () => import('../view/ArticleEdit.vue'),
     },
     {
      path: '/articles/list',
      name: 'ArticleList',
      component: () => import('../view/ArticleList.vue'),
    },
    {
      path: '/articles/edit/:id',
      name: 'ArticleEdit',
      component: () => import('../view/ArticleEdit.vue'),
      props:true
    },
    //article end 
    //admin start
    {
       path: '/adminuser/edit',
       name: 'AdminUserEdit',
       component: () => import('../view/AdminUserEdit.vue'),
     },
     {
      path: '/adminuser/list',
      name: 'AdminUserList',
      component: () => import('../view/AdminUserList.vue'),
    },
    {
      path: '/adminuser/edit/:id',
      name: 'AdminUserEdit',
      component: () => import('../view/AdminUserEdit.vue'),
      props:true
    },
    //admin end 
    //back start
    {
       path: '/background/edit',
       name: 'BackgroundImage',
       component: () => import('../view/BackgroundImage.vue'),
     },
     {
      path: '/background/list',
      name: 'BackgroundImageList',
      component: () => import('../view/BackgroundImageList.vue'),
    },
    {
      path: '/background/edit/:id',
      name: 'BackgroundImage',
      component: () => import('../view/BackgroundImage.vue'),
      props:true
    },
    //back end 
    ] 
  }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})
router.beforeEach((to,from,next)=>{
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login');
  }
  next();
})

export default router

