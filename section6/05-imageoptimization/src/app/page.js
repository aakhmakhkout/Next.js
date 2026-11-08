"use client";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h1>Image optimization in next.js</h1>
      <img
        className="w-100"
        src="https://brightpfp.com/wp-content/uploads/2026/07/Anime-Boy-Pfp-Black-2.webp"
        alt=""
      />
      <Image
        loading="eager"
        src="/nezuko.jpeg"
        width={500}
        height={500}
        alt="img"
        // quality={100}
        unoptimized
      />
      <Image
        loader={({ src, quality, width }) => {
          // return console.log(src, quality, width);
          return src;
        }}
        src="https://brightpfp.com/wp-content/uploads/2026/07/Anime-Boy-Pfp-Black-2.webp"
        width={500}
        height={500}
        alt="img"
        // quality={100}
        unoptimized
      />
      <Image
        src="https://images.unsplash.com/photo-1793253261549-d86da28fe7a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        width={500}
        height={500}
        alt="img"
        // quality={100}
        unoptimized
      />
    </div>
  );
}
