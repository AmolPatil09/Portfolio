import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='h-20 w-ful bg-black my-8'>
    <div className='w-full flex justify-center'>
        <ul className='text-white flex'>
           <a href='https://www.instagram.com/amolpatil2777/' target="_blank"> <li className='mx-3 '><FaInstagram className='h-6 w-6 sm:h-8 sm:w-8'/></li></a>
           <a href='https://www.linkedin.com/in/amol-patil-5535a7203/' target="_blank"> <li className='mx-3'><CiLinkedin className='h-6 w-6 sm:h-8 sm:w-8'/></li></a>
           <a href='https://github.com/AmolPatil09 ' target="_blank">  <li className='mx-3'><FaGithub className='h-6 w-6 sm:h-8 sm:w-8'/></li></a>
        </ul>
    </div>
    <div className='text-white text-center my-2'>
        <p>@Copyright 2023 All Rights Reserved</p>
    </div>

    </div>
  )
}
