import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    
    // {
    //   path:'/',
    //   name:'main',
    //   component:()=>import('../views/Main.vue')
    // },
    {
      path:'/',
      name:'main',
      component:()=>import('../views/RegistrationForm.vue')
    },
   
  ],
})

export default router
