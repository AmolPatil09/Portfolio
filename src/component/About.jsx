import React from 'react'
import img from '../assets/Amol_Photo_-_Copy-removebg-preview.png'
export default function About() {
  return (
    <div className='h-full w-full' >
    <div className='flex mt-20 flex-col lg:flex-row justify-center' >
    <div className='text-center sm:w-1/2  w-auto m-auto '>
        <img src={img} className='rounded-full mx-auto' />
        </div>
        <div className='text-center w-full lg:w-full  text-white '>
        <div className='sm:text-3xl font-extrabold my-10 sm:text-start sm:m-10 m-3'>
            <div className='border-2 min-h-64 sm:w-2/3 min-w-[200px]   border-amber-100 m-auto  mt-8  rounded-md text-center'>
            <h1 className=' m-6 sm:text-4xl sm:font-bold '>About</h1>
            <p className='text-xl font-thin my-2 mx-2 sm:p-5 p-4 text-justify text-pretty'>Hi I'am Amol , I have passinate about frontend developement mainly react js. I have sound knowledge of
              react js with handson experince.I have also familier with backend framework Node JS and Spring Boot.Also 
              better understanding of java, sql, HTML5, CSS3, Bootstrap, Mongo DB, Next JS.And I am also ready for reskill my
              self as per requirement any techology.also I am always ready to learn new thing.
            </p>
            </div>
        </div>
        </div>
        
        
    </div>
    </div>
  )
}
