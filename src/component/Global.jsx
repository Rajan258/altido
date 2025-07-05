import React from 'react'
import Button from './Button'

const Global = () => {
  return (
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
  )
}

export default Global