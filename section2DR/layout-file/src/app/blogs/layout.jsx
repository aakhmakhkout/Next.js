import React from 'react'
import Sidebar from './sidebar/page.jsx'

export default function layout({children}) {
  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-gray-700 p-10 rounded-xl border border-white/20'>
      <h1 className='font-bold text-7xl'>Blogs Page</h1>
        <Sidebar />
        {children}
    </div>
  )
}
