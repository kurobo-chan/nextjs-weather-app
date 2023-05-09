import { Swiper } from 'swiper/react'
import 'swiper/css'

const SwiperComponents = ({ children }) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 16,
        },
      }}
    >
      {children}
    </Swiper>
  )
}
export default SwiperComponents
