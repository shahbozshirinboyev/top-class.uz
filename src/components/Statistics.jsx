import React from 'react'

function Statistics() {
  return (
    <div>
      <section className='container'>
        <div className='flex justify-center items-center gap-6 mt-[25px]'>
          <div className='p-10 bg-slate-50 rounded-lg relative hover:-top-1 hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <h2 className='text-center font-bold text-2xl'>8k+</h2>
            <p className='text-center font-semibold mt-1'>Active Students</p>
          </div>

          <div className='p-10 bg-slate-50 rounded-lg relative hover:-top-1 hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <h2 className='text-center font-bold text-2xl'>654</h2>
            <p className='text-center font-semibold mt-1'>Total Courses</p>
          </div>

          <div className='p-10 bg-slate-50 rounded-lg relative hover:-top-1 hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <h2 className='text-center font-bold text-2xl'>156</h2>
            <p className='text-center font-semibold mt-1'>Instructor</p>
          </div>

          <div className='p-10 bg-slate-50 rounded-lg relative hover:-top-1 hover:shadow-md cursor-pointer transition-all duration-300 w-52'>
            <h2 className='text-center font-bold text-2xl'>87%</h2>
            <p className='text-center font-semibold mt-1'>Satisfaction rate</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Statistics