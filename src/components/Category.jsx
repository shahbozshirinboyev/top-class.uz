import React from 'react'

function Category() {
  return (
    <div>
      <section className='container mt-[50px]'>
        <h1 className='font-bold text-xl'>Category</h1>

        <div className='flex justify-center items-center gap-6 mt-[15px]'>
          <div className='p-8 border rounded-lg relative hover:-top-1 flex flex-col hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <i className="bi bi-palette text-center text-3xl mb-2"></i>
            <h2 className='text-center font-bold text-md'>Art & Design</h2>
            <p className='text-center font-semibold mt-1'>128 Courses</p>
          </div>

          <div className='p-10 border rounded-lg relative hover:-top-1 flex flex-col hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <i className="bi bi-code-slash text-center text-3xl mb-2"></i>
            <h2 className='text-center font-bold text-md'>Development</h2>
            <p className='text-center font-semibold mt-1'>78 Courses</p>
          </div>

          <div className='p-10 border rounded-lg relative hover:-top-1 flex flex-col hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <i className="bi bi-people text-center text-3xl mb-2"></i>
            <h2 className='text-center font-bold text-md'>Communication</h2>
            <p className='text-center font-semibold mt-1'>23 Courses</p>
          </div>

          <div className='p-10 border rounded-lg relative hover:-top-1 flex flex-col hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <i className="bi bi-camera-reels text-center text-3xl mb-2"></i>
            <h2 className='text-center font-bold text-md'>Videography</h2>
            <p className='text-center font-semibold mt-1'>38 Courses</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Category