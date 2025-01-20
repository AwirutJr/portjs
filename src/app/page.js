'use client'

import Header from './components/Header/page'
import About from './components/About/page'
import Skill from './components/Skill/page'
import Project from './components/Project/page'
import Contect from './components/Contect/page'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const ref = useRef(null)
  
  // ตรวจสอบว่าองค์ประกอบนั้นอยู่ใน viewport หรือไม่
  const isInView = useInView(ref, { amount: "all" })

  useEffect(() => {
    console.log("element is in view", isInView)
  }, [isInView])

  return (
    <div>
      <Header />
      
      {/* เพิ่ม ref ให้กับ motion.div เพื่อให้ใช้ useInView */}
      <motion.div
        ref={ref} // เชื่อมโยง ref
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount:"all" }} // ให้แอนิเมชันเกิดขึ้นครั้งเดียว
      >
        <About />
      </motion.div>

      <Skill />
      <Project />
      <Contect />
    </div>
  )
}
