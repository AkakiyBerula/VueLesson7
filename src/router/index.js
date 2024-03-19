import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Slots from "../components/Slots.vue"
import Mixins from "../components/Mixins.vue"
import Directives from "../components/Directives.vue"


const routes = [
    { 
        path: '/',
        name: 'hello',
        component: HelloWorld,
    },
    { 
        path: '/slots',
        name: 'slots',
        component: Slots,
    },
    { 
        path: '/mixins',
        name: 'mixins',
        component: Mixins,
    },
    { 
        path: '/directives',
        name: 'directives',
        component: Directives,
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})


export default router