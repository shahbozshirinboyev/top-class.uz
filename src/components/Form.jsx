import React from 'react'

function Form() {
  return (
    <div>
      <section className='container my-[150px]'>
        <div className='w-full rounded-2xl border h-[300px] flex justify-center items-center p-10 gap-4'>

            <div className='w-full'>
            <h1 className='text-4xl font-bold'>Kasb tanlashdagi <br /> birinchi yordamni beramiz!</h1>
            <p className=''>Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz.</p>
            </div>

            <form action="" className='w-[750px] border p-6 rounded-md flex flex-col gap-4 backdrop-blur-md bg-white/30'>
              <label className='flex flex-col gap-1'>
                <span>Name</span>
                <input type="text" className='p-3 border rounded-md' placeholder='Type name' />
              </label>
              <label className='flex flex-col gap-1'>
                <span>Phone number</span>
                <input type="text" className='p-3 border rounded-md' placeholder='+998 93 123 45 67' />
              </label>
              <label className='flex flex-col gap-1'>
                <span>Telegram username</span>
                <input type="text" className='p-3 border rounded-md' placeholder='@username' />
              </label>
              <label className='flex flex-col gap-1'>
                <span>Message</span>
                <textarea type="text" className='p-3 border rounded-md' placeholder='Your message...' rows={3} />
              </label>
              <button className='btn w-[200px]'>Send</button>
            </form>

        </div>
      </section>
    </div>
  )
}

export default Form