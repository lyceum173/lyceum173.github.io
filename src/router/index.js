import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import NotFound from '../views/NotFound.vue'
import NewsPageView from '../views/NewsPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news/',
      name: 'news',
      component: NewsView,
    },
     {
      path: '/news/:id/',
      name: 'news-view',
      component: NewsPageView,
    },
    {
      path:  '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
    },
    
    {
      path: '/:pathMatch(.*\\.json)',
      name: 'BlockJSON',
      component: NotFound,
    }
  ],
})

router.beforeEach((to, from, next) => {
  console.log(to)
  // document.title = to.meta.title || 'EduCheck'
  
  // document.querySelectorAll('meta[property^="og:"]').forEach(el => el.remove())
  
  // Add new OG tags
  // const metaTags = [
  //   { property: 'og:title', content: to.meta.og?.title || 'EduCheck' },
  //   { property: 'og:description', content: to.meta.og?.description || 'EduCheck' },
  //   { property: 'og:image', content: to.meta.og?.image || 'https://educheck.web.app/' },
  //   { property: 'og:url', content: window.location.origin + to.fullPath },
  //   { property: 'og:type', content: 'website' }
  // ]
  
  // metaTags.forEach(tag => {
  //   const meta = document.createElement('meta')
  //   meta.setAttribute('property', tag.property)
  //   meta.setAttribute('content', tag.content)
  //   document.head.appendChild(meta)
  // })
  
  next()
})
export default router