import { notFound } from 'next/navigation'
import React from 'react'

const eachBlog = async ({params}) => {
    console.log(await params)
    const {blog} = await params


    if(!(/^\d+$/.test(blog))) {
      notFound();
    }

  return (
    <div className='flex justify-center items-center font-bold text-5xl'>
        <h1>Blog {blog}</h1>
    </div>
  )
}

export default eachBlog