import Link from 'next/link'
import React from 'react'

const Home =() => {
  return (
    <div>
    <div className='flex justify-between h-15 items-center'>
      <div>SHOES STORE</div>
      <div className='w-[40%] flex justify-around'>
      <Link href="/blogs">Blogs</Link>
      <Link href="/products">Our Products</Link>
      <Link href="/contact">Contact Us</Link>
      </div>
    </div>

    <div className='flex justify-center h-[80vh] items-center'>
      <h1 className='font-bold text-7xl'>Home Page</h1>
    </div>
    </div>
  )
}

export default Home