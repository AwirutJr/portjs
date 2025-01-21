'use client'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center w-full h-[730px] items-center space-y-3 imgbg">
        <div>
          <motion.img
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 }}         // ระยะเวลาในการแอนิเมชั่น


            src="https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-60 h-60 rounded-full shadow-lg"
            alt="Profile"
          />
        </div>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
          animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
          transition={{ duration: 0.1,delay: }}         // ระยะเวลาในการแอนิเมชั่น
          className="text-5xl">Awirut Jiensakul</motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
          animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
          transition={{ duration: 0.1 }}         // ระยะเวลาในการแอนิเมชั่น
          className="text-xl">Back-end Developer</motion.p>
      </div>
    </div>
  )
}

export default page

