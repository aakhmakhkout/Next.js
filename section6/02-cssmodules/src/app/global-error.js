"use client";

export default function error({ error, reset }) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>
          <h1>Something went wrong in root layout</h1>
          <div className="tryagainButton">
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
