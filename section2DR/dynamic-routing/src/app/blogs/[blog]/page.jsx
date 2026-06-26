import React from 'react'

const blog = async ({params}) => {
    console.log(await params)
    const {blog} = await params
  return (
    <div>
        <h1>Blog {blog}</h1>
    </div>
  )
}

export default blog