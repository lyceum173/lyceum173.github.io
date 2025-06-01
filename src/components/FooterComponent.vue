<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footeer__contacts">

            </div>
            <p>Створено учнями Ліцею 173!</p>
            <br>
            <p>  Контакти: <a href="mailto:chat-support@lyceum173.kyiv.ua">chat-support@lyceum173.kyiv.ua</a></p>
            
            <br>
            <hr class="hr">
            &copy; <span id="currentYear">{{ year }}</span> <a href="https://lyceum173.kyiv.ua">Ліцей №173</a>&nbsp; <span>|</span>&nbsp; <a href="https://pryima-oleksandr.web.app" target="_blank">Pryima Oleksandr</a>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue';
const year = ref("")
year.value = new Date().getFullYear()
</script>