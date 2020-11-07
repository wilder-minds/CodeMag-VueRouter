// router/index.js
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cats from '@/views/Cats.vue'
import Cat from "@/views/Cat.vue";
import CatList from "@/views/CatList.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
  path: '/cats',
  name: 'Cats',
  component: Cats,
  children: [
    {
      name: "CatList",
      path: "catlist/:count",
      component: CatList,
      props: true
    },
    {
      path: 'cat/:url',
      name: 'Cat',
      component: Cat
    },
  ]
},
  { 
    path: '/:pathMatch(.*)*', 
    redirect: "/" 
  },
]

const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  next();
});

export default router
