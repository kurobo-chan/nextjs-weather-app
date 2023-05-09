import axios from 'axios'

const OPEN_WEATHER_MAP_URL = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_URL
export const OPEN_WEATHER_MAP_API_KEY =
  process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY

export const fetchWeather = async (cityName, coordinates) => {
  const { data } = await axios.get(
    `${OPEN_WEATHER_MAP_URL}/weather?${cityName}${coordinates}&exclude=current&lang=ja&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`,
  )
  return data
}

export const fetchOneCallWeather = async (cityName, coordinates) => {
  const { data } = await axios.get(
    `${OPEN_WEATHER_MAP_URL}/weather?${cityName}${coordinates}&exclude=current&lang=ja&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`,
  )

  const { lat, lon } = data.coord

  const oneCallData = await axios.get(
    `${OPEN_WEATHER_MAP_URL}/onecall?lat=${lat}&lon=${lon}&lang=ja&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`,
  )

  return oneCallData.data
}
