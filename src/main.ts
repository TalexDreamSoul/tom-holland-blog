import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AnalysisPage from './pages/analysis.vue'
import BlogPage from './pages/blog.vue'
import ExperiencePage from './pages/experience.vue'
import GameDemoPage from './pages/game-demo.vue'
import HomePage from './pages/index.vue'
import PlanningPage from './pages/planning.vue'
import WorkPage from './pages/work.vue'
import 'virtual:uno.css'
import './styles/main.css'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/analysis', component: AnalysisPage },
    { path: '/planning', component: PlanningPage },
    { path: '/game-demo', component: GameDemoPage },
    { path: '/experience', component: ExperiencePage },
    { path: '/blog', component: BlogPage },
    { path: '/work', component: WorkPage },
  ],
})

app.use(head)
app.use(router)
app.mount('#app')
