import { createApp } from 'vue'
import App from './App.vue'
//引入pinia
import { createPinia } from 'pinia'

//创建app，pinia实例
const app = createApp(App)
const pinia = createPinia()

//先注册pinia插件，再挂载应用
app.use(pinia)
app.mount('#app') 
