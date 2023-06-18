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
  <div v-show="forcastStartingNow.length > 0" class="border-t border-slate-200 dark:border-zinc-800/50 pt-4">
    <h4 class="w-full">
      {{ t('weather.forecastday') }}
    </h4>
    <div class="flex divide-x overflow-auto hourforecast pb-2">
      <div v-for="day in forcastStartingNow" :key="day.time_epoch" class="p-1 grow text-center min-w-[6rem]">
        <span>{{ formatHour(day.time_epoch * 1000) }}</span>
        <img :src="day.condition.icon" :alt="day.condition.text" class="m-auto">
        {{ Math.round(day.temp_c) }} °c
      </div>
    </div>
  </div>
</template>

<style scoped>
.hourforecast::-webkit-scrollbar-track
{
  /* -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3); */
  background-color: rgba(0,0,0,0.5);
}

.hourforecast::-webkit-scrollbar
{
  height: 4px;
  background-color: rgba(255,255,255,1);
}

.hourforecast::-webkit-scrollbar-thumb
{
  background-color: rgba(39,39,42, 1);
}
</style>
