

export default async function page({params}) {
  const {showall} = await params
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='border border-white/10 w-[50%] h-[50%] flex justify-center items-center bg-black/10 backdrop-blur-md shadow-md rounded-lg flex-col'>
        <h1 className='font-bold text-3xl'>Explore all popular movies on this page</h1>
        <p className='text-sm text-white/70'>Dynamic Route =  {showall}</p>
      </div>
    </div>
  )
}
