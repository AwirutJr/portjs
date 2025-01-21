'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const page = () => {
  
  const ref = useRef(null)
    
    // ตรวจสอบว่าองค์ประกอบนั้นอยู่ใน viewport หรือไม่
    const isInView = useInView(ref, { amount: "all" })
  
    useEffect(() => {
      console.log("element is in view", isInView)
    }, [isInView])

  return (
    <div>
      <div
        className="flex flex-col justify-center w-full h-[738.40px] items-center space-y-3 imgbg">
        <div>
          <motion.img
            // ref={ref}
            // initial={{ x: -100, opacity: 0 }} 
            // animate={{ x: 0, opacity: 1 }}      
            // transition={{ duration: 0.1,delay:0.1, ease: "easeOut"}} 
            ref={ref}
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay:0.1, ease: "easeOut"}}

            src="https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-60 h-60 rounded-full shadow-lg"
            alt="Profile"
          />
        </div>
        <motion.h1
          ref={ref}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay:0.3, ease: "easeOut"}}
          className="text-5xl">Awirut Jiensakul</motion.h1>
        <motion.p
          ref={ref}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay:0.5, ease: "easeOut"}}
          className="text-xl">Back-end Developer</motion.p>
      </div>
    </div>
  )
}

export default page

