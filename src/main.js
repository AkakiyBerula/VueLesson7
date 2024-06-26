import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "@/router"

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const globalMixin = {
    methods: {
        globalMessage() {
            return 'Метод глобального міксину запущено!'
        }
    }
};




const pinia = createPinia()

const app = createApp(App)

app.use(vuetify)
    .use(router)
    .use(pinia)
    .mixin(globalMixin)

app.directive('green-bg', {
    mounted(el) {
        el.style.background = "green";
    }
});

app.mount('#app')
