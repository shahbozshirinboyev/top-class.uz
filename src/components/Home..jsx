import React from 'react'

function Home() {
  return (
    <div>
      <section className='container mt-[50px]'>
        <div className='w-full h-[500px] rounded-2xl flex items-center border'>
          <div className='w-full h-full flex flex-col justify-center items-start p-10'>
            <h2 className='text-start uppercase text-lg mb-2'>Top-Class.UZ online education platform</h2>
            <h1 className='text-start font-bold text-3xl md:text-4xl xl:text-5xl'>We teach various types of professions</h1>
            <button className='btn mt-8'>Start reading...</button>
          </div>
          <img src="/img/home__3d.png" alt="Home_IMG" className='h-96 hidden md:inline-block ' />
        </div>
      </section>
    </div>
  )
}

export default Home