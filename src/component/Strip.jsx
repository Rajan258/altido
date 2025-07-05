import React from 'react'
import { motion } from "motion/react"

const Strip = ({ clientL, direction }) => {
  

  return (
    <div className="flex overflow-hidden">
      <motion.div className="flex flex-shrink-0 gap-20 pb-10 pr-20" initial={{x: direction === 'left' ? "0%" : "-100%"}} animate={{ x: direction === 'left' ? "-100%" : "0%" , transition: { duration: 50, repeat: Infinity, ease: "linear", }}} >
        {clientL.map((elem, ind) => (
          <div key={ind} className=" flex-shrink-0">
            <img className="w-52" src={elem} alt="" />
          </div>
        ))}
      </motion.div>
      <motion.div className="flex flex-shrink-0 gap-20 py-0 pr-20" initial={{x: direction === 'left' ? "0%" : "-100%"}} animate={{ x: direction === 'left' ? "-100%" : "0%" , transition: { duration: 50, repeat: Infinity, ease: "linear", }}} >
        {clientL.map((elem, ind) => (
          <div key={ind} className=" flex-shrink-0">
            <img className="w-52" src={elem} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Strip