
import { useState } from 'react'
import { SwiperSlide , Swiper } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules';
import Button from '../component/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';


Button
const Home = () => {
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
        
        <div className='bg-white w-full py-20 px-3 relative z'>
        <div className="lg:max-w-screen-2xl md:max-w-screen-md md:flex mx-auto">
            <div className="md:w-1/2 flex flex-col justify-between">
                <div className="text">
                    <h3 className='text-[36px]'><em>People</em> <span className='font-bold'>love Stories.</span></h3>
                    <h3 className='text-[36px]'><em>Stories</em><span className='font-bold'> build Brands.</span></h3>
                    <h3 className='text-[36px]'><em>Brands</em><span className='font-bold'>grow Business.</span></h3>
                </div>
                <div className='button'>
                <Button />
                </div>
            </div>
            <div className="md:w-1/2">
                <p className='text-[24px] pb-5'>The idea is to bringing various marketing service
                    needs for SME's like yourself. under one roof is
                    Altido's reason to exist.
                </p>
                <p className='text-[24px] pb-5'>In a world, where agencies are digital or creative or
                    media - we like to stand for something a lot
                    simpler :
                </p>
                <h3 className='text-3xl'><b>a client partner that <br />
                delivers a solution!</b></h3>
            </div>
        </div>
    </div>
    

    {/* global */}

    <div className='h-[200vh] relative z-10'>
        <video autoPlay loop muted className="w-full h-[200vh] absolute object-cover">
              <source src="https://player.vimeo.com/progressive_redirect/playback/951614488/rendition/720p/file.mp4?loc=external&log_user=0&signature=e70c392abe0b2157a58204ffd29f9e1724b6c6a893aee58b0eb6e0c1f34b9433" type="video/mp4" />
        </video>
        <div className='h-[100vh] sticky top-0 text-5xl text-white flex items-center max-w-screen-2xl mx-auto'>
            <div className='text w-1/3 flex flex-col justify-between'>
                <div className="text pb-20">
                    <h3 className='text-[45px]'><em>Build</em> <span className='font-bold'> Local,</span></h3>
                    <h3 className='text-[45px]'><em>Serve </em><span className='font-bold'> Global.</span></h3>
                </div>
                <div className="text">
                    <h3 className='text-[45px]'><em>Learn </em><span className='font-bold'> Impacted,</span></h3>
                    <h3 className='text-[45px]'><em>Serve </em><span className='font-bold'>Local.</span></h3>
                </div>
            </div>
            <div className='text w-1/3'>
            </div>
            <div className="w-1/3  flex flex-col justify-between">
                <div className='pb-10'>
                    <h3 className='text-[45px]'><em> Impacted,</em></h3>
                    <h3 className='text-[45px]'><b className='text-[#ab4b84]'>80+ clients</b> <em>across<span className='font-bold'> the Globe.</span></em></h3>
                    
                </div>
                <div><Button bgClr='bg-white' txtClr='text-black' /></div>
                
            </div>
        </div>
    </div>
        </>
  )
}

export default Home