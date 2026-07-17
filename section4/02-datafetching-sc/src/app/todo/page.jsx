export default async function page() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20",
    { next: { revalidate: 5000 } },
  ); // next.js fetch = extended/patched by next.js -> extra features
  const result = await response.json();
  console.log("result", result);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-5xl">Todo List</h1>
      <div className="bg-[#1d1d1d] w-[50%] h-[70%] rounded-lg flex flex-col overflow-y-scroll todoContainer gap-3 p-3">
        {result.map((items) => {
          return (
            <div
              key={items.id}
              className="w-full p-3 rounded-lg flex items-center bg-[#29416a] justify-between"
            >
              <div className="flex gap-3 items-center">
                <p className="bg-[#40527a] w-10 h-10 flex justify-center items-center rounded-full font-bold">
                  {items.id}
                </p>
                <h2 className="text-xl font-bold capitalize">{items.title}</h2>
              </div>
              <div className="font-bold capitalize">
                {items.completed ? <h1>Completed</h1> : <h1>Pending</h1>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
