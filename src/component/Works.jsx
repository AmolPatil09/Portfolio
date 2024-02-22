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
    setExperince(`${year} Yesrs ${Month} Months`)


  },[])
  return (
    <div className='flex flex-col w-full justify-center my-10'>
      
    <div className='min-h-20 w-full'>
     <div className='md:border-2 min-h-64 md:border-amber-100 m-5   mt-6 sm:mx-[200px] rounded-md'>
     <h1 className=' m-6 sm:text-4xl font-bold '>Work Experince</h1>
     <div className='flex flex-wrap sm:flex-row flex-col justify-center'>
      <div className=' min-h-32 sm:w-[80%] min-w-36 w-40   mx-auto  m-6 sm:mx-[50px] rounded-md'>

      <h1 className='font-bold mt-1'>Infosys</h1>
      <h1 className='font-bold mt-1'>System Engineer</h1>
      <h1 className='font-bold mt-1'>Dec-2022 - Present</h1>
      <h1 className='font-bold mt-1'>{experince}</h1>
      

      </div>
     
     </div>
    </div>
    </div>
</div>
  )
}
