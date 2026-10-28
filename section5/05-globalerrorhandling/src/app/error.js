"use client";

export default function error({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong in home page</h1>
      <div className="tryagainButton">
        <button
          onClick={() => {
            reset();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
