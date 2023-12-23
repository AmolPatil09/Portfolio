import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

export default function
    () {
        const [mobileMenu,setMobileMenu]=useState(false);
    return (
        <div>
        <div className='h-16 w-full text-white bg-black flex justify-between text-center'>
            <div className='text-lg font-bold mx-5 my-auto sm:text-2xl'>
            <p>Portfolio</p>
            </div>
            <div>
            <ul className='hidden my-4 mx-5 sm:flex' >
                <li className='mx-3 text-lg px-3 hover:bg-yellow-400 rounded-md'><Link to='/home'>Home</Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-yellow-400 rounded-md'><Link to='/about'>About</Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-yellow-400 rounded-md'><Link to='/work'>Work</Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-yellow-400 rounded-md'><Link to='/skill'>Skills</Link></li>
                <li className='mx-3 text-lg px-3 hover:bg-yellow-400 rounded-md'><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
            {
                mobileMenu?<RxCross2 className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(false)}}/>:<IoMenu className='my-3  mx-5 h-10 w-10 min-w-6 sm:hidden' onClick={()=>{setMobileMenu(true)}}/>
            }
            
           
            

        </div>
        {
          mobileMenu&&   <ul className='sm:hidden absolute h-auto bg-white w-screen  text-black' >
          <li className='mx-3 text-lg  hover:bg-yellow-400 rounded-md '><Link to='/home'>Home</Link></li>
          <li className='mx-3 text-lg  hover:bg-yellow-400 rounded-md block'><Link to='/about'>About</Link></li>
          <li className='mx-3 text-lg  hover:bg-yellow-400 rounded-md block'><Link to='/work'>Work</Link></li>
          <li className='mx-3 text-lg  hover:bg-yellow-400 rounded-md block'><Link to='/skill'>Skills</Link></li>
          <li className='mx-3 text-lg  hover:bg-yellow-400 rounded-md block'><Link to='/contact'>Contact</Link></li>
      </ul>
        }
        </div>
    )
}
