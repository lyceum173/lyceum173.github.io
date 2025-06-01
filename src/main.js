import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const v = "0.3.0";
console.log(`%cApp Version: ${v}`, 'background: red; color: white; padding: 4px; border-radius: 4px;');


app.use(router)

app.mount('#app')
