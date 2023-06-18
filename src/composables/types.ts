export interface WeatherData {
  current: {
    temp_c: number
    feelslike_c: number
    humidity: number
    wind_kph: number
    pressure_mb: number

    condition: {
      text: string
      icon: string
    }
  }

  error: {
    message: string
  }

  location: {
    name: string
    country: string
    localtime_epoch: number
  }

  forecast: {
    forecastday: any
  }
}

export interface forecastday {
  astro: object
  date: string
  date_epoch: number
  day: object
  hour: any
}
