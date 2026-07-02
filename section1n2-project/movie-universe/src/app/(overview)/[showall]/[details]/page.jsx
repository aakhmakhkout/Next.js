import React from 'react'

export default async function page({params}) {
  const {details} = await params
  
  return (
    <div>movie details page</div>
  )
}
