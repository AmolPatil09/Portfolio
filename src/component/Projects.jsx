import React from 'react'
import img from '../assets/eshop.jpeg'
import hospital from '../assets/img1.jpeg'

export default function Projects() {
  return (
    <div>
      <h1 className='mt-5 text-2xl'>Projects</h1>
    <div className='sm:flex '>
     
     <div className='flex flex-wrap  justify-center m-auto'>
          <div className='border-2 min-h-48 sm:w-96 min-w-56 w-56 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
          <h1 className='font-bold my-2'>eshop</h1>
          <img src={img} className=' m-[5%] h-80 w-[90%]' />
          <div className='flex justify-center'>
          <h1 className='font-bold m-5'><a href='https://eshop1234.netlify.app/' target='_blank'>Live</a></h1>
          <h1 className='font-bold m-5'><a href='https://github.com/AmolPatil09/eShop' target='_blank'>Code</a></h1>
          </div>
          </div>
          <div className='flex flex-wrap sm:flex-row flex-col justify-center m-auto'>
           <div className='border-2 min-h-48 sm:w-96 min-w-56 w-40 border-amber-100  mx-auto  m-6 sm:mx-[50px] rounded-md'>
           <h1 className='font-bold my-2'>CareHealth</h1>
           <img src={hospital} className=' m-[5%] h-80 w-[90%]' />
           <div className='flex justify-center'>
           <h1 className='font-bold m-5'><a href='https://playful-haupia-2c1fea.netlify.app/' target='_blank'>Live</a></h1>
           <h1 className='font-bold m-5'><a href='https://github.com/AmolPatil09/helth-care-next.js' target='_blank'>Code</a></h1>
           </div>
           </div>
      </div>
     </div>

    </div>
      <div>
    
 
     </div>
     </div>
  )
}
