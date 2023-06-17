export interface WeatherData {
  current: {
    temp_c: number

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
}
