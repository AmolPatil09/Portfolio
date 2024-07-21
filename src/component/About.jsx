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
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Having 1.7+ Years of Professional IT experience in React, React Native and JavaScript.
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Good Extensive experience in Developing/Handling highly interactive web-based applications specially using React. 
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Familiar with the front-end technologies such as HTML, CSS, Bootstrap, JavaScript, Axios. Familiarity with MongoDB database & MySQL database. 
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Proficient understanding of code versioning tools, such as Git. Experience with Git-Hub. 
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Ability to handle multiple tasks and work as in a team Member.
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Excellent analytical, problem solving and programming skills. Committed, goal oriented, learn new things & technologies. 
            </p>
            <p className='text-sm sm:text-xl font-thin  mx-2 sm:p-5 p-4 text-justify text-pretty'>
            •	Possess good problem solving & interpersonal skills, having capability to work alone.
            </p>
            </div>
        </div>
        </div>
        
        
    </div>
    </div>
  )
}
