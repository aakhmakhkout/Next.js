import React from 'react'
import Link from "next/link"

export const dynamicParams = false

export async function generateStaticParams() {
  // return [
  //   {blogID: "1"},
  //   {blogID: "2"},
  //   {blogID: "3"},
  //   {blogID: "4"},
  //   {blogID: "5"},
  // ]
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await response.json()
  return data.map(({id})=> ({blogID: String(id)}))
}

export default async function page({params}) {
    const {blogID} =  await params
    console.log("Blog ID = ", blogID)
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link ">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our blog number {blogID}</h1>
        <p>This is the blog number {blogID}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error temporibus laudantium ea explicabo eius autem, dolores eaque doloribus sint.</p>
      </div>
    </>
  );
};

