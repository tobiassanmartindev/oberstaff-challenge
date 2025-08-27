import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import './index.css'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import AnimateOnScroll from 'primevue/animateonscroll'
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)
app.component('Toast', Toast)

app.mount('#app')
