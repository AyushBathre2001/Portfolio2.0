"use client"

import React, { useState } from 'react'

const Navbar = () => {

  const [show,setShow] = useState(false)

  return (
    <>
    <div className='w-full p-5 flex items-center justify-between'>
      <div className="logo">
        <h1 style={{fontFamily:'rogre'}} className='text-xl font-bold text-gray-800'>ASHFOLIO</h1>
      </div>
      <nav>
        <ul className='md:flex gap-10 text-sm hidden lg:flex items-center justify-center'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Certificates</a></li>
        </ul>

      </nav>
      <div>
        <button className='px-4 py-2 border border-black rounded-full'>Download CV</button>
      </div>
      <div className='relative initial md:hidden lg:hidden'>
      <i onClick={()=>{setShow(!show)}} class="ri-menu-3-line text-2xl cursor-pointer"></i>
      <div className={`dropdown absolute  ${show ? 'initial' : 'hidden'} right-0 mt-5 w-56 h-56 rounded-xl bg-gray-500`}>

      <nav className="w-full h-full">
        <ul className='flex flex-col gap-3 text-white font-medium w-full h-full text-sm items-center justify-center'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Certificates</a></li>
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
