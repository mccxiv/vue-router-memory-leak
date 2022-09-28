import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Route1 from './components/Route1.vue'
import Route2 from './components/Route2.vue'
import Route3 from './components/Route3.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/route1',
      component: Route1
    },
    {
      path: '/route2',
      component: Route2
    },
    {
      path: '/route3',
      component: Route3
    }
  ]
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
