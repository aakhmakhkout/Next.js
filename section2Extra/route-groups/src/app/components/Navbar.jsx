import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
     <div className='flex justify-between h-15 items-center'>
      <div>SHOES STORE</div>
      <div className='w-[40%] flex justify-around'>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/products">Our Products</Link>
      <Link href="/contact">Contact Us</Link>
      </div>
    </div>
)
}
