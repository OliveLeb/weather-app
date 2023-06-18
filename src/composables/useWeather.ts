import { readonly, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { WeatherData } from './types'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const url_base = import.meta.env.VITE_WEATHER_URL

const data = ref<WeatherData | null>(null)
const query = ref('')
const lang = ref('')

async function getWeather() {
  if (query.value.length === 0)
    return

  try {
    const response = await fetch(
      `${url_base}?key=${API_KEY}&days=5&q=${query.value}&lang=${lang.value}`,
    )
    return await response.json()
  }
  catch (error) {
    console.error(error)
  }
}

export function useWeather() {
  // &aqi=yes&alerts=yes

  const { locale } = useI18n()
  lang.value = locale.value

  async function fetchWeather(e: KeyboardEvent) {
    if (e && e.key !== 'Enter')
      return

    data.value = await getWeather()
  }

  watch(locale, async () => {
    data.value = await getWeather()
  })

  const weather = readonly(data)
  return { weather, query, fetchWeather }
}
