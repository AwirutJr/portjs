'use client'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div>
       <div
          className="flex flex-col justify-center w-full h-[730px] items-center space-y-3 imgbg">
          <div>
            <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            
              src="https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-60 h-60 rounded-full shadow-lg"
              alt="Profile"
            />
          </div>
          <motion.h1 
                      initial={{ opacity: 0, scale: 0.5}}  // เริ่มต้นด้วยขนาดเล็กและอยู่ด้านหลัง
                      animate={{ opacity: 1, scale: 1 }}     // เด้งออกมาขนาดปกติและออกมาจากด้านหลัง
          className="text-5xl">Awirut Jiensakul</motion.h1>
          <p className="text-xl">Back-end Developer</p>
        </div>
    </div>
  )
}

export default page

