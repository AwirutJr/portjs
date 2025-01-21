'use client';

import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const page = () => {
  return (
    <div id="contect" className=" w-full flex h-[300px] iii">
            <img src="/photo/chok.jpg" className='w-[300px] h-full object-cover'/>
      <div className=' w-full h-[300px] flex justify-center  items-start gap-8 py-16'>
          <div className=" w-[300px]">
            <h1 className="font-bold mb-3">Contact Information</h1>
            <p>+6695-807-2692</p>
            <p>91/835 Nuanjan 56 Alley, Section 1, Nuanjan Subdistrict, Bueng Kum District, Bangkok 10230, Thailand</p>
          </div>
          <div className=' w-[300px] flex flex-col items-center gap-1.5'>
          <h1 className="font-bold mb-3">Important Links</h1>
            <Link href='#home'>Home</Link>
            <Link href='#about'>About Me</Link>
            <Link href='#skill'>Skill</Link>
            <Link href='#project'>Project</Link>
            <Link href='#contect'>Contect</Link>
          </div>
          <div className="w-[300px] flex flex-col items-center">
            <h1 className="font-bold mb-3">Social Media Links</h1>
            <ul className='flex gap-4'>
              <Link href='#'><FaFacebook className='w-8 h-8'/></Link>
              <Link href='#'><MdEmail className='w-8 h-8'/></Link>
              <Link href='#'><FaGithub className='w-8 h-8'/></Link>
              <Link href='#'><FaLinkedin className='w-8 h-8'/></Link>
              <Link href='#'><FaInstagram className='w-8 h-8'/></Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default page
