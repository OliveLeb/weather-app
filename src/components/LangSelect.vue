<script setup lang="ts">

import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n()

const toggleLocales = (e: any) => {
  const locales = availableLocales
  if(!locales.includes(e.target.dataset.lang)) return
  locale.value = e.target.dataset.lang
  showLang()
}

const showLang = (): void => {
  document.querySelector('.lang-ctn').classList.toggle('show')
}

</script>

<template>
  <section>
    <div class="lang-ctn">
      <button @click="showLang" class="lang-switch">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z" fill="currentColor"></path><path d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z" fill="currentColor"></path>
      </svg>
    </button>
    <div class="lang">
      <ul>
        <li v-if="locale !== 'en'">
          <button @click="toggleLocales">
            <img src="../assets/logo/en.svg" alt="" data-lang="en">
          </button>
        </li>
        <li v-if="locale !== 'fr'">
          <button @click="toggleLocales">
            <img src="../assets/logo/fr.svg" alt="" data-lang="fr">
          </button>
        </li>
        <li v-if="locale !== 'es'">
          <button @click="toggleLocales">
            <img src="../assets/logo/es.svg" alt="" data-lang="es">
          </button>
        </li>
       </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  min-height: 40px;
  margin-bottom: 1.5rem;
  overflow-x: hidden;
}
.lang-ctn {
  display: flex;
  position: absolute;
  right:-135px;
  transition: transform 1s ease;
}
button {
  border: none;
  background:transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
}
.lang ul {
 display: flex;
}
li {
  margin: 0 10px;
}
.show {
  transform: translateX(-120px);
}
.hidden {
  display: none;
}
</style>