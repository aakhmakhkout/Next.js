import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex w-full h-200 flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-bold">Home page</h1>
      <p className="font-bold text-xl">Data Fetching in Client Components</p>

      <Link
        href="/posts"
        className="bg-purple-400 p-[8px_30px] rounded-lg text-black font-bold"
      >
        Posts
      </Link>
    </div>
  );
}
