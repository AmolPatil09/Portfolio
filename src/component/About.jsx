import React from 'react'
import img from '../assets/Amol_Photo_-_Copy-removebg-preview.png'
export default function About() {
  return (
    <div className='h-full w-full' >
    <div className='flex mt-20 flex-col lg:flex-row justify-center' >
    <div className='text-center w-1/2   m-auto '>
        <img src={img} className='rounded-full mx-auto' />
        </div>
        <div className='text-center w-full lg:w-full  text-white '>
        <div className='sm:text-3xl font-extrabold my-10 sm:text-start sm:m-10 m-3'>
            <div className='sm:border-2 min-h-64 sm:w-2/3 min-w-[200px]   border-amber-100 m-auto  mt-8  rounded-md text-center'>
            <h1 className=' m-6 sm:text-4xl sm:font-bold '>About</h1>
            <p className='text-sm sm:text-xl font-thin my-2 mx-2 sm:p-5 p-4 text-justify text-pretty'>"I am a passionate front-end developer with expertise 
            in React and Angular, dedicated to creating engaging and user-friendly web experiences. Equipped with strong skills in back-end development using 
            Spring Boot and Node.js, I thrive in full-stack development environments. With a keen eye for design and a commitment to clean, efficient code, 
            I am driven to deliver high-quality solutions that exceed client expectations. Eager to leverage my skills and experience to contribute to innovative
             projects and collaborate with like-minded professionals in the tech industry."
            </p>
            </div>
        </div>
        </div>
        
        
    </div>
    </div>
  )
}
