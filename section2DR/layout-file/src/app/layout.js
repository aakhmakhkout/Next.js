import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col justify-between items-center h-screen">
        <header className="font-bold text-3xl mt-10 bg-[purple] p-[5px_30px] rounded-lg">Header</header>
        {children}
        <footer className="font-bold text-3xl mb-10 bg-[purple] p-[5px_30px] rounded-lg">Footer</footer>
      </body>
    </html>
  );
}
