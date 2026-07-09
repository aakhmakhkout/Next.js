import { cookies } from "next/headers";
import Link from "next/link";

//? 1 = dynamic = "force-dynamic", 2 = searchParams (with await), 3 = cookies()

export const dynamic = "force-dynamic";
// export const dynamic = "force-static";
// export const dynamic = "error"; // error during build, make page static but don't ignore dynamic api's like cookies, searchParams etc

const Services = async ({ searchParams }) => {
  console.log("Services Page");
  // const search = await searchParams;
  // console.log(search);

  const myCookies = await cookies();
  console.log(myCookies);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link ">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list text-white">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
