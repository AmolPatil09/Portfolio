import React, { useRef } from 'react'

export default function Contact() {
   
 
  return (
    <div className='flex flex-col w-full justify-center'>

      <div className='min-h-20 w-full'>

        <div className='md:border-2 min-h-64 md:border-amber-100 m-5  justify-center mt-8 sm:mx-[200px] rounded-md'>
          <h1 className='mt-6 sm:text-4xl font-bold'>Contact</h1>
          <div className='m-5'>
            <form >
        <div className='sm:flex'>
        <div className="sm:col-span-3 sm:w-1/2 sm:mx-2">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white text-left">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3 sm:w-1/2 sm:mx-2">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white text-left">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>
        <div className='sm:flex'>
        <div className="sm:col-span-3 sm:w-1/2 sm:mx-2">
          <label htmlFor="mobileNo" className="block text-sm font-medium leading-6 text-white text-left">Contact No</label>
          <div className="mt-2">
            <input id="mobileNo" name="mobileNo" type="number"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3 sm:w-1/2 sm:mx-2">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-white text-left">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-white text-left">Remark</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          
        </div>
        <div>
         <button className='bg-blue-400 w-full h-8 rounded-md mt-4' >submit</button>
        </div>
        
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
