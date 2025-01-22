'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  
  // ตรวจสอบว่าองค์ประกอบนั้นอยู่ใน viewport หรือไม่
  const isInView = useInView(ref, { amount: "all" })
  
  useEffect(() => {
    console.log("element is in view", isInView); // ตรวจสอบสถานะ
  }, [isInView]);

  return (
    <div id="about" className="flex justify-center i  tems-center h-[600px] colorBg">
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center gap-3 h-[70%] w-[800px]"
      >
        <div>
          <img 
            src="/photo/chok.jpg" 
            className="w-[250px] h-[300px] object-cover shadow-lg rounded-2xl" 
            alt="Chok's photo" 
          />
        </div>
        <div className="w-[40%] h-[300px] ml-2 space-y-2">
          <h1 className="text-3xl">About Me</h1>
          <hr />
          <p>
            My passion for movies, especially Iron Man, inspired me to start learning computer programming in high school. 
            Seeing a character create and control robots with code sparked my interest. I've been writing code ever since and 
            am deeply passionate about being a developer, as it allows me to create and innovate.
          </p>
          <Link href='https://www.canva.com/design/DAGYHEsdQJ4/8Z-QV2ML6w2TNkRPW537BA/edit?utm_content=DAGYHEsdQJ4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' className="bg-[#C8ACD6] px-4 rounded-md">RESUME</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
