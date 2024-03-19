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

const pinia = createPinia()

createApp(App)
    .use(vuetify)
    .use(router)
    .use(pinia)
    .mount('#app')
