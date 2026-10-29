"use client";

export default function error({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong in client side component</h1>
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
