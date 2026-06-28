import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-gray-700 p-10 rounded-xl border border-white/20'>
      <div>
        <h1 className='font-bold text-7xl'>Home Page</h1>
      </div>
      <div className='flex gap-10 items-center justify-center'>
        <Link href="/blogs" className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blogs</Link>
        <Link href="/about" className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>About</Link>
        <Link href="/services" className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Services</Link>
        <Link href="/contact" className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Contact</Link>
      </div>
    </div>
  )
}
