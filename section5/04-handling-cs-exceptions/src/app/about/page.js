"use client";

import { useState } from "react";

const About = () => {
  const [fruits, setfruits] = useState(["apple", "banana", "grapes"]);
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>

      <button
        onClick={() => {
          setfruits(null);
        }}
      >
        click me
      </button>

      <ol>
        {fruits.map((items, idx) => {
          return <li key={idx}>{items}</li>;
        })}
      </ol>
    </div>
  );
};

export default About;
