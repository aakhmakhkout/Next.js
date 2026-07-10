import React from "react";

export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 9000));

  return <div>total comments : 1k</div>;
}
