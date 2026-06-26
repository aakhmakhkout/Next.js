import React from 'react'

const page = async ({params}) => {
    const {blog} = await params
  return (
    <div>
        <h1>All comments releated to blog {blog}</h1>
    </div>
  )
}

export default page