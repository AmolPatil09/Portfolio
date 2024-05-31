import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";


export default function
    () {
        
    return (
        <div>
        <div className='h-16 w-full text-white bg-black flex justify-between text-center'>
            <div className='text-lg font-bold mx-5 my-auto sm:text-2xl'>
            <p>Portfolio</p>
            </div>
            <div>
            <ul className='hidden my-4 mx-5 sm:flex' >
                <li className='mx-3 text-lg px-3 hover:border-y-4 border-indigo-500  rounded-md'><Link to='/Portfolio/'>Home</Link></li>
                <li className='mx-3 text-lg px-3 hover:border-y-4 border-indigo-500  rounded-md'><Link to='/Portfolio/about'>About</Link></li>
                <li className='mx-3 text-lg px-3 hover:border-y-4 border-indigo-500  rounded-md'><Link to='/Portfolio/work'>Work</Link></li>
                <li className='mx-3 text-lg px-3 hover:border-y-4 border-indigo-500  rounded-md'><Link to='/Portfolio/skill'>Skills</Link></li>
                <li className='mx-3 text-lg px-3 hover:border-y-4 border-indigo-500  rounded-md'><Link to='/Portfolio/contact'>Contact</Link></li>
            </ul>
            </div>
            
            
           
            

        </div>
        {
          <ul className='sm:hidden flex fixed bottom-0  h-12 bg-black w-screen justify-center text-black' >
          <li className='m-auto text-base '><Link to='/Portfolio/'><FaHome className='text-white w-6 h-8 '/></Link></li>
          <li className='m-auto text-base  '><Link to='/Portfolio/about'><FcAbout className='text-white w-6 h-8'/></Link></li>
          <li className='m-auto text-base  '><Link to='/Portfolio/work'><MdOutlineWorkHistory className='text-white w-6 h-8'/></Link></li>
          <li className='m-auto text-base  '><Link to='/Portfolio/skill'><GiSkills className='text-white w-6 h-8'/></Link></li>
          <li className='m-auto text-base  '><Link to='/Portfolio/contact'><MdContacts className='text-white w-6 h-8'/></Link></li>
      </ul>
        }
        </div>
    )
}
