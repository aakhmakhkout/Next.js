import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";



export const metadata = {
  title: {
    template: "%s | Movie Universe",
    default: "Movie Universe", 
  },
  description: "Movie Universe is a mini movie information website where users can browse movies, explore actors, discover genres, and view movie details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="min-h-full flex w-full">
        <section className="w-[8%]">
          <Sidebar />
        </section>
        <main className="w-full overflow-x-hidden">
        <header className="w-full">
          <Navbar />
        </header>

          <section className="ml-1">
          {children}
          </section>

         
        </main>
        </body>
    </html>
  );
}
