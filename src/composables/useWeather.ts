export const useWeather = async (query: String, lang: String) => {
  const url_base = import.meta.env.VITE_WEATHER_URL
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  //&aqi=yes&alerts=yes
  try {
    const response = await fetch(
      `${url_base}?key=${API_KEY}&q=${query}&lang=${lang}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error happened here!')
    console.error(error)
  }
}