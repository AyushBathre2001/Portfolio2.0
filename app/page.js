import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div style={{ fontFamily: "gilroy" }} className='container min-h-screen w-full'>
      <section className='sec1 w-full flex flex-col items-center text-center lg:items-start justify-center p-5 mt-4'>
        <h2 className='text-2xl font-medium text-gray-600 mb-2'>Creative</h2>
        <h1 style={{ fontFamily: 'rogre' }} className='name font-extrabold text-6xl md:text-7xl lg:text-8xl'>WEB DESIGNER & DEVELOPER</h1>
        <p className='mt-1 text-lg'>Your vision, our expertise: Crafting the perfect website for you. Ceative web designer harnessing the power of design to achieve online goals. </p>
      </section>
      <section className='sec2 w-full flex items-end justify-evenly  '>
        <div className='w-[25vw] h-[38vw] overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-black'>
          <img className='object-cover h-full w-full' src="/images/model1.jpg" alt="" />
        </div>
        <div className='w-[22vw] h-[40vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover h-full w-full' src="/images/place.jpg" alt="" />

        </div>
        <div className='w-[25vw] h-[37vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover h-full w-full' src="/images/model2.jpg" alt="" />

        </div>
        <div className='w-[25vw] h-[38vw] rounded-tl-3xl overflow-hidden rounded-tr-3xl bg-black'>
          <img className='object-cover h-full w-full' src="/images/animal.jpg" alt="" />

        </div>

      </section>
      <section className='intro w-full min-h-[55vh] items-center justify-evenly flex flex-col'>
        <div className='w-[90%] h-[1px] bg-gray-500 '></div>
        <div className=' flex flex-col p-10 items-start text-center justify-center'>
          <h2 className='text-xl mb-1'>Hello I'm,</h2>
          <div className='flex lg:flex-row flex-col items-center text-center justify-center'>
            <h1 style={{ fontFamily: 'rogre' }} className='text-6xl font-bold text-gray-700'>Ayush Bathre</h1>
            <div className=' flex ml-4 h-full gap-5 flex-wrap items-center justify-center'>
              <Image src={'/png/next.png'} width={40} height={40}></Image>
              <Image src={'/png/html.png'} width={40} height={40}></Image>
              <Image src={'/png/css.png'} width={40} height={40}></Image>
              <Image src={'/png/react.png'} width={40} height={40}></Image>
              <Image src={'/png/node.png'} width={40} height={40}></Image>
              <Image src={'/png/express.png'} width={40} height={40}></Image>
              <Image src={'/png/git.png'} width={40} height={40}></Image>
              <Image src={'/png/js.png'} width={40} height={40}></Image>
              <Image src={'/png/mongo.png'} width={40} height={40}></Image>

            </div>

          </div>
          <p className='mt-2 text-lg'>I am a skilled developer with a passion for creating modern websites and web applications. I am an ambitious, optimistic, and disciplined individual who thrives on transforming innovative ideas into amazing projects and designs. As a Full Stack Developer, I possess expertise in several programming languages and tools, including NextJs, ReactJs, NodeJs, ExpressJs, MongoDB, Framer Motion, Bootstrap, Tailwind, and Photoshop. I completed my Bachelor of Computer Applications (BCA) degree during my undergraduate studies and completed Master of Computer Applications (MCA) for my postgraduate degree.
            <br />
            <br />

            I have completed several projects in my field and have earned certificates in problem-solving and JavaScript from Hackerrank. I possess the ability to learn new concepts quickly and adapt to new environments easily. My ultimate goal is to bring value to your organization by utilizing my skills and expertise. To learn more about my qualifications and experience, I invite you to take a look at my resume.</p>
        </div>
        <div className='w-[95%] h-[1px] bg-gray-200 '></div>

      </section>
      <section className='min-h-screen w-full flex flex-col items-center justify-center'>

        <div className='flex lg:flex-row flex-col-reverse items-center'>


          <div className='lg:w-[60%]'>
            <div class='flex items-center justify-center min-h-screen flex-wrap   '>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/next.png'} width={30} height={30}></Image>
                    <h2>NextJS</h2>
                  </div>
                  <p class='text-gray-600  my-2'>Next.js is a flexible React framework that gives you building blocks to create fast web applications.</p>
                  <a target='_blank' href='https://nextjs.org/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/react.png'} width={30} height={30}></Image>
                    <h2>ReactJS</h2>
                  </div>
                  <p class='text-gray-600  my-2'>The React.js framework is an open-source JavaScript framework and library developed by Facebook.  </p>
                  <a target='_blank' href='https://react.dev/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/node.png'} width={30} height={30}></Image>
                    <h2>NodeJS</h2>
                  </div>
                  <p class='text-gray-600  my-2'>
                    Node. js is an open-source, cross-platform JavaScript runtime environment and library.</p>
                  <a target='_blank' href='https://nodejs.org/en' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8 my-3 mx-2  bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/express.png'} width={30} height={30}></Image>
                    <h2>ExpressJS</h2>
                  </div>
                  <p class='text-gray-600  my-2'>Express is a minimal and flexible Node.js web application framework that provides a set of features </p>
                  <a target='_blank' href='https://expressjs.com/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/js.png'} width={30} height={30}></Image>
                    <h2>Javascript</h2>
                  </div>
                  <p class='text-gray-600  my-2'>JavaScript is a scripting language used to develop web pages developed in Netscape.</p>
                  <a target='_blank' href='https://www.w3schools.com/js/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/mongo.png'} width={30} height={30}></Image>
                    <h2>MongoDB</h2>
                  </div>
                  <p class='text-gray-600  my-2'>MongoDB is a non-relational document database that provides support for JSON-like storage.</p>
                  <a target='_blank' href='https://www.mongodb.com/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/git.png'} width={30} height={30}></Image>
                    <h2>Git/Github</h2>
                  </div>
                  <p class='text-gray-600  my-2'>Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds.</p>
                  <a target='_blank' href='https://github.com/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/tailwind.png'} width={30} height={30}></Image>
                    <h2>TailwindCSS</h2>
                  </div>
                  <p class='text-gray-600  my-2'>Tailwind CSS is a utility-first CSS framework for building modern websites without ever leaving your HTML.</p>
                  <a target='_blank' href='https://tailwindcss.com/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
              <div class=' px-5 py-8  my-3 mx-2 bg-white rounded-lg shadow-xl'>
                <div class='w-56'>
                  <div className='flex items-center gap-1 '>
                    <Image src={'/png/motion.png'} width={30} height={30}></Image>
                    <h2>Framer Motion</h2>
                  </div>
                  <p class='text-gray-600  my-2'>Framer Motion is a simple yet powerful motion library for React. It powers the amazing animations.</p>
                  <a target='_blank' href='https://www.framer.com/motion/' class='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Know more
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className='lg:w-[40%] flex items-center justify-center'>
            <img className='rounded-xl w-[90%] ' src="/images/model3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className='min-h-screen w-full flex flex-col items-center'>
        <div className='w-[95%] h-[1px] bg-gray-200 mt-10 '></div>

        <div className='px-10 py-8 flex flex-col items-center justify-center text-center'>
          <h1 style={{ fontFamily: "rogre" }} className='text-3xl font-bold'>Projects</h1>
          <p className='mt-3'>I am excited to showcase my impressive projects to you. I believe that my work will provide you with a better understanding of my skills and expertise. I am confident that my projects will demonstrate my ability to tackle complex challenges and deliver quality results. I hope you find my projects inspiring and I look forward to your feedback.</p>
        </div>
        <div className='projects flex items-center justify-evenly flex-wrap'>
          <div className='lg:w-[50%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://wearshop-nextjs.netlify.app/">
            <img className='w-full  object-cover' src="/images/project1.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>E-Commerce Website</span> built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS! This project provides a complete solution for an online store, offering various products such as t-shirts, hoodies, mugs, and stickers. It incorporates essential features including user authentication, shopping cart functionality, order management, and payment integration using Razorpay. </p>
          </Link>
          </div>
          <div className='lg:w-[44%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Messenger-App">
            <img className='w-full  object-cover' src="/images/project4.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>Real Time Chat Application</span> built using MERN Stack and web sockets.

              Users can signup and chat with each other through this real time chat Application. It has single as well as group chat functionality.</p>

          </Link>
          </div>

          <div className='lg:w-[44%] cursor-pointer m-2 p-7 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Sociosphere---Social-Media-Application">
            <img className='w-full  object-cover' src="/images/project2.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'>A Next.js 13 based <span className='font-bold text-black'>Social Media Platform</span> that allows users to connect, share posts, like, comment, and interact with others. This application provides a user-friendly interface and exciting features to enhance your social networking experience.</p>

          </Link>
          </div>
          <div className='lg:w-[50%] cursor-pointer p-7 m-2 rounded-2xl shadow-lg bg-white min-h-[60vh]'>
          <Link href="https://github.com/AyushBathre2001/Food-order-application">
            <img className='w-full  object-cover' src="/images/project3.png" alt="" />
            <p className='mt-2 text-base font-medium text-gray-700'> <span className='font-bold text-black'>Food Ordering Website</span> is an e-commerce project built using MERN Stack. It helps user to order their favorite meal using the platform. Users can add to cart, pay, and order food within few seconds. It also has real time admin panel to address incoming orders. </p>

          </Link>
          </div>
        </div>
        <div className='w-[95%] h-[1px] bg-gray-200 mt-10 '></div>

      </section>

      <section className='min-h-[80vh]  flex flex-col items-center justify-center'>
        <div className='p-10 mt-5 flex flex-col items-center justify-center text-center'>
          <h1 style={{ fontFamily: "rogre" }} className='text-3xl font-bold'>Certifications</h1>
          <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque quia consequatur repellat perspiciatis omnis aut corporis reprehenderit voluptatibus ut cum quae molestiae recusandae sapiente, expedita dolor? Ipsam, rem beatae?</p>
        </div>
        <div className='w-full    flex-wrap gap-5 flex items-center justify-center'>


          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/problemsolving.jpg" alt="" />
          </div>
          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/email.jpg" alt="" />
          </div>
          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/javascript.jpg" alt="" />
          </div>
          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/git.jpg" alt="" />
          </div>
          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/sql.jpg" alt="" />
          </div>
          <div className='lg:w-[30vw]'>
            <img className='shadow-lg w-full' src="/images/photoshop.jpg" alt="" />
          </div>

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
            <i class="ri-mail-fill"></i>
            <i class="ri-linkedin-box-fill ml-2"></i>
            <i class="ri-github-fill ml-2"></i>
            <i class="ri-instagram-fill ml-2"></i>
          </div>
        </div>

      </section>
      <div className='w-[95%] h-[1px] bg-gray-300 mt-5 '></div>

      <footer class="bg-white rounded-lg shadow  m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">

              <span style={{ fontFamily: 'rogre' }} class="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-700">ASHFOLIO</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-600">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Projects</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Resume</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-600 sm:text-center dark:text-gray-600">© 2023 <a href="https://flowbite.com/" class="hover:underline">Ashfolio™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Home
