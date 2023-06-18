<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
defineEmits(['submit', 'update:modelValue'])

const { t } = useI18n()
</script>

<template>
  <input
    :value="modelValue" type="text" :placeholder="t('home.search')" class="w-full mb-10 p-3 text-xl appearance-none border-0 rounded-tr-xl rounded-bl-xl shadow-md bg-white/50 dark:bg-zinc-700/50 outline-none duration-300 focus:shadow-lg focus:bg-white/75 focus:dark:bg-zinc-700/75 focus:rounded-tl-xl focus:rounded-br-xl focus:rounded-tr-0 focus:rounded-bl-0" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @keypress.enter="$emit('submit')"
  >
</template>
