import { createApp } from 'vue'

import store from './store';

import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura';
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router)
app.use(store)

app.mount('#app')