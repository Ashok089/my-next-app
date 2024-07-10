import React from 'react';
import Image from 'next/image';

function HomePage() {
  return (
<div className="container flex items-center justify-center h-screen">  

    
    <div className="container w-96 h-[full] border-2 border-gray-500 my-10 mx-20 rounded-xl ">

      <div className="">
        <h1 className="text-2xl font-semibold p-2">Create an account</h1>
        <p className="text-base px-2 -my-1">Enter your email below to create your account</p>
        <div className="flex gap-4 py-5">
          <button className="flex items-center text-black mx-11 px-3 py-1 font-semibold rounded-lg bg-white border border-gray-300  hover:border hover:border-gray-500 hover:bg-gray-50">
            <Image
              className='mx-1'
              src="/git.png" 
              alt="GitHub Logo"
              width={28}
              height={24}
            />
            Github
          </button>
          <button className="flex items-center text-black px-4 py-2 font-semibold rounded-lg bg-white border border-gray-300 hover:border hover:border-gray-500 hover:bg-gray-50">
            <Image
              className='mx-1'
              src="/google.png" 
              alt="Google Logo"
              width={20}
              height={24}
            />
            Google
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center my-2">
        <hr className="border-gray-300 w-1/4 mr-2" />
        <p className="text-center">OR CONTINUE WITH</p>
        <hr className="border-gray-300 w-1/4 ml-2" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mx-4 font-medium my-2 ">Email</label>
        <input className="border-2 border-gray-400 p-1 mx-3 rounded-md cursor-pointer " type="email" id="email" placeholder="abc@gmail.com" />

        <label htmlFor="password" className="mx-4 font-medium my-2 ">Password</label>
        <input className="border-2 border-gray-400 p-1 mx-3 rounded-md cursor-pointer" type="password" id="password" placeholder='123abc' />
      </div>

      <button className="my-6 font-semibold current-plan bg-gray-200 text-black px-24 mx-8 py-2 rounded-lg hover:bg-gray-300">Create account</button>
    </div>
    </div>
  );
}

export default HomePage;
