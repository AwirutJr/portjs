import React from 'react'

const about = () => {
  return (
      <div id='about' className="flex justify-center items-center gap-3 h-[600px] colorBg">
        <div className="">
          <img  src="https://plus.unsplash.com/premium_photo-1730828573442-e80d2eef4bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[250px] h-[300px] object-cover shadow-lg rounded-2xl " />
        </div>
        <div className="w-[25%] h-[300px] ml-2 space-y-2 ">
          <h1 className="text-3xl">About Me</h1>
          <hr />
          <p className="">My passion for movies, especially Iron Man, inspired me to start learning computer programming in high school. Seeing a character create and control robots with code sparked my interest. I've been writing code ever since and am deeply passionate about being a developer, as it allows me to create and innovate.</p>
          <button className="bg-[#C8ACD6] px-4 rounded-md">RESUME</button>
        </div>
      </div>
  )
}

export default about
