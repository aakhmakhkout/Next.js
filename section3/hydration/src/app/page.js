import Boxes from "@/components/Boxes";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex h-25 font-bold text-5xl justify-center items-center">
        <h1>Home Page</h1>
      </div>

      <div>
        <Boxes />
      </div>
    </div>
  );
}
