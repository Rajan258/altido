import React from 'react'
import Logo from '/src/assets/img/altido-logo.png'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='max-w-screen-2xl px-5 py-3 absolute left-2/4 w-full -translate-x-1/2 z-50 '>
        <div className="flex justify-between items-center">
            <div className="logo justify-center flex items-center gap-5">
                <a href="/"><img className='w-[80px]' src={Logo} alt="logo" /></a>
                <div className='typewriter text-white'>
                Business Branding_ Let's ALTI:DO
                </div>
            </div>
            <Navbar />
        </div>
    </div>
  ) 
}

export default Header