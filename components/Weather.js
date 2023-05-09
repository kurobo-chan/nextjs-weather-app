import { useCallback, useEffect, useState } from 'react'
import { usePosition } from '@/hook/usePosition'
import Search from './Search'
import { fetchWeather,fetchOneCallWeather } from '@/lib/api'
import Header from './Header'
import Detail from './Detail'
import LocationDate from './LocationDate'
import Display from './Display'
import { ColumnMargin, RowMargin } from './StyleComponents'
import { Grid, GridItem, useColorModeValue, Flex } from '@chakra-ui/react'
import TabListBlock from './TabListBlock'
import MapPage from './MapPage'

const Weather = () => {
  const [weather, setWeather] = useState()
  const [oneCall, setOneCall] = useState()
  const [location, setLocation] = useState()
  const [inputCity, setInputCity] = useState('')
  const [city, setCity] = useState('')
  const [iserror, setError] = useState('')

  const { latitude, longitude, error } = usePosition()

  const cityName = city && `q=${city}&`
  const coordinates = location && `lat=${latitude}&lon=${longitude}`

  const weatherApi = useCallback(async () => {
    try {
      const data = await fetchWeather(cityName, coordinates)
      setWeather(data)
    } catch (e) {
      console.log(e)
      e.response?.data?.message === 'city not found'
        ? setError('その都市は見つかりません')
        : null
    }
  }, [cityName, coordinates])

  const oneCallApi = useCallback(async () => {
    try {
      const data = await fetchOneCallWeather(cityName, coordinates)
      setOneCall(data)
    } catch (e) {
      console.log(e)
      e.response?.data?.message === 'city not found'
        ? setError('その都市は見つかりません')
        : null
    }
  }, [cityName, coordinates])

  useEffect(() => {
    weatherApi()
    oneCallApi()
    setError()
    setLocation({ latitude, longitude })
  }, [weatherApi, oneCallApi, latitude, longitude])

  const handleCurrentLocationClick = useCallback(() => {
    setCity('')
    setLocation({ latitude, longitude })
  }, [latitude, longitude])

  const bg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Flex
      minH={{ base: 'auto', lg: '100vh' }}
      flexFlow={{ sm: 'column', lg: 'row' }}
    >
      <GridItem
        position={{ sm: 'static', lg: 'fixed' }}
        width={{ sm: 'auto', lg: '30%' }}
      >
        <Header />
        <Search
          iserror={iserror}
          inputCity={inputCity}
          setInputCity={setInputCity}
          setCity={setCity}
          handleCurrentLocationClick={handleCurrentLocationClick}
          city={city}
        />
        {error && <div>{error}</div>}
        <RowMargin pb={[6, 6, 16]}>
          <ColumnMargin>
            <Grid rowGap={[8, 16]}>
              {weather && (
                <>
                  <LocationDate data={weather} />
                  <Display data={weather} />
                  <Detail data={weather} />
                </>
              )}
            </Grid>
          </ColumnMargin>
        </RowMargin>
      </GridItem>
      <GridItem w={{ sm: 'auto', lg: '70%' }} ml={{ sm: '0', lg: '30%' }}>
        <RowMargin
          bg={bg}
          pt={{ sm: `clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem)`, lg: '4em' }}
          pb={`4em`}
        >
          <ColumnMargin mx={{ sm: '0', lg: `8em` }}>
            <TabListBlock data={oneCall} />
            <MapPage data={weather} />
          </ColumnMargin>
        </RowMargin>
      </GridItem>
    </Flex>
  )
}

export default Weather
