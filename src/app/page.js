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
      <About />
      <Skill />
      <Project />
      <Contect />
    </div>
  )
}
