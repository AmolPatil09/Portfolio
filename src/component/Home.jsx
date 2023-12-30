import React from 'react'
import img from '../assets/Amol_Photo_-_Copy-removebg-preview.png'
import { saveAs } from 'file-saver';

export default function Home() {

  const downloadResume=()=>{
    console.log("Hi");
   const pdfUrl=".https://amolpatil09.github.io/Portfolio/MyResumenew.pdf";
   saveAs(pdfUrl, 'Amol_Patil_Resume.pdf')
   
  }
  return (
    <div className='h-full w-full' >
    <div className='flex mt-20 flex-col-reverse sm:flex-row' >
        <div className='text-center w-1/2 m-auto text-white '>
        <div className='sm:text-3xl font-extrabold my-10 sm:text-start mx-auto sm:mx-[100px]'>
            <h1>Hi,</h1>
            <h1 className='text-xl sm:text-4xl'>I'am Amol</h1>
            <h1 className='text-blue-400 sm:text-4xl'>Fullstack Developer</h1>
            <h1 className='Sm:text-xl font-semibold'>(MERN Fullstack / Java Fullstack)</h1>
            <button className='button sm:my-2 sm:text-xl text-md font-semibold p-2 rounded-md bg-gray-950 hover:bg-blue-400' onClick={()=>{downloadResume()}}>Download CV</button>
        </div>
        </div>
        <div className='text-center w-1/2 m-auto '>
        <img src={img} className='rounded-full mx-auto' />
        </div>
        
    </div>
    </div>
  )
}
