<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useWeather } from './composables/useWeather'

import SearchBar from './components/SearchBar.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import DayWeather from './components/DayWeather.vue'
import ForecastDay from '~/components/ForecastDay.vue'

const { locale } = useI18n()

const { weather, query, fetchWeather } = useWeather()
</script>

<template>
  <div class="flex flex-col w-full max-w-screen-xl m-auto min-h-screen px-4">
    <TheHeader :weather="weather" @refresh="fetchWeather" />
    <main class="grow">
      <div>
        <SearchBar v-model="query" @submit="fetchWeather" />

        <template v-if="weather">
          <div v-if="weather.error">
            {{ weather.error.message }}
          </div>
          <DayWeather v-else :weather="weather" :lang="locale" />

          <ForecastDay v-if="weather.forecast" :forecastday="weather.forecast.forecastday" :lang="locale" />
        </template>
      </div>
    </main>
    <TheFooter />
  </div>
</template>
