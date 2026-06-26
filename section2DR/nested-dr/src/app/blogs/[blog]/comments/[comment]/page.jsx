import React from 'react'

const page = async ({params}) => {
    const {blog} = await params
  return (
    <div>
        <h1>comment {blog}</h1>
    </div>
  )
}

export default page