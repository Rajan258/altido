import React, { useState } from 'react'
import { SwiperSlide , Swiper } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const Banner = () => {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className='w-full h-[100vh] bg-black relative'>
      <div className='h-[200vh]'>
        <div className="sticky top-0 h-[100vh]">
          {/* Main full-width slider */}
          <Swiper
            style={{
                '--swiper-navigation-color': '#000',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="mySwiper2"
              loop={true}
          >
            <SwiperSlide>
              <div className="h-screen  opacity-70">
                <video autoPlay loop muted className="w-full h-full object-cover">
                  <source src="/src/assets/img/ved.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen opacity-70'>
                <img src="/src/assets/img/beyondskool-new-1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen opacity-70'>
                <img src="/src/assets/img/coin-dcx.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen opacity-70'>
                <img src="/src/assets/img/rotary.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Vertical thumbnail slider */}
          <div className="absolute right-10 top-[50%] -translate-y-1/2 z-10 h-[50%] min-h-80 overflow-hidden">
            <Swiper
            onSwiper={setThumbsSwiper}
            direction={'vertical'}
              slidesPerView={3}
              spaceBetween={10}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[ Navigation, Thumbs]}
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide className=' overflow-hidden rounded-xl'>
                <div className="h-full cursor-pointer bg-white/20 ">
                  <img src="/src/assets/img/bonito.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide className=' overflow-hidden rounded-xl' >
                <div className="h-full cursor-pointer bg-white/20 ">
                  <img src="/src/assets/img/beyondskool-new-1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide className=' overflow-hidden rounded-xl' >
                <div className="h-full cursor-pointer bg-white/20 ">
                  <img src="/src/assets/img/coin-dcx.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide className=' overflow-hidden rounded-xl' >
                <div className="h-full cursor-pointer bg-white/20 ">
                  <img src="/src/assets/img/rotary.jpg" alt="" className="w-full h-full  object-cover" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        </div>

    </div>
    <h1 className='z-10 absolute lg:text-5xl sm:text-3xl text-2xl top-3/4 left-[10%] text-white '>You <b>ALT</b>er the universe.<br />
        <em>i</em><b>DO</b> your story.</h1>
        </>
  )
}

export default Banner