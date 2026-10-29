import Header from "@/components/Header";
import { Suspense } from "react";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

export default function RootLayout({ children }) {
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
