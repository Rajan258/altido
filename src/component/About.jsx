import React from 'react'
import Button from './Button'
const About = () => {
  return (
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
  )
}

export default About