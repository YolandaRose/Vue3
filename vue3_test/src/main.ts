// 引入creatApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'//组件（根）
//引入路由器
import router from './router'
//创建实例
const app = createApp(App)
//使用路由器
app.use(router)
//挂载在id为app的元素上
app.mount('#app')
