import React from 'react'

const filePath = async({params}) => {
    console.log(await params)

    const {filePath} = await params
    console.log(filePath)
  return (
    <div>
        file = /{filePath.join("/")}
    </div>
  )
}

export default filePath