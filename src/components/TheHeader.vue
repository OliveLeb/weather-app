<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import LangSelect from './LangSelect.vue'

defineProps(['weather'])
defineEmits(['refresh'])

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="flex justify-between items-start pt-4 mb-4 overflow-hidden relative">
    <div class="flex flex-col bg-inherit">
      <button class="mr-4 darkmode-color" @click="toggleDark()">
        <i class="i-carbon-sun dark:i-carbon-moon inline-block" aria-hidden="true" />
      </button>
    </div>

    <i v-if="weather" class="i-carbon-renew cursor-pointer darkmode-color" aria-hidden="true" @click="$emit('refresh')" />

    <span class="grow text-center text-3xl font-semibold">Weather</span>

    <LangSelect />
  </header>
</template>
