"use client";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function Likes() {
  const [Likes, setLikes] = useState(0);
  return (
    <div className="flex justify-center items-center bg-black/80 w-80 h-30 gap-3 capitalize rounded-xl">
      <button
        className="active:scale-95 cursor-pointer"
        onClick={() => {
          console.log("button clicked");
          setLikes((prev) => prev + 1);
        }}
      >
        <ThumbsUp size={30} />
      </button>
      <h2 className="text-2xl">{Likes} likes</h2>
    </div>
  );
}
