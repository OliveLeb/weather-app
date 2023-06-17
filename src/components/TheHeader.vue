<script lang="ts" setup>
import LangSelect from './LangSelect.vue'

defineProps(['weather'])
defineEmits(['refresh'])
</script>

<template>
  <header class="flex justify-between items-center mb-4 overflow-hidden h-12 relative">
    <i v-if="weather" class="i-carbon-renew cursor-pointer text-white/80" aria-hidden="true" @click="$emit('refresh')" />

    <!-- <button> -->
    <!-- <span class="i-carbon-sun" /> -->
    <!-- <span class="i-carbon-moon" /> -->
    <!-- </button> -->

    <LangSelect class="absolute" />
  </header>
</template>
