import React from "react";
import { resolve } from "styled-jsx/css";

export default async function Views() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>total views : 100k</div>;
}
