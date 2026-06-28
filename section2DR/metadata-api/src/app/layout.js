import "./globals.css";

export const metadata = {
  title: {
    template : "%s | Shoes Store",
    default: "SHOES STORE"
  },
  description: "learning next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
