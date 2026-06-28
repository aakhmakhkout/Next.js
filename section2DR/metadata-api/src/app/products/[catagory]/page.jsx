import React from 'react'

export async function generateMetadata ({params}) {
  const {catagory} = await params
  return {
    title: `${catagory}`
  }
}

const page = async ({params}) => {
  const {catagory} = await params
  return (
    <div className='font-bold text-7xl'>{catagory} shoes</div>
  )
}

export default page