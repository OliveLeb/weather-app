<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  forecast: {
    type: Array,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()

const forcastStartingNow = computed(() => {
  const date = new Date(Date.now())
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  const index = props.forecast.findIndex(el => el.time_epoch === date.getTime() / 1000)
  return props.forecast.slice(index + 1)
})

function formatHour(date) {
  if (new Date(date).getHours() === new Date(Date.now()).getHours())
    return t('weather.now')

  return new Intl.DateTimeFormat([props.lang, 'en'], { timeStyle: 'short' }).format(date)
}
</script>

<template>
  <div class="flex divide-x">
    <div v-for="day in forcastStartingNow" :key="day.time_epoch" class="p-1 grow text-center">
      <span>{{ formatHour(day.time_epoch * 1000) }}</span>
      <img :src="day.condition.icon" :alt="day.condition.text" class="m-auto">
      {{ Math.round(day.temp_c) }} °c
    </div>
  </div>
</template>
