import Header from "@/components/Header";
import { Suspense } from "react";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber > 0.5) {
    throw new Error("Number is greater than 0.5");
  }
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Suspense fallback={<div className="h-20" />}>
            <Header />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
