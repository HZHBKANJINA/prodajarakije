import { createApp } from 'vue'
import './input.css'
import store from "@/store";
import App from './App.vue'

import './assets/main.css'

createApp(App)
    .use(store)
    .mount('#app')
