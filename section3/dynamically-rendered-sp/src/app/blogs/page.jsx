import React from 'react'
import Link from "next/link"

export default function page() {
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
        <h1>Welcome to Our blogs</h1>
        <ul className="services-list">
        <li>
        <Link href="/blogs/1">Blog 1</Link>
        </li>
        <li>
        <Link href="/blogs/2">Blog 2</Link>
        </li>
        <li>
        <Link href="/blogs/3">Blog 3</Link>
        </li>
        <li>
        <Link href="/blogs/4">Blog 4</Link>
        </li>
        </ul>
      </div>
    </>
  );
};

