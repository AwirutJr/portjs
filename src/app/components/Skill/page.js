import React from 'react'

const skill = () => {
  return (
    <div id='skill' className="imgbg1 w-full h-[500px] ">
        <div className='blurBg flex justify-center items-center h-full w-full gap-14'>
          <div className='w-[400px] h-[400px] rounded-xl flex flex-col justify-center items-center blurBg1'>
            
              <h1 className='text-white text-4xl font-bold text-center'>Tools</h1>

              <div className='grid-cols-3 grid gap-8 mt-8'>
                <img src="/photo/github.png" className=' w-14 h-14'/>
                <img src="/photo/docker.png" className=' w-16 h-14'/>
                <img src="/photo/postman.png" className=' w-14 h-14'/>
                <img src="/photo/Vercel.png" className=' w-14 h-14'/>
              </div>
            
          </div>

          <div className='w-[300px] text-center'>
            <h1 className="text-white text-5xl font-bold mb-2">SKILL</h1>
            <hr />
            <p className='mt-2 text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit incidunt veniam sed molestias commodi iusto explicabo distinctio officia est!</p>
          </div>

          <div className='w-[400px] h-[400px] rounded-xl flex flex-col justify-center items-center blurBg1'>
            
              <h1 className='text-white text-4xl font-bold text-center'>Frameworks/ <br />Technical Skills</h1>

              <div className='grid-cols-3 grid gap-8 mt-8'>
                <img src="/photo/nextjs.png" className=' w-14 h-14'/>
                <img src="/photo/nodejs.png" className=' w-16 h-14'/>
                <img src="/photo/express.png" className=' w-14 h-14'/>
                <img src="/photo/typescript.png" className=' w-14 h-14'/>
                <img src="/photo/tailwind.png" className=' w-14 h-14'/>
                <img src="/photo/prisma.png" className=' w-14 h-14'/>
                <img src="/photo/reactjs.png" className=' w-14 h-14'/>
                <img src="/photo/MySQL.png" className=' w-14 h-14'/>
              </div>
            
          </div>

        </div>
      </div>
  )
}

export default skill
