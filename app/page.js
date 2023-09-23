"use client"
import React, { lazy } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <div style={{ fontFamily: "gilroy" }} id='home' className='container min-h-screen w-full'>
      <section    className='sec1 w-full flex flex-col items-center text-center lg:items-start justify-center p-5 mt-4'>
        <motion.h2 initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}   className='text-xl cr font-bold text-red-500 mb-2'>Creative</motion.h2>
        <motion.h1 initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.2}}   style={{ fontFamily: 'rogre' }} className='name font-extrabold text-6xl md:text-7xl lg:text-8xl'>WEB DESIGNER & DEVELOPER</motion.h1>
        <motion.p initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.5}}  className='mt-1 text-md'>Your vision, our expertise: Crafting the perfect website for you. Ceative web designer harnessing the power of design to achieve online goals. </motion.p>
      </section>
      <section  className='sec2 w-full flex items-end justify-evenly  '>
        <motion.div initial={{y:700,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}}  className='w-[25vw] h-[38vw] overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-black'>
          <img className='object-cover hover:scale-110 transition-all h-full w-full' src="/images/model1.jpg" alt="" />
        </motion.div>
        <motion.div initial={{y:700,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1.2}}  className='w-[22vw] h-[40vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover hover:scale-110 transition-all h-full w-full' src="/images/place.jpg" alt="" />

        </motion.div>
        <motion.div initial={{y:700,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1.5}}  className='w-[25vw] h-[37vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover hover:scale-110 transition-all h-full w-full' src="/images/model2.jpg" alt="" />

        </motion.div>
        <motion.div initial={{y:700,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1.3}}  className='w-[25vw] h-[38vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover hover:scale-110 transition-all h-full w-full' src="/images/animal.jpg" alt="" />

        </motion.div>

      </section>
      <section id='intro' className=' w-full min-h-[55vh] items-center justify-evenly flex flex-col'>
        <div className='w-[90%] h-[1px] bg-gray-500 '></div>
        <div className=' flex flex-col p-10 items-start text-center justify-center'>
          <h2 className='text-xl mb-1'>Hello I'm,</h2>
          <div className='flex lg:flex-row flex-col items-center text-center justify-center'>
            <h1 style={{ fontFamily: 'rogre' }} className='text-6xl font-bold text-gray-700'>Ayush Bathre</h1>
            <div className=' flex ml-4 h-full gap-5 flex-wrap items-center justify-center'>
              <Image alt='image' priority={false} quality={50} src={'/png/next.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/html.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/css.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/react.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/node.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/express.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/git.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/js.png'} width={40} height={40}></Image>
              <Image alt='image' priority={false} quality={50} src={'/png/mongo.png'} width={40} height={40}></Image>

            </div>

          </div>
          <motion.p initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='mt-2 text-lg'>I am a skilled developer with a passion for creating modern websites and web applications. I am an ambitious, optimistic, and disciplined individual who thrives on transforming innovative ideas into amazing projects and designs. As a Full Stack Developer, I possess expertise in several programming languages and tools, including NextJs, ReactJs, NodeJs, ExpressJs, MongoDB, Framer Motion, Bootstrap, Tailwind, and Photoshop. I completed my Bachelor of Computer Applications (BCA) degree during my undergraduate studies and completed Master of Computer Applications (MCA) for my postgraduate degree.
            <br />
            <br />

            I have completed several projects in my field and have earned certificates in problem-solving and JavaScript from Hackerrank. I possess the ability to learn new concepts quickly and adapt to new environments easily. My ultimate goal is to bring value to your organization by utilizing my skills and expertise. To learn more about my qualifications and experience, I invite you to take a look at my resume.</motion.p>
        </div>
        <div className='w-[95%] h-[1px] bg-gray-200 '></div>

      </section>
      <section className='min-h-screen w-full flex flex-col items-center justify-center'>

        <div className='flex lg:flex-row flex-col-reverse items-center'>


          <div id='skills' className='lg:w-[60%]'>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,staggerChildren:0.5}} className='flex items-center justify-center min-h-screen flex-wrap   '>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/next.png'} width={30} height={30}></Image>
                    <h2>NextJS</h2>
                  </div>
                  <p className='text-gray-600  my-2'>Next.js is a flexible React framework that gives you building blocks to create fast web applications.</p>
                  <a target='_blank' href='https://nextjs.org/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/react.png'} width={30} height={30}></Image>
                    <h2>ReactJS</h2>
                  </div>
                  <p className='text-gray-600  my-2'>The React.js framework is an open-source JavaScript framework and library developed by Facebook.  </p>
                  <a target='_blank' href='https://react.dev/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/node.png'} width={30} height={30}></Image>
                    <h2>NodeJS</h2>
                  </div>
                  <p className='text-gray-600  my-2'>
                    Node. js is an open-source, cross-platform JavaScript runtime environment and library.</p>
                  <a target='_blank' href='https://nodejs.org/en' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8 my-3 mx-2  bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/express.png'} width={30} height={30}></Image>
                    <h2>ExpressJS</h2>
                  </div>
                  <p className='text-gray-600  my-2'>Express is a minimal and flexible Node.js web application framework that provides a set of features </p>
                  <a target='_blank' href='https://expressjs.com/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/js.png'} width={30} height={30}></Image>
                    <h2>Javascript</h2>
                  </div>
                  <p className='text-gray-600  my-2'>JavaScript is a scripting language used to develop web pages developed in Netscape.</p>
                  <a target='_blank' href='https://www.w3schools.com/js/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/mongo.png'} width={30} height={30}></Image>
                    <h2>MongoDB</h2>
                  </div>
                  <p className='text-gray-600  my-2'>MongoDB is a non-relational document database that provides support for JSON-like storage.</p>
                  <a target='_blank' href='https://www.mongodb.com/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/git.png'} width={30} height={30}></Image>
                    <h2>Git/Github</h2>
                  </div>
                  <p className='text-gray-600  my-2'>Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds.</p>
                  <a target='_blank' href='https://github.com/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/tailwind.png'} width={30} height={30}></Image>
                    <h2>TailwindCSS</h2>
                  </div>
                  <p className='text-gray-600  my-2'>Tailwind CSS is a utility-first CSS framework for building modern websites without ever leaving your HTML.</p>
                  <a target='_blank' href='https://tailwindcss.com/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div className='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image alt='img' src={'/png/motion.png'} width={30} height={30}></Image>
                    <h2>Framer Motion</h2>
                  </div>
                  <p className='text-gray-600  my-2'>Framer Motion is a simple yet powerful motion library for React. It powers the amazing animations.</p>
                  <a target='_blank' href='https://www.framer.com/motion/' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </motion.div>
            </motion.div>

          </div>
          <div className='lg:w-[40%] flex items-center overflow-hidden justify-center'>
            <img loading='lazy'  className='rounded-xl w-[90%] hover:scale-105 transition-all ' src="/images/model3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id='projects' className='min-h-screen w-full flex flex-col items-center'>
        <div className='w-[95%] h-[1px] bg-gray-200 mt-10 '></div>

        <div className='px-10 py-8 flex flex-col items-center justify-center text-center'>
          <h1 style={{ fontFamily: "rogre" }} className='text-3xl font-bold'>Projects</h1>
          <motion.p initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}  className='mt-3'>I am excited to showcase my impressive projects to you. I believe that my work will provide you with a better understanding of my skills and expertise. I am confident that my projects will demonstrate my ability to tackle complex challenges and deliver quality results. I hope you find my projects inspiring and I look forward to your feedback.</motion.p>
        </div>
        <div className='projects flex items-center justify-evenly flex-wrap'>
          <motion.div initial={{scale:0.9,y:40}} whileInView={{scale:1,y:0}} transition={{duration:0.5}} className='lg:w-[50%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://wearshop-nextjs.netlify.app/">
            <img className='w-full  object-cover' src="/images/project1.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>E-Commerce Website</span> built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS! This project provides a complete solution for an online store, offering various products such as t-shirts, hoodies, mugs, and stickers. It incorporates essential features including user authentication, shopping cart functionality, order management, and payment integration using Razorpay. </p>
          </Link>
          </motion.div>
          <motion.div initial={{scale:0.9,y:40}} whileInView={{scale:1,y:0}} transition={{duration:0.5}} className='lg:w-[44%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Messenger-App">
            <img className='w-full  object-cover' src="/images/project4.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>Real Time Chat Application</span> built using MERN Stack and web sockets.

              Users can signup and chat with each other through this real time chat Application. It has single as well as group chat functionality.</p>

          </Link>
          </motion.div>

          <motion.div initial={{scale:0.9,y:40}} whileInView={{scale:1,y:0}} transition={{duration:0.5}} className='lg:w-[44%] cursor-pointer m-2 p-7 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Sociosphere---Social-Media-Application">
            <img className='w-full  object-cover' src="/images/project2.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'>A Next.js 13 based <span className='font-bold text-black'>Social Media Platform</span> that allows users to connect, share posts, like, comment, and interact with others. This application provides a user-friendly interface and exciting features to enhance your social networking experience.</p>

          </Link>
          </motion.div>
          <motion.div initial={{scale:0.9,y:40}} whileInView={{scale:1,y:0}} transition={{duration:0.5}} className='lg:w-[50%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Food-order-application">
            <img className='w-full  object-cover' src="/images/project3.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>Food Ordering Website</span> is an e-commerce project built using MERN Stack. It helps user to order their favorite meal using the platform. Users can add to cart, pay, and order food within few seconds. It also has real time admin panel to address incoming orders. </p>

          </Link>
          </motion.div>
        </div>
        <div className='w-[95%] h-[1px] bg-gray-200 mt-10 '></div>

      </section>

      <section id='certificates' className='min-h-[80vh]  flex flex-col items-center justify-center'>
        <div className='p-10 mt-5 flex flex-col items-center justify-center text-center'>
          <h1 style={{ fontFamily: "rogre" }} className='text-3xl font-bold'>Certifications</h1>
          <motion.p initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque quia consequatur repellat perspiciatis omnis aut corporis reprehenderit voluptatibus ut cum quae molestiae recusandae sapiente, expedita dolor? Ipsam, rem beatae?</motion.p>
        </div>
        <div className='w-full    flex-wrap gap-5 flex items-center justify-center'>


          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/problemsolving.jpg" alt="" />
          </motion.div>
          <div  className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/email.jpg" alt="" />
          </div>
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/javascript.jpg" alt="" />
          </motion.div>
          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/git.jpg" alt="" />
          </motion.div>
          <div  className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/sql.jpg" alt="" />
          </div>
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='lg:w-[30vw]'>
            <img loading='lazy' className='shadow-lg w-full' src="/images/photoshop.jpg" alt="" />
          </motion.div>

        </div>

        <div className='w-[95%] h-[1px] bg-gray-200 mt-10 '></div>

      </section>

      <section className='flex flex-col lg:flex-row min-h-[40vh] w-full items-center justify-evenly p-10'>
        <div className='lg:w-[60%]'>
          <h1 className='text-6xl font-semibold text-gray-700'>HAVE AN IDEA ?</h1>
          <h2 className='text-xl font-medium'>Lets do it together</h2>
          <p>Don't put your creativity on hold and let's build a professional web experience which will put you above your competitors.</p>
        </div>
        <div className=' mt-5 lg:mt-0'>
          <h2 className='text-2xl font-semibold text-gray-700'>GET IN TOUCH</h2>
          <div className='text-2xl text-gray-700'>
            <a href='mailto:ayushbathre3101@gmail.com'><i className="ri-mail-fill"></i></a>
            <a href="https://www.linkedin.com/in/ayushbathre2001/"><i className="ri-linkedin-box-fill ml-2"></i></a>
            <a href="https://github.com/AyushBathre2001"><i className="ri-github-fill ml-2"></i></a>
            <a href="https://www.instagram.com/__ash_.__._/"><i className="ri-instagram-fill ml-2"></i></a>
          </div>
        </div>

      </section>
      <div className='w-[95%] h-[1px] bg-gray-300 mt-5 '></div>

      <footer className="bg-white rounded-lg shadow  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">

              <span style={{ fontFamily: 'rogre' }} className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-700">ASHFOLIO</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-600">
              <li>
                <a href="#intro" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
              </li>
              <li>
                <a href="#projects" className="mr-4 hover:underline md:mr-6 ">Projects</a>
              </li>
              <li>
                <a href="assets/resume.pdf" download className="hover:underline">Resume</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-600 sm:text-center dark:text-gray-600">© 2023 <a href="https://flowbite.com/" className="hover:underline">Ashfolio™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Home
