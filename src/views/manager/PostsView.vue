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
                <table>
                    <thead>
                        <th>№</th>
                        <th>Назва</th>
                        <th>Опис</th>
                        <th>Дата публікації</th>
                        <th>URL</th>
                    </thead>
                    <tbody>
                        <tr v-for="(post, p) in posts">
                            <td>{{ p+1 }}</td>
                            <td>
                                <div>{{ post.title }}</div>
                                <div>
                                    <button @click="goToEdit(post.id)">Edit</button>
                                    <button>View</button>
                                    <button>View</button>
                                </div>
                            </td>
                            <td>{{ post.description }}</td>
                            <td>{{  post .date }}</td>
                            <td>{{  post .id }}</td>
                        </tr>
                    </tbody>
                </table>
               </div>
            </div>
        </div></main>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import TechHeader from '@/components/TechHeader.vue';

const router = useRouter();
const authed = ref(false);
const posts = ref([]);

const goToEdit = (id) => {
  router.push(`/manager/posts/${id}/edit`);
};

setTimeout(() => {
  authed.value = true;
}, 1000);

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