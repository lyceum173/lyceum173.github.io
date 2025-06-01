<template>
  <header class="header">
    <div class="header__container">
      <h1><mark>Link</mark> Lyceum173</h1>
    </div>
  </header>
  <main class="main">
    <div class="main__container">
      <div id="error" class="hidden">
        <div class="error-wrap">
          <h2>4<mark>0</mark>4</h2>
          <p>Посилання не знайдено</p>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <div class="footer__container">
      &copy; <span id="currentYear">{{ year }}</span>
      <a href="https://lyceum173.kyiv.ua">Ліцей №173</a>&nbsp;
      <span>|</span>&nbsp; <a href="">Прийма Олександр</a>
    </div>
  </footer>
</template>
<script setup>
import { onMounted } from "vue";
import { databases, ID, clicksDatabases } from "@/lib/appwrite";

const DATABASE_ID = "680f9ad5000421c4f4df";
const LINKS_COLLECTION_ID = "680f9adf001bf125b188";

onMounted(async () => {
  const shortId = window.location.pathname.split("/")[1];
console.log(shortId)
  try {
    const linkDoc = await databases.getDocument(
      DATABASE_ID,
      LINKS_COLLECTION_ID,
      shortId
    );

    if (linkDoc) {
      const ipResponse = await fetch("https://ident.me/json");
      const ipData = await ipResponse.json();
      const userIp = ipData.ip;
      console.log(ipData.tz);
      const clickData = {
        l: shortId,
        i: userIp,
        tz: ipData.tz,
      };

      await clicksDatabases.createDocument(
        "680fb7d5002bd4fdbfe4",
        "680fb7e1000966f2f791",
        ID.unique(),
        clickData
      );
      window.location.href = linkDoc.to;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("error").classList.remove("hidden");
  }
});
</script>

<style scoped>
.hidden {
  opacity: 0;
}
* {
  opacity: 1;
}
#error {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-family: "MTA";
  color: var(--primary);
}
.error-wrap {
  text-align: center;
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
  font-weight: bold;
  color: var(--primary);
  font-size: 7rem;
}

h2 strong {
  margin-bottom: 0.5rem;
  color: var(--primary);
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
</style>
