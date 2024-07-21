import React, { useRef, useState } from 'react'

export default function Contact() {
    
  const  [contactForm,setContactForm]=useState({
    firstName:"",
    lastName:"",
    mobileNo:"",
    email:"",
    about:""

  })

  const submitData=(e)=>{
    e.preventDefault();
    console.log(contactForm);
  }
 
  return (
    <div className='flex flex-col sm:m-20 w-full sm:justify-center justify-normal'>

      <div className='min-h-20 w-full'>

        <div className='md:border-2 min-h-64 md:border-amber-100 m-5  sm:justify-center mt-8 sm:mx-[200px] rounded-md'>
          <h1 className='mt-6 sm:text-4xl font-bold w-auto'>Contact</h1>
          <div className='m-5'>
           <h1 className='sm:text-xl'>Mobile No.: 9764500813</h1>
           <h1 className='sm:text-xl'>Gmail : amol17092000@gmail.com</h1>
           <h1 className='sm:text-xl'>Lindin : <a href='https://www.linkedin.com/in/amol-patil-5535a7203/'>https://www.linkedin.com/in/amol-patil-5535a7203/</a></h1>
           <h1 className='sm:text-xl'>GitHub : <a href='https://github.com/AmolPatil09'>https://github.com/AmolPatil09</a></h1>



          </div>
        </div>
      </div>
    </div>
  )
}
