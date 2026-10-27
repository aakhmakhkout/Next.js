const Blog = async ({ params }) => {
  const { blogID } = await params;

  // if (blogID % 2 === 0) {
  //   return <div>blogID should be an odd number</div>;
  // }

  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber > 0.5) {
    throw new Error("Number is greater than 0.5");
  }

  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
