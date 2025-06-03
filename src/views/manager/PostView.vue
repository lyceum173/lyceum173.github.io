<template>

     <TechHeader tech></TechHeader>
<main class="main" :class="{auth: !authed}" cms>
        <!-- <div class="main-after">
            <h1>Lyceum 173</h1>
        </div> -->

        <div class="main__container">
          
            <div class="page__content">
               <aside>
                <nav>
                    <router-link to="/manager/">Головна</router-link>
                    <router-link to="/manager/posts/">Публікації</router-link>
                    <router-link to="/">Сайт</router-link>
                </nav>
               </aside>
               <div class="content">
  <div class="comment">Публікації</div>
  <br>
  <button @click="logHtml" style="margin-top: 1rem;">Console HTML</button>
  <button @click="saveHtml" style="margin-top: 1rem; margin-left: 1rem;">Save to LocalStorage</button>
  <div id="froala"></div>
</div>

            </div>
        </div></main>
</template>

<script setup type="module">
// import "@/assets/css/views/cms.css"
import HeaderComponent from '@/components/HeaderComponent.vue';
import TechHeader from '@/components/TechHeader.vue';
import { ref, onMounted, nextTick } from 'vue';
// At the top of your <script setup>
import FroalaEditor from 'froala-editor'
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/css/froala_editor.pkgd.min.css'

const authed = ref(false)
const posts = ref([])
const froalaInstance = ref(null)


function logHtml() {
  if (froalaInstance.value) {
    const html = froalaInstance.value.html.get();
    console.log('Froala HTML:', html);
  } else {
    console.warn('Froala instance is not initialized');
  }
}

function saveHtml() {
  if (froalaInstance.value) {
    const html = froalaInstance.value.html.get();
    localStorage.setItem('froala-content', html);
    console.log('Збережено у LocalStorage');
  }
}

onMounted(async () => {
  await nextTick();
  if (FroalaEditor) {
    // Отримуємо попередньо збережений вміст
    const savedContent = localStorage.getItem('froala-content') || '';

    froalaInstance.value = new FroalaEditor('#froala', {
      placeholderText: 'Введіть текст сюди...',
      toolbarInline: false,
      charCounterCount: true,
      events: {
        initialized: function () {
          this.html.set(savedContent);
        }
      }
    });
  } else {
    console.error('FroalaEditor не знайдено у window');
  }
});

setTimeout(() => {
  authed.value = true
}, 1000)

fetch("https://lyceum173.web.app/api/cms/posts")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    console.log(data, "origin");
    posts.value = data;
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });


</script>
<style scoped>

.main {
    margin-top: 2.5rem;
}

form {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 20rem;
    margin: 0 auto;
    background-color: white;;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
}
form button {
    margin: 0 auto;
    width: 100%;
}

.content {
    /* border: red solid; */
    height: calc(100dvh - 48px);
    overflow: auto;
}
/* * {
    overflow: hidden !important;
} */

table {
    background-color: white;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
}

table {
    text-align: left;
}
table tbody tr {
    border-top: solid 1px grey !important;
    background-color: rgb(248, 248, 248);
}
.main{
    width: 100%;
    height: 100%;
    max-width: 100dvw;

    padding: 0;
    overflow: hidden !important;
    margin-top: 3rem;
}
.main__container {
    max-width: 100dvw;
    padding: 0px;
    overflow: hidden;
}
/* .main.auth {
    background: linear-gradient(var(--primary), var(--accent));
} */

 .page__content {
    display: flex;
    overflow: hidden !important;
    min-height: calc(100dvh - 48px) !important;
 }
.content {
    padding: 0.5rem;
        width: 100%;
}
 aside {
    background-color: var(--bg-dark);
    color: white;
    min-height: 100%;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
 }

 aside nav {
    display: flex;
    flex-direction: column;
 }
</style>