'use client';  // ใช้ 'use client' เพื่อให้เป็น Client Component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { motion } from 'framer-motion';  // นำเข้า motion จาก framer-motion
import Scrollspy from 'react-scrollspy';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex justify-between p-4 fixed w-full z-10 test">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}  
           className="font-bold text-2xl ml-[5%]">AWIRUT</motion.div>

          {/* ใช้ motion กับ ul สำหรับการแอนิเมชั่น */}
          <Scrollspy items={['about', 'skill', 'project', 'contect']} currentClassName="active"
            className="flex space-x-6 mr-[3%]"
          >
            {/* ใช้ Link ของ Next.js ปกติ */}
            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 ,delay: 0.6}}         // ระยะเวลาในการแอนิเมชั่น
            className="hover "
            >
              <Link href='#about'>ABOUT</Link>
            </motion.li>

            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1,delay: 0.4 }}         // ระยะเวลาในการแอนิเมชั่น
            className="hover"
            >
              <Link href='#skill' scroll={true}>SKILL</Link>
            </motion.li>

            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 ,delay: 0.2}}         // ระยะเวลาในการแอนิเมชั่น
            className="hover"
            >
              <Link href='#project' scroll={true}>PROJECT</Link>
              </motion.li>

              <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 }}         // ระยะเวลาในการแอนิเมชั่น
            className="hover"
            >
              <Link href='#contect'>CONTACT</Link>
            </motion.li>
          </Scrollspy>
        </nav>

        {/* ส่วนที่เหลือของเนื้อหา */}
        {children}
      </body>
    </html>
  );
}
