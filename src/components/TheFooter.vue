<script setup lang="ts">
defineProps({
  timeAgo: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <footer class="absolute bottom-0 left-0 right-0 text-white/50 text-right p-2">
    <p v-if="timeAgo">
      {{ timeAgo }}
    </p>
    <p>
      <a href="https://github.com/OliveLeb/weather-app" target="_blank" rel="noopener noreferrer" class="text-inherit">
        <i class="i-carbon-logo-github inline-block text-3xl" aria-hidden="true" />
      </a>
    </p>
  </footer>
</template>
