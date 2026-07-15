import Link from "next/link";
import Likes from "../../../../components/Likes";
import Comments from "../../../../components/Comments";

export default async function page({ params }) {
  const { blogID } = await params;
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
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our blog {blogID}</h1>
        <p>This is the blog number {blogID}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error
          temporibus laudantium ea explicabo eius autem, dolores eaque doloribus
          sint.
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 flex-col">
        <Likes />
        <Comments />
      </div>
    </>
  );
}
