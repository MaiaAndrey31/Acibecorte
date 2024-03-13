import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import './style.css'
import OxiImg from '../../assets/oxicorte.jpg'
import OxiImg2 from '../../assets/oxicorte1.jpg'
import OxiImg3 from '../../assets/oxicorte3.jpg'
import TextBox from '../TextBox'

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        keyboard={{
          enabled: true
        }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        direction={'horizontal'}
        reverseDirection={true}
        className="container"
      >
        <SwiperSlide className="item">
          <div className="imageBox">
            <img src={OxiImg} />
          </div>
          <div className="textBox">
            {' '}
            <TextBox
              title="Oxicorte"
              content={
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit delectus eaque libero quaerat at hic mollitia soluta iste perspiciatis laborum, quam magni illum quis a tempora aspernaturcorporis dolorum nostrum!'
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="imageBox">
            <img src={OxiImg2} />
          </div>

          <div className="textBox">
            {' '}
            <TextBox
              title="Oxicorte"
              content={
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit delectus eaque libero quaerat at hic mollitia soluta iste perspiciatis laborum, quam magni illum quis a tempora aspernaturcorporis dolorum nostrum!'
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="imageBox">
            <img src={OxiImg3} />
          </div>
          <div className="textBox">
            {' '}
            <TextBox
              title="Oxicorte"
              content={
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit delectus eaque libero quaerat at hic mollitia soluta iste perspiciatis laborum, quam magni illum quis a tempora aspernaturcorporis dolorum nostrum!'
              }
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
