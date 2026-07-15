"use client";
import { useState } from "react";
export default function Boxes() {
  const [changedColor, setChangedColor] = useState({
    div: "bg-[red]",
    button: "bg-[orange]",
  });
  return (
    <div className="flex h-100 flex-col justify-center items-center gap-3">
      <div className={`h-30 w-30 ${changedColor.div}`}></div>
      <button
        className={`${changedColor.button} text-black p-2 rounded-md cursor-pointer font-bold active:scale-95`}
        onClick={() => {
          setChangedColor(() => {
            return {
              div: "bg-[orange]",
              button: "bg-[red]",
            };
          });
        }}
      >
        Change Color
      </button>
    </div>
  );
}
