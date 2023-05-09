import { dateFormat } from '@/helpers/extraFunctions'
import SwiperComponents from './SwiperComponents'
import { SwiperSlide } from 'swiper/react'
import WeatherCard from './WeatherCard'

export const Week = ({ data }) => {
  return (
    <SwiperComponents>
      {data.daily.map((week, i) => {
        const { daily } = dateFormat(week.dt)
        return (
          <SwiperSlide key={i}>
            <WeatherCard data={week} dateTime={daily} week={week} />
          </SwiperSlide>
        )
      })}
    </SwiperComponents>
  )
}

export const Today = ({ data }) => {
  return (
    <SwiperComponents>
      {data.hourly.map((today, i) => {
        const { hourly } = dateFormat(today.dt)
        return (
          <SwiperSlide key={i}>
            <WeatherCard data={today} dateTime={hourly} today={today} />
          </SwiperSlide>
        )
      })}
    </SwiperComponents>
  )
}
