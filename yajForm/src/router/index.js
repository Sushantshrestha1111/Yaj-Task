import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    
    {
      path:'/',
      name:'test',
      component:()=>import('../views/Main.vue')
    },
    {
      path:'/first',
      name:'main',
      component:()=>import('../views/RegistrationForm.vue')
    },
    {
      path:'/secondform',
      name:'second',
      component:()=>import('../views/SecondForm.vue')
    }
   
  ],
})

export default router
