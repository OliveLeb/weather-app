<script setup lang="ts">
  const props = defineProps({
    timeAgo: {
      type: String,
      default: null
    }
  })
</script>

<template>
  <footer>
    <p>
      {{ timeAgo }}
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
</style>