import React, { Suspense } from "react";
import TodoList from "../../components/TodoList";
import Posts from "../../components/Posts";

export default function page() {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="mt-10">
        <h1 className="font-bold text-5xl">Todo List and Posts</h1>
      </div>
      <div className="w-[80%] flex flex-col items-center justify-center min-h-screen gap-20">
        <Suspense
          fallback={<h1 className="animate-pulse">Loading Todo Data...</h1>}
        >
          <TodoList />
        </Suspense>
        <Suspense
          fallback={<h1 className="animate-pulse">Loading Posts Data...</h1>}
        >
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
