import React from 'react'

export default async function blog({params}) {
    const {blog} = await params
  return (
    <div>
       <h1 className='font-bold text-5xl'> blog {blog}</h1>
    </div>
  )
}
