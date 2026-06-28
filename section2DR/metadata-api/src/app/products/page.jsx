import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Products",
  description: "Explore our products, men's, women's, kids, designer shoes etc"
}

const page = () => {
  return (
    <div className=''>
      <div className='flex font-bold text-5xl h-25 items-center justify-center'><h1>Our Products</h1></div>
      <div className='flex justify-evenly h-[70vh] items-center font-bold text-xl'>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/men">Men shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/women">Women shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/kids">Kids shoes</Link>
        </p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'>
          <Link href="/products/designer">Designer shoes</Link>
        </p>
      </div>
    </div>
  )
}

export default page