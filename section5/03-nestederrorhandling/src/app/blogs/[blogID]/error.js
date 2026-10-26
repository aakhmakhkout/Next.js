"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({ error, reset }) {
  const router = useRouter();
  return (
    <div>
      <h1>Something went wrong</h1>
      <div className="tryagainButton">
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
