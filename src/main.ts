import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'
import router from '@/router'

import '@/style.css'

createApp(App).use(vuetify).use(createPinia()).use(router).mount('#app')
