import Link from 'next/link'
import React from 'react'

const blogs = () => {
  return (
    <div>
        <div className='font-bold flex justify-center items-center h-25 text-5xl'>
        <h1>Blogs</h1>
        </div>
        <div className='flex justify-evenly h-100 items-center'>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'><Link href="/blogs/1">Blog 1</Link></p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'><Link href="/blogs/2">Blog 2</Link></p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'><Link href="/blogs/3">Blog 3</Link></p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'><Link href="/blogs/4">Blog 4</Link></p>
        <p className='bg-white/10 p-3 rounded-lg border border-white/30'><Link href="blogs/5">Blog 5</Link></p>
        </div>
    </div>
  )
}
 
export default blogs