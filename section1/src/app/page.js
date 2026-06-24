"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [numberOfClicks, setnumberOfClicks] = useState(0)
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-5'>
      <h1 className='font-bold text-7xl'>Home Page</h1>
      <h1 className='bg-gray-800 w-30 h-30 flex justify-center items-center font-bold text-5xl rounded-lg'>{numberOfClicks}</h1>
      <button className='font-bold bg-purple-600 p-[8px_20px] rounded-lg active:scale-95 cursor-pointer' onClick={()=> {setnumberOfClicks(prev => prev+1)}}>Click me</button>
      <Link  href="./about">Go to about page</Link>
      <Link  href="./contact">Go to contact page</Link>
    </div>
  )
}

export default page