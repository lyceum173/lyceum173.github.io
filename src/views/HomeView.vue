<template>
    <header class="header">
        <div class="header__container">
            <h1> Lyceum173 <mark>Web App</mark></h1>
            <button>
                Увійти
            </button>
        </div>
    </header>
    <main class="main">
        <!-- <div class="main-after">
            <h1>Lyceum 173</h1>
        </div> -->
        <div class="main__container">
            <div class="hero">
                <div class="hero__text">
                    <div class="hero__text__item">
                        ІНТЕРАКТИВНА
                    </div>
                    <div class="hero__text__item">
                        <mark>WEB</mark> ПЛАТФОРМА
                    </div>
                    <div class="hero__text__item">
                        <strong>ЛІЦЕЮ 173 </strong>
                    </div>
                </div>
                <div class="hero__card">
                    Інтерактивна освітня платформа для учнів, вчителів та батьків. <br><br>
                    Навчайся зручно, ефективно та цікаво.

<button class="hero__card__button">Почати</button>
<div class="hero__card__button-after"></div>
<div class="hero__card__corner"></div>
<div class="hero__card__corner"></div>
                </div>
            </div>
            <br><br>
            <br>
            <section>
                <div class="hr">
                    <span>ПРО ПЛАТФОРМУ</span>
                </div>
                <p>Мета - розбавити</p>
            </section>
            <br>
            <section>
                <div class="hr">
                    <span>НОВИНИ</span>
                </div>
                <div class="news">
                    <div v-for="n in posts" :key="n.id" class="news-item">
                            <h3>{{ n.title }}</h3>
                            <p>{{ n.description }}</p>
                            <p class="news-item__date">{{ n.date }}</p>
                            <button class="news-item__button"><a :href="`/posts/${n.id}`">Перейти
                            </a></button>
                        <div class="news-item__button-after"></div>
                        <div class="news-item__corner"></div>
                        <div class="news-item__corner"></div>
                            
                    </div>

                </div>
            </section>
            <!-- <section>
                <div class="hr">
                    <span>єБали</span>
                </div>
            </section> -->
            <!-- <div class="item">
    <h2><strong>Lyceum173</strong><br></h2>
    <p style="width: 100%; text-align: center; color: var(--accent)">Найкоротший шлях до знань</p>
    <br><br>
    <p>Сервіс для створення коротких посилань.</p>
    <p>Швидко ділись важливими ресурсами, організовуй навчальні матеріали та отримуй доступ до інформації за секунди.</p>

</div> -->

        </div>
    </main>
    <FooterComponent></FooterComponent>
   
</template>
<style scoped>
button {
    cursor: pointer;
}
h1 {
    font-family: "MTA";
    color: var(--primary);
    text-align: center;
}
    mark {
        color: var(--accent);
        background-color: transparent;
    }
    p {
        line-height: 1.5;
        text-align: center;
    }

    h2 {
        font-family: "MTA";
        text-align: center;
        font-weight: normal;
        color: var(--primary);
        
    }

    h2 strong {
        margin-bottom: 0.5rem;
          color: var(--primary);
    }
/* .main {
    display: flex;
    justify-content: center;
    align-items: center;
} */
.item {
    max-height: 65vh;
    padding: 1.25rem;
    
    max-width: 25rem;
    margin: 0 auto;
    border-radius: 0.625rem;
    background-color: var(--bg-light);
    -webkit-box-shadow: 0.0625rem 0.0625rem 0.3125rem 0rem #dde1ed;
    box-shadow: 0.0625rem 0.0625rem 0.3125rem 0rem #dde1ed;
    overflow-y: auto;
}
.hero {
    display: flex;
    width: 100%;
    gap: 1rem;
}
.hero__card {
    width: min-content;
    background: var(--bg-primary);
    color: white;
    padding: 1rem;
    max-width: 15rem;
    width: 100%;
    border-radius: 1rem;
    position: relative;
}

.hero__card__button {
    width: 5rem;
    height: 2rem;
}
.hero__card__button-after {
    position: absolute;
    width:5.5rem;
    height: 2.5rem;
    background-color: var(--bg-body);
    border-radius: 1.5rem 0 1rem 0 ;
    bottom: 0;
    right: 0;
    content: " ";
    z-index: 5;
}

.hero__card__corner {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--bg-body);
    bottom: 0;
    right: 5.5rem;
}
.hero__card__corner:last-of-type {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--bg-body);
    bottom: 2.5rem;
    right: 0rem;
}
.hero__card__corner:last-of-type::after {
    position: absolute;
    content: " ";
    width: 2rem;
    height: 2rem;
    background: var(--bg-primary);
    bottom: 0;
    z-index: 1000;
    right: 0;
    border-radius: 0 0 1rem 0;
}
.hero__card__corner::after {
    position: absolute;
    content: " ";
    width: 2rem;
    height: 2rem;
    background: var(--bg-primary);
    bottom: 0;
    z-index: 1000;
    right: 0;
    border-radius: 0 0 1rem 0;
}
.hero__card__button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
    background-color: black;
    color: white;
    border-radius: 1rem;
    z-index: 60 !important;

}
.hero__text {
    font-family: "Nunito";
    font-size: 3rem;
    gap:0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.hero__text mark {
    font-size: 2rem;
   align-self: center;
}
.hero__text__item:first-child {
    text-align: end;
}
.hero__text__item:last-child {
    text-align: end;
}

.hero__text mark {
    border: solid 2px var(--accent);
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 9999px;
}
section, p {
    text-align: start;
    align-items: start;
}
section .hr {
    position: relative;
    font-weight: bold;
    margin-bottom: 1rem;
}
section .hr::after {
    position: absolute;
    top: 50%;
    left: 0;

    width: 100%;
    height: 1px;
    transform: translateY(-50%);
    background-color: grey;
    content: " ";
    z-index: -1 !important;
}
hr {
    position: relative;
}

.main-after * {
    position: absolute; 
    top: 50% !important;
    left: 50%;
    color: transparent;
    transform: translate(-50%, -110%);
    animation: main-h1 1s forwards ease-in-out;

}
.main-after {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    width :100dvw;
    height: 100dvh;
    text-align: center;
    content: "Lyceum 173";
    color: white;
    background-color: var(--accent);
    z-index: 100000;
animation-delay: 1s;
     animation: main 2s forwards ease-in-out;
   /* & * {
        animation: main 5s forwards;
    } */
}
@keyframes main-h1 {
    0%{
        color: transparent;
    } 100% {
        color: white;
    
    }
}
@keyframes main {
    0%{
        height: 100dvh;
    } 100% {
        height: 0;
      
    
    }
}
hr::after {
    position: absolute;
    top: 50%;
    left: 0;

    width: 100%;
    height: 1px;
    transform: translateY(-50%);
    background-color: grey;
    content: " ";
    z-index: -1 !important;
}
section .hr span {
    background-color: var(--bg-body);
    padding-right: 0.5rem;
}
.news {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}
.news-item {
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); */
}

.news-item__date {
    width:100%;
    color: grey;
}



.news-item{
    padding: 1rem;
    width: 100%;
    border-radius: 1rem;
    position: relative;
}

.news-item_button {
    width: 5rem;
    height: 2rem;
}
.news-item__button-after {
    position: absolute;
    width:5.5rem;
    height: 2.5rem;
    background-color: var(--bg-body);
    border-radius: 1.5rem 0 1rem 0 ;
    bottom: 0;
    right: 0;
    content: " ";
    z-index: 5;
}

.news-item__corner {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--bg-body);
    bottom: 0;
    right: 5.5rem;
}
.news-item__corner:last-of-type {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--bg-body);
    bottom: 2.5rem;
    right: 0rem;
}
.news-item__corner:last-of-type::after {
    position: absolute;
    content: " ";
    width: 2rem;
    height: 2rem;
    background: white;
    bottom: 0;
    z-index: 1000;
    right: 0;
    border-radius: 0 0 1rem 0;
}
.news-item__corner::after {
    position: absolute;
    content: " ";
    width: 2rem;
    height: 2rem;
    background: white;
    bottom: 0;
    z-index: 1000;
    right: 0;
    border-radius: 0 0 1rem 0;
}
.news-item__button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
    background-color: var(--accent);
    color: white;
    border-radius: 1rem;
    z-index: 60 !important;

}
</style>
<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import CMS from '@/lib/cms';
import {ref} from "vue"

const posts = ref([])
fetch("/api/cms/posts")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load CMS settings");
    return res.json(); // Return the Promise here
  })
  .then(data => {
    console.log("CMS posts:", data); // Now log the parsed JSON
    posts.value = data

  })
  .catch(err => {
    console.error("Error loading CMS posts:", err);
  });

</script>