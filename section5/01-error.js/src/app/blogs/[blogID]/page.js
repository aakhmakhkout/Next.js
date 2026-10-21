const Blog = async ({ params }) => {
  const { blogID } = await params;

  if (blogID % 2 === 0) {
    throw new Error("BlogID should be odd number");
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
