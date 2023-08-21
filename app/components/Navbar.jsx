import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-full p-5 flex items-center justify-between'>
      <div className="logo">
        <h1 style={{fontFamily:'rogre'}} className='text-xl font-bold text-gray-800'>ASHFOLIO</h1>
      </div>
      <nav>
        <ul className='flex gap-10 text-sm items-center justify-center'>
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
    </div>
    <div className='w-full h-[1px] bg-gray-500 mt'></div>

    </>
  )
}

export default Navbar
