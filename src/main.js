import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const v = "0.3.0";
console.log(`%cApp Version: ${v}`, 'background: red; color: white; padding: 4px; border-radius: 4px;');

fetch('https://freeipapi.com/api/json/')
.then(res => res.json())
.then(data => {
  if (data.ipAddress === "79.110.132.143") {
    console.log("authorized")
  }
})
.catch(err => {
  console.error('Failed to get IP info:', err);
});


app.use(router)

app.mount('#app')
