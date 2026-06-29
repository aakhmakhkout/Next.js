import React from 'react'

const page = async ({params}) => {
    const {blog, comment} = await params
  return (
    <div>
        <h1>comment no {comment} on blog {blog}</h1>
    </div>
  )
}

export default page