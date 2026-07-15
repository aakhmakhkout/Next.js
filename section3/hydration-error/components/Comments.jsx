"use client";

export default function Comments() {
  if (typeof window === "undefined") {
    return (
      <div className="flex justify-center items-center bg-[orange] w-80 h-30 gap-3 capitalize rounded-xl">
        total comments : 50k
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center bg-black/80 w-80 h-30 gap-3 capitalize rounded-xl">
      total comments : 1k
    </div>
  );
}
