'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const about = () => {
  const ref = useRef(null)
    
    // ตรวจสอบว่าองค์ประกอบนั้นอยู่ใน viewport หรือไม่
    const isInView = useInView(ref, { amount: "all" })
  
    useEffect(() => {
      console.log("element is in view", isInView)
    }, [isInView])
  return (
      <div id='about' className="flex justify-center items-center h-[600px] colorBg">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: "all" }}
            className='flex justify-center items-center gap-3 h-auto w-auto'
            >
          <div>
            <img  src="/photo/chok.jpg"
              className="w-[250px] h-[300px] object-cover shadow-lg rounded-2xl " />
          </div>
          <div className="w-[25%] h-[300px] ml-2 space-y-2 ">
            <h1 className="text-3xl">About Me</h1>
            <hr />
            <p className="">My passion for movies, especially Iron Man, inspired me to start learning computer programming in high school. Seeing a character create and control robots with code sparked my interest. I've been writing code ever since and am deeply passionate about being a developer, as it allows me to create and innovate.</p>
            <button className="bg-[#C8ACD6] px-4 rounded-md">RESUME</button>
          </div>
        </motion.div>
      </div>
  )
}

export default about
