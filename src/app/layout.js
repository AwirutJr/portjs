'use client';  // ใช้ 'use client' เพื่อให้เป็น Client Component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { motion } from 'framer-motion';  // นำเข้า motion จาก framer-motion

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
        <nav className="flex justify-between p-4 fixed w-full z-10">
          <motion.div
          initial={{ opacity: 0, scale: 0.5, zIndex: -1 }}  // เริ่มต้นด้วยขนาดเล็กและอยู่ด้านหลัง
          animate={{ opacity: 1, scale: 1, zIndex: 10 }}     // เด้งออกมาขนาดปกติและออกมาจากด้านหลัง
          transition={{ 
            type: "spring",                        // ใช้ spring สำหรับเด้ง
            stiffness: 500,                        // ความตึงของสปริง
            damping: 50,                           // ความนุ่มนวลในการเคลื่อนไหว
            duration: 2                          // ระยะเวลาในการแอนิเมชั่น
          }}
           className="font-bold text-2xl ml-[5%]">AWIRUT</motion.div>

          {/* ใช้ motion กับ ul สำหรับการแอนิเมชั่น */}
          <ul 
            className="flex space-x-6 mr-[3%]"
          >
            {/* ใช้ Link ของ Next.js ปกติ */}
            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 ,delay: 0.6}}         // ระยะเวลาในการแอนิเมชั่น
            >
              <Link href='#about'>ABOUT</Link>
            </motion.li>
            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1,delay: 0.4 }}         // ระยะเวลาในการแอนิเมชั่น
            >
              <Link href='#skill' scroll={true}>SKILL</Link>
            </motion.li>
            <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 ,delay: 0.2}}         // ระยะเวลาในการแอนิเมชั่น
            >
              <Link href='#project' scroll={true}>PROJECT</Link>
              </motion.li>
              <motion.li
            initial={{ x: -100, opacity: 0 }}   // เริ่มต้นที่ซ้ายสุด
            animate={{ x: 0, opacity: 1 }}      // เลื่อนมาที่ตำแหน่งปกติ
            transition={{ duration: 0.1 }}         // ระยะเวลาในการแอนิเมชั่น
            >
              <Link href='#contact'>CONTACT</Link>
            </motion.li>
          </ul>
        </nav>

        {/* ส่วนที่เหลือของเนื้อหา */}
        {children}
      </body>
    </html>
  );
}
