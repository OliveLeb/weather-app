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
  <div class="flex items-center -right-[88px] transition-transform duration-1000 text-white/80" :class="{ 'show -translate-x-[88px]': show }">
    <i class="i-carbon-translate cursor-pointer" aria-hidden="true" @click="showLang" />
    <div>
      <ul class="flex">
        <li v-if="locale !== 'en'" class="my-0 mx-2">
          <button class="border-0 bg-transparent color-white/50" @click="toggleLocales">
            <img src="../assets/logo/en.svg" alt="" data-lang="en">
          </button>
        </li>
        <li v-if="locale !== 'fr'" class="my-0 mx-2">
          <button class="border-0 bg-transparent color-white/50" @click="toggleLocales">
            <img src="../assets/logo/fr.svg" alt="" data-lang="fr">
          </button>
        </li>
        <li v-if="locale !== 'es'" class="my-0 mx-2">
          <button class="border-0 bg-transparent color-white/50" @click="toggleLocales">
            <img src="../assets/logo/es.svg" alt="" data-lang="es">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
