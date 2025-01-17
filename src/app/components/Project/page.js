import React from 'react'
import Link from 'next/link'  

const project = () => {
  return (
    <div id='project' className="bg-[#17153B] w-full h-[600px] flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold">PROJECT</h1>

        <div className="flex justify-center items-center gap-28 h-auto w-full mt-[4rem]">

          <Link href='/' className="flex flex-col justify-center items-center h-auto ">
            <img src='https://images.lifestyleasia.com/wp-content/uploads/sites/8/2023/02/26154456/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-18-1600x900.jpg' className="w-[300px] h-[200px] rounded-2xl "></img>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>Project Shoping</h1>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
            </div>
          </Link>

          <Link href='/' className="flex flex-col justify-center items-center">
            <img src='https://enjoyniigata.com/image/rendering/attraction_image/2318/trim.1680/3/2?v=5ff5ada31935bdee869b680044523abb628f6049' className="bg-gray-500 w-[300px] h-[200px] rounded-2xl"></img>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>RBAC</h1>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
              <p>- Lorem, ipsum.</p>
            </div>
          </Link>

          <Link href='/' className="flex flex-col justify-center items-center">
            <img src='https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5yMr3d1J63GlXVBC2MbOhuRZeU0fu1Q5t5ONUxE5wRVHh9tqT2j.jpg' className="bg-black w-[300px] h-[200px] rounded-2xl"></img>
            <div className='w-full h-auto'>
              <h1 className='w-full text-center'>CRUD</h1>
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
