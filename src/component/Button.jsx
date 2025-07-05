import React from 'react'
import { FiCornerDownRight } from "react-icons/fi";


const Button = ({bgClr='bg-black', txtClr='text-white'}) => {
  return (
    <a href="#" className={` ${bgClr} ${txtClr} h-8 hover:bg-yellow-600 px-3 py-1 rounded inline-flex items-center gap-3 text-[16px]`}><FiCornerDownRight />Learn More</a>
  )
}

export default Button