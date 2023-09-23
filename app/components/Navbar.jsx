"use client"

import React, { useState } from 'react'

const Navbar = () => {

  const [show,setShow] = useState(false)

  return (
    <>
    <div className='w-full p-5 flex sticky top-0 bg-white z-20 shadow-md items-center justify-between'>
      <div className="logo">
        <a href="/"><h1 style={{fontFamily:'rogre'}} className='text-xl font-extrabold  text-gray-800'>ASHFOLIO</h1></a>
      </div>
      <nav>
        <ul className='md:flex gap-10 text-sm hidden lg:flex items-center justify-center'>
            <li><a href="#home" className='font-bold text-gray-800 hover:text-orange-600 '>Home</a></li>
            <li className=' hover:text-orange-600 '><a href="#intro">About me</a></li>
            <li className=' hover:text-orange-600 '><a href="#skills">Skills</a></li>
            <li className=' hover:text-orange-600 '><a href="#projects">Projects</a></li>
            <li className=' hover:text-orange-600 '><a href="#certificates">Certificates</a></li>
        </ul>

      </nav>
      <div>
        <a href="assets/resume.pdf" download><button className='px-4 hover:scale-105 transition-all py-2 border border-black rounded-full'>Download CV</button></a>
      </div>
      <div className='relative initial md:hidden lg:hidden'>
      <i onClick={()=>{setShow(!show)}} className="ri-menu-3-line text-2xl cursor-pointer"></i>
      <div className={`dropdown absolute  ${show ? 'initial' : 'hidden'} shadow-lg right-0 mt-5 w-56 h-60 rounded-xl `}>

      <nav className="w-full h-full">
        <ul className='flex flex-col gap-5 text-white  font-medium w-full h-full text-sm items-center justify-center'>
            <li><a href="#home">Home</a></li>
            <li><a href="#intro">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
        </ul>

      </nav>
      </div>
      </div>
    </div>
    <div className='w-full h-[1px] bg-gray-500 mt'></div>

    </>
  )
}

export default Navbar
