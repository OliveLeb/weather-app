import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

createApp(App)
  .use(i18n)
  .mount('#app')
