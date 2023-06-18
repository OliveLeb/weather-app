<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HourForecast from '~/components/HourForecast.vue'

const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()

const date = computed(() => {
  if (!props.weather || props.weather.error)
    return
  return new Intl.DateTimeFormat([props.lang, 'en'], { dateStyle: 'full', timeStyle: 'short' }).format(props.weather.location.localtime_epoch * 1000)
})
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 rounded-t-lg shadow-md px-10 py-4 bg-white/80 dark:bg-zinc-700 gap-y-4">
    <div class="md:col-span-2">
      {{ date }}
    </div>

    <div class="text-center">
      <h2 class="text-4xl">
        {{ weather.location.name }}
      </h2>
      <h3 class="text-2xl">
        {{ weather.location.country }}
      </h3>
      <div class="flex flex-col items-center text-lg mt-6 md:my-6">
        <div class="flex gap-4">
          <img :src="weather.current.condition.icon" :alt="weather.current.condition.text">
          <span class="text-6xl font-bold">{{ Math.round(weather.current.temp_c) }}°c</span>
        </div>
        <span>{{ weather.current.condition.text }}</span>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <ul class="text-lg">
        <li class="flex items-center gap-2">
          <i class="darkmode-color i-carbon-temperature-feels-like inline-block text-sm" aria-hidden="true" /> <span>{{ t('weather.feelslike') }} : {{ Math.round(weather.current.feelslike_c) }} °c</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="darkmode-color i-carbon-humidity inline-block text-sm" aria-hidden="true" /><span>{{ t('weather.humidity') }} : {{ weather.current.humidity }}%</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="darkmode-color i-carbon-location-current inline-block text-sm" aria-hidden="true" /><span>{{ t('weather.wind') }} : {{ weather.current.wind_kph }} km/h</span>
        </li>
      </ul>
    </div>

    <HourForecast v-if="weather.forecast" :forecast="weather.forecast.forecastday[0].hour" :lang="lang" class="md:col-span-2" />
  </section>
</template>
