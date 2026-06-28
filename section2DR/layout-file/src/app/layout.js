import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col justify-between items-center h-screen">
        <header className="font-bold text-3xl pt-10">Header</header>
        {children}
        <footer className="font-bold text-3xl pb-10">Footer</footer>
      </body>
    </html>
  );
}
