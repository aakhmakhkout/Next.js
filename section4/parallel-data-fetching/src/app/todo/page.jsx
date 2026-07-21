const Todos = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=5",
  //   );
  //   const todos = await response.json();

  //   const slowResponse2s = await fetch("https://procodrr.vercel.app/?sleep=2000");
  //   const data2s = await slowResponse2s.json();
  //   console.log(data2s);

  //   const slowResponse3s = await fetch("https://procodrr.vercel.app/?sleep=3000");
  //   const data3s = await slowResponse3s.json();
  //   console.log(data3s);
  async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
  }
  const [todoResponse, slowResponse1, slowResponse2] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    fetchData("https://procodrr.vercel.app/?sleep=2000"),
    fetchData("https://procodrr.vercel.app/?sleep=3000"),
  ]);
  //   const [todores, s1, s2] = await Promise.all([
  //     todoResponse.json(),
  //     slowResponse1.json(),
  //     slowResponse2.json(),
  //   ]);
  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todoResponse.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(slowResponse1)}</div>
      <div>{JSON.stringify(slowResponse2)}</div>
    </>
  );
};

export default Todos;
