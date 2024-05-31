import React, { useEffect, useState } from 'react'

export default function Works() {
  const [experince,setExperince]=useState("");
  
  useEffect(()=>{
    let dateOfJoining=new Date('2023-12-19');
    let toodayDate=new Date();
    // console.log(dateOfJoining,toodayDate);
    let dateDiff=Math.abs(toodayDate-dateOfJoining);
    
    let diffInMiliSecond=Math.ceil(dateDiff/(1000*60*60*24));
  
    let year=Math.floor((diffInMiliSecond+365)/365);
    let Month=Math.floor((diffInMiliSecond%365/30));
    setExperince(`${year} Year ${Month} Months`)


  },[])
  return (
    <div className='flex flex-col w-full justify-center my-10'>
      
    <div className='min-h-20 w-full'>
     <div className='md:border-2 min-h-64 md:border-amber-100 m-5   mt-6 sm:mx-[200px] rounded-md'>
     <h1 className=' m-6 sm:text-4xl font-bold '>Work Experince<span className='font-bold sm:text-4xl'>({experince})</span> </h1>
     <div className='flex flex-wrap sm:flex-row flex-col justify-center'>
      <div className=' min-h-32 sm:w-[100%] min-w-36 w-50   mx-auto  m-6 sm:mx-[50px] rounded-md'>

      <div className='flex flex-row'>
      <h1 className='font-bold mt-1'>Infosys System Engineer ( Dec-2022 - Present ) </h1>
      
      <br/>

      
      </div>
      <p className='text-sm sm:text-xl font-thin sm:my-2 sm:p-5 p-1 text-justify text-pretty'>
        <p>
     <p> <span className='font-bold mt-1'>Frontend Developer</span> (React Native) Application Development for 
Student Learning Platform</p><p>
➢ Developed and implemented robust frontend solutions using
React Native, ensuring high performance and
responsiveness of native mobile applications.</p><p>
➢ Utilized React Native's component-based architecture to
create reusable UI elements, enhancing development
efficiency and maintainability.</p><p>
➢ Integrated with backend services and APIs to fetch and update
data, ensuring smooth communication between frontend and
backend systems.</p><p>
➢ Tested applications on various devices and screen sizes to
ensure a consistent and seamless</p>
➢ user experience across different platforms and form factors. 
Implemented industry best practices in code quality,
performance optimization, and user experience design,
resulting in highly-rated and feature-rich applications.</p><p>
➢ Implemented state management solutions such as Redux or
Context API to manage application state and data flow,
ensuring a predictable and maintainable codebase</p>
</p>
            

<p className='text-sm sm:text-xl font-thin sm:my-2 sm:p-4 p-1 text-justify text-pretty'>
        <p>
     <p> <span className='font-bold mt-1'>MERN Stack Developer </span>  (React + Express.js + MongoDB) Web Application for 
Property selling</p><p>
➢ Designed and developed the user interface (UI) using HTML, CSS, 
and Bootstrap, ensuring a responsive and visually appealing
layout across different devices.</p><p>
➢  Implemented dynamic UI components and interactions using React, 
facilitating a smooth and intuitive user experience.</p><p>
➢  Integrated authentication mechanisms to enable secure
login for authorized users, employing industry best
practices for user authentication and session
management.</p><p>
➢  Developed RESTful APIs using Express.js to handle client requests
and perform CRUD operations on property data stored in
MongoDB. Utilized MongoDB as the database management
system to store property listings, user profiles, booking information, 
and other relevant data</p>
</p>
</p>
            


      </div>
     
     </div>
    </div>
    </div>
</div>
  )
}
