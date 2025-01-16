import React from 'react'
import Link from 'next/link'  

const project = () => {
  return (
    <div id='project' className="bg-[#17153B] w-full h-[600px] flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold">PROJECT</h1>

        <div className="flex justify-center items-center gap-28 h-auto w-full mt-[4rem]">

          <Link href='/' className="flex flex-col justify-center items-center h-auto ">
            <div className="bg-green-500 w-[300px] h-[200px] rounded-2xl "></div>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>Profect1</h1>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
            </div>
          </Link>

          <Link href='/' className="flex flex-col justify-center items-center">
            <div className="bg-gray-500 w-[300px] h-[200px] rounded-2xl"></div>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>Profect1</h1>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
            </div>
          </Link>

          <Link href='/' className="flex flex-col justify-center items-center">
            <div className="bg-black w-[300px] h-[200px] rounded-2xl"></div>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>Profect1</h1>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default project
