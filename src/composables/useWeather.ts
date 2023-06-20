import { readonly, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { WeatherData } from './types'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const url_base = import.meta.env.VITE_WEATHER_URL

async function getWeather(query: string, lang: string) {
  if (query.length === 0)
    return

  try {
    const response = await fetch(
      `${url_base}?key=${API_KEY}&days=5&q=${query}&lang=${lang}`,
    )
    return await response.json()
  }
  catch (error) {
    console.error(error)
  }
}

export function useWeather() {
  const data = ref<WeatherData | null>(null)
  const query = ref('')
  const lang = ref('')

  const { locale } = useI18n()
  lang.value = locale.value

  async function fetchWeather() {
    data.value = await getWeather(query.value, lang.value)
  }

  watch(locale, async () => {
    data.value = await getWeather(query.value, lang.value)
  })

  const weather = readonly(data)
  return { weather, query, fetchWeather }
}
