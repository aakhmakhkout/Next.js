"use client";

import { useEffect, useState } from "react";

export default function posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      );
      const result = await response.json();
      setPosts(result);
      console.log(result);
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 p-3">
      {posts.map((items) => {
        return (
          <div
            key={items.id}
            className="w-70 bg-[#1d1d1d] p-3 rounded-lg flex flex-col gap-3"
          >
            <p className="bg-[#303030] w-10 h-10 flex justify-center items-center rounded-full font-bold">
              {items.id}
            </p>
            <h2 className="text-xl font-bold">{items.title}</h2>
            <h3 className="text-sm">{items.body}</h3>
          </div>
        );
      })}
    </div>
  );
}
