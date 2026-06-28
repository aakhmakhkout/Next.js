import "./globals.css";

export const metadata = {
  title: "Meta Data API",
  description: "learning next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
