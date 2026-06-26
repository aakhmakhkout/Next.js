import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='flex font-bold text-5xl h-25 items-center justify-center'><h1>Our Products</h1></div>
      <div className='flex justify-evenly h-[70vh] items-center font-bold text-xl'>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/menshoes">Men shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/womenshoes">Women shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/kidsshoes">Kids shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/designershoes">Designer shoes</Link>
        </p>
      </div>
    </div>
  )
}

export default page