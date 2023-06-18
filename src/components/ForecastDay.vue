<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  forecastday: {
    type: Array,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()

const nextDays = computed(() => props.forecastday.slice(1))

const date = computed(() => {
  return (date) => {
    return new Intl.DateTimeFormat([props.lang, 'en'], { weekday: 'long', day: '2-digit' }).format(date * 1000)
  }
})
</script>

<template>
  <div class="rounded-b-lg shadow-md px-10 py-4 bg-white/80 dark:bg-zinc-700">
    <div class="border-t border-slate-200 dark:border-zinc-800/50 pt-4">
      <h3>
        {{ t('weather.nextdays') }}
      </h3>

      <div class="flex divide-x">
        <div v-for="day in nextDays" :key="day.date_epoch" class="p-1 grow text-center">
          <span>{{ date(day.date_epoch) }}</span>
          <img :src="day.day.condition.icon" :alt="day.day.condition.text" class="m-auto">
          {{ Math.round(day.day.avgtemp_c) }} °c
        </div>
      </div>
    </div>
  </div>
</template>
