"use client";
import { themeData } from "@/redux/features/changeTheme";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@/redux/features/changeTheme";

export default function page() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSlice.theme);
  console.log(theme);
  return (
    <div
      className="flex justify-center items-center w-full h-screen"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      {/* <h1>Changing theme</h1> */}
      <button
        className="bg-purple-500 text-black text-2xl p-2 rounded-lg font-bold"
        onClick={() => {
          dispatch(changeTheme(theme === "light" ? "dark" : "light"));
        }}
      >
        Change Theme
      </button>
    </div>
  );
}
