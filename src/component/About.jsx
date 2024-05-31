import React from 'react'
import img from '../assets/Amol_Photo_-_Copy-removebg-preview.png'
export default function About() {
  return (
    <div className='h-full w-full' >
    <div className='flex mt-10 flex-col lg:flex-row justify-center' >
    <div className='text-center w-1/2   m-auto '>
        <img src={img} className='rounded-full mx-auto' />
        </div>
        <div className='text-center w-full lg:w-full  text-white '>
        <div className='sm:text-3xl font-extrabold my-10 sm:text-start sm:m-10 m-3'>
            <div className=' min-h-64 sm:w-2/3 min-w-[200px]   border-amber-100 m-auto  mt-8  rounded-md text-center'>
            <h1 className=' m-6 sm:text-4xl sm:font-bold '>Profile Summary</h1>
            <p className='text-sm sm:text-xl font-thin my-2 mx-2 sm:p-5 p-4 text-justify text-pretty'>"A dedicated and innovative Front-End Developer with a primary focus on React.js, complemented by a foundational understanding of Node.js, Spring Boot, and Angular. With a strong passion for developing dynamic and responsive web applications, I bring a unique blend of technical expertise and creativity to every project."
            </p>
            <p className='text-sm sm:text-xl font-thin my-2 mx-2 sm:p-5 p-4 text-justify text-pretty'>React.js: Extensive experience in building user-friendly, component-based web applications using React.js. Proficient in leveraging hooks, state management libraries (like Redux), and React Router for seamless navigation and state handling.

            </p>
            <p className='text-sm sm:text-xl font-thin my-2 mx-2 sm:p-5 p-4 text-justify text-pretty'>
Node.js: Basic knowledge of building scalable server-side applications with Node.js. Familiar with Express.js for creating RESTful APIs and handling server-side logic.
            </p>
            </div>
        </div>
        </div>
        
        
    </div>
    </div>
  )
}
