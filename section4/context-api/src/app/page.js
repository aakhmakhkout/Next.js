"use client";
import { getTheme, ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

export default function page() {
  const { theme, settheme } = getTheme();
  console.log(theme);
  const bg_color = theme === "light" ? "white" : "black";
  const content_color = theme === "light" ? "black" : "white";
  return (
    <div
      className="w-full h-screen justify-center items-center "
      style={{ backgroundColor: bg_color }}
    >
      <div
        className=" w-full h-full flex flex-col gap-5 text-5xl "
        style={{ color: content_color }}
      >
        Changing Theme
        <button
          className="text-xl border-2 border-black/20 rounded-lg p-2 bg-black/30"
          onClick={() => {
            settheme(theme === "light" ? "dark" : "light");
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
