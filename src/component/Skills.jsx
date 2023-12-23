import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";

export default function Skills() {
  return (
    <div className='flex flex-col w-full justify-center'>
      
        <div className='min-h-20 w-full'>
         <div className='md:border-2 min-h-64 md:border-amber-100 m-5   mt-8 sm:mx-[200px] rounded-md'>
         <h1 className=' m-6 sm:text-4xl sm:font-bold '>Skills</h1>
         <div className='flex flex-wrap sm:flex-row flex-col justify-center'>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <FaHtml5 className='m-auto w-full mt-8 h-[60%] text-red-600'/>
          <h1 className='font-bold'>HTML5</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <FaCss3Alt className='m-auto w-full mt-8 h-[60%] text-blue-800'/>
          <h1 className='font-bold'>CSS3</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <TbBrandJavascript className='m-auto w-full mt-7 h-[60%] text-yellow-300'/>
          <h1 className='font-bold mt-1'>Javascript</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <FaJava className='m-auto w-full mt-7 h-[60%] text-blue-500'/>
          <h1 className='font-bold mt-1'>Java</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <GrMysql className='m-auto w-full mt-7 h-[60%] text-blue-500'/>
          <h1 className='font-bold mt-1'>sql</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <FaBootstrap className='m-auto w-full mt-7 h-[60%] text-blue-600'/>
          <h1 className='font-bold mt-1'>Bootstrap</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <SiTailwindcss className='m-auto w-full mt-7 h-[60%] text-green-400'/>
          <h1 className='font-bold mt-1'>Tailwind CSS</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <TbBrandReact className='m-auto w-full mt-7 h-[60%] text-blue-600'/>
          <h1 className='font-bold mt-1'>React</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <SiMongodb className='m-auto w-full mt-7 h-[60%] text-green-700'/>
          <h1 className='font-bold mt-1'>Mongo DB</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <IoLogoNodejs className='m-auto w-full mt-7 h-[60%] text-green-800'/>
          <h1 className='font-bold mt-1'>Node js</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <TbBrandNextjs className='m-auto w-full mt-7 h-[60%] text-white'/>
          <h1 className='font-bold mt-1'>Next js</h1>
          </div>
          <div className='border-2 min-h-48 sm:w-40 min-w-36 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <SiSpringboot className='m-auto w-full mt-7 h-[60%] text-green-700'/>
          <h1 className='font-bold mt-1'>Spring Boot</h1>
          </div>
         </div>
        </div>
        </div>
    </div>
  )
}
