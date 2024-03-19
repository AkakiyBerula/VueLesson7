import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";


const routes = [
    { 
        path: '/',
        name: 'hello',
        component: HelloWorld,
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})


export default router