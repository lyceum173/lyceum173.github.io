import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import NotFound from '../views/NotFound.vue'
import NewsPageView from '../views/NewsPageView.vue'
import AuthView from '@/views/manager/AuthView.vue'
import PostsView from '@/views/manager/PostsView.vue'
import PostView from '@/views/manager/PostView.vue'
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
      path: '/manager/',
      name: 'manager-auth',
      component: AuthView,
    },
    {
      path: '/manager/posts/',
      name: 'manager-posts',
      component: PostsView,
    },
    {
      path: '/manager/posts/:id/edit',
      name: 'manager-post-edit',
      component: PostView,
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
  console.log(to) // /news/u7k3bn

  console.log(localStorage.getItem("authed"))
  fetch("https://lyceum173.web.app/api/cms/posts")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json(); // Правильний метод
  })
  .then(data => {
    data.map(i => i = i.id)
    console.log( data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

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