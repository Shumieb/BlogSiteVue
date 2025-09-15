import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue);
app.use(pinia)
app.use(router)
app.mount('#app')
