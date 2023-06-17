<script setup lang="ts">
defineProps({
  timeAgo: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <footer>
    <p v-if="timeAgo">
      {{ timeAgo }}
    </p>
    <p>
      <a href="https://github.com/OliveLeb/weather-app" target="_blank" rel="noopener noreferrer">
        <i class="i-carbon-logo-github inline-block text-3xl" aria-hidden="true" />
      </a>
    </p>
  </footer>
</template>

<style scoped>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
    padding: 10px ;
  }
  a {
    color: inherit;
  }
</style>
