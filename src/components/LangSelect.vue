<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale, availableLocales } = useI18n()

const show = ref(false)

function toggleLocales(e: any) {
  const locales = availableLocales
  if (!locales.includes(e.target.dataset.lang))
    return
  locale.value = e.target.dataset.lang
  showLang()
}

function showLang(): void {
  show.value = !show.value
}
</script>

<template>
  <div class="lang-ctn flex items-center" :class="{ show }">
    <div class="lang-switch i-carbon-translate cursor-pointer" @click="showLang" />
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
</template>

<style scoped>
.lang-ctn {
  display: flex;
  right:-105px;
  transition: transform 1s ease;
}
button {
  border: none;
  background:transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
}

.lang ul {
 display: flex;
}
li {
  margin: 0 10px;
}
.show {
  transform: translateX(-105px);
}
.hidden {
  display: none;
}
</style>
