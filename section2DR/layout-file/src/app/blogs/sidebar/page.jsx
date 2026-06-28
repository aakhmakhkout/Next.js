import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
      <div className='flex gap-10 items-center justify-center'>
            <Link href="/blogs/1"  className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blog 1</Link>
            <Link href="/blogs/2"  className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blog 2</Link>
            <Link href="/blogs/3"  className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blog 3</Link>
            <Link href="/blogs/4"  className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blog 4</Link>
            <Link href="/blogs/5"  className='bg-gray-500 p-[8px_20px] rounded-lg border border-black/50 text-[#00ffc8] font-bold'>Blog 5</Link>
        </div>
  )
}
