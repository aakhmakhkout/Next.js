import Link from "next/link";

const Blogs = () => {
  console.log("Blogs Page");
  // const randomNumber = Math.random();
  // console.log(randomNumber);
  // if (randomNumber > 0.5) {
  //   throw new Error("Number is greater than 0.5");
  // }
  return (
    <>
      <div>
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Blogs;
