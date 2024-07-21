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
     <h1 className=' m-6 sm:text-4xl font-bold '>Work Experince <span className='font-bold sm:text-4xl'>({` ${experince} +`}) </span> </h1>
     <div className='flex flex-wrap sm:flex-row flex-col justify-center'>
      <div className=' min-h-32 sm:w-[100%] min-w-36 w-50   mx-auto  m-6 sm:mx-[50px] rounded-md'>

      <div className='flex flex-row'>
      <h1 className='font-bold mt-1'>Infosys System Engineer ( Dec-2022 - Present ) </h1>
      
      <br/>

      
      </div>
      <p className='text-sm sm:text-xl font-thin sm:my-2 sm:p-5 p-1 text-justify text-pretty'>
        <p>
     <p> <b>Developing Android Applications:</b>
     <p>•	Project: Student Learning Platform</p>
     <p>• Tools: Expo, React Native, Spring Boot,CSS</p>
     <p>•	Role : Frontend Developer</p>
     <p>•	Responsibilities:</p>
     <p> o	Utilize React Native components and manage state using React State, Props, and Hooks.</p>
     <p> o	Write JSX for component structure and CSS for styling components.</p>
     <p> o	Implement navigation using React Native Drawer Navigation, Stack Navigation, and Tab Navigation.</p>
     <p> o	Integrate backend services and APIs using JavaScript fetch API to perform CRUD operations.</p>
</p>
</p>
</p>






           

<p className='text-sm sm:text-xl font-thin sm:my-2 sm:p-4 p-1 text-justify text-pretty'>
<p> <b>Building Web Applications:</b>
     <p>•	Project: Property Visit Booking</p>
     <p>•	Tools: React.js, Express.js, NodeJS, MongoDB, Bootstrap</p>
     <p>•	Role : MERN Stack Developer</p>
     <p>•	Responsibilities:</p>
     <p>o	Develop dynamic UI components and interactions using React to create a smooth and intuitive user experience.</p>
     <p> o	Implement authentication mechanisms for secure login, adhering to industry best practices for user authentication and session management.</p>
     <p> o	Integrate backend services and APIs using JavaScript fetch API to perform CRUD operations.</p>
     <p> o	Create RESTful APIs using Express.js to handle client requests and perform CRUD operations on property data stored in MongoDB. </p>

</p>
</p>

            


      </div>
     
     </div>
    </div>
    </div>
</div>
  )
}
