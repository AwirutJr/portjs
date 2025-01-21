'use client';
import React from 'react'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

  const skill = () => {

  const ref = useRef(null)
  
  // ตรวจสอบว่าองค์ประกอบนั้นอยู่ใน viewport หรือไม่
  const isInView = useInView(ref, { amount: "all" })

  useEffect(() => {
    console.log("element is in view", isInView)
  }, [isInView])

  return (
    <div div id='skill' className="imgbg1 w-full h-[500px] ">
        <div className='blurBg flex justify-center items-center  h-full w-full '>
          <motion.div 
            ref={ref}
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          className='flex justify-center items-center gap-14'>
            <div className='w-[400px] h-[400px] rounded-xl flex flex-col justify-center items-center blurBg1'>
              
                <h1 className='text-white text-4xl font-bold text-center'>Tools</h1>
  
                <div className='grid-cols-3 grid gap-8 mt-8'>
                  <motion.img 
                    ref={ref}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1,delay:0.8 }}
                  src="/photo/github.png" className=' w-14 h-14'/>
                  <motion.img 
                    ref={ref}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1,delay:0.7 }}
                  src="/photo/docker.png" className=' w-16 h-14'/>
                  <motion.img 
                    ref={ref}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1,delay:0.6 }}
                  src="/photo/postman.png" className=' w-14 h-14'/>
                  <motion.img 
                    ref={ref}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1,delay:0.8 }}
                  src="/photo/Vercel.png" className=' w-14 h-14'/>
                </div>
              
            </div>
  
            <div className='w-[300px] text-center'>
              <h1 className="text-white text-5xl font-bold mb-2">SKILL</h1>
              <hr />
              <p className='mt-2 text-gray-400'>Open to developing new skills and learning from new experiences, with the aim of continuously improving myself and enhancing my work efficiency.</p>
            </div>
  
            <div className='w-[400px] h-[400px] rounded-xl flex flex-col justify-center items-center blurBg1'>
              
                <h1 className='text-white text-4xl font-bold text-center'>Frameworks/ <br />Technical Skills</h1>
  
                <div className='grid-cols-3 grid gap-8 mt-8'>
                  <motion.img 
                      ref={ref}
                      initial={{ x: 200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1,delay:0.6 }}
                  src="/photo/nextjs.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:0.7 }}
                  src="/photo/nodejs.png" className=' w-16 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:0.8 }}
                  src="/photo/express.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:0.9 }}
                  src="/photo/typescript.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:1 }}
                  src="/photo/tailwind.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:1.1 }}
                  src="/photo/prisma.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:1.2 }}
                  src="/photo/reactjs.png" className=' w-14 h-14'/>
                  <motion.img 
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1,delay:1.3 }}
                  src="/photo/MySQL.png" className=' w-14 h-14'/>
                </div>
              
            </div>
          </motion.div>

        </div>
      </div>
  )
}

export default skill
