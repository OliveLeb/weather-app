<script lang="ts" setup>
import LangSelect from './LangSelect.vue';
import {useColorMode} from '@vueuse/core';

defineProps(['weather'])
  
</script>


<template>
  <header class="flex justify-between items-center mb-4 overflow-hidden h-12 relative">
    <div v-if="weather" class="i-carbon-renew cursor-pointer" @click="$emit('refresh')"/>

    <button>
      <span class="i-carbon-sun"></span>
      <span class="i-carbon-moon"></span>
    </button>

    <LangSelect class="absolute right-0"/>
  </header>
</template>