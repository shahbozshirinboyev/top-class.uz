import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Mousewheel } from "swiper/modules";

function Courses() {
  const [menus, setMenus] = useState([
    { id: 0, name: "All"},
    { id: 1, name: "Art"},
    { id: 2, name: "Design"},
    { id: 3, name: "FrontEnd"},
    { id: 4, name: "Backend"},
    { id: 5, name: "Data Science"},
    { id: 6, name: "AI System"},
    { id: 7, name: "Web Development"},
    { id: 8, name: "Mobile Development"},
    { id: 9, name: "Data Science"},
  ]);
  return (
    <div>
      <section className='mt-[50px] container'>
        <h1 className='font-bold text-xl text-center'>Courses</h1>

        <>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode, Mousewheel]}
          mousewheel={true}
          className=" border flex max-w-fit [&_.swiper-wrapper]:px-4 [&_.swiper-wrapper]:py-2 [&_.swiper-wrapper]:gap-2 rounded-lg mt-[15px]"
        >
        {menus.map((gallery) => (
            <SwiperSlide key={gallery.id} className="!m-0 max-w-fit">
              <button
                className={`border-0 btn btn-sm`}
              >
                {gallery.name}
              </button>
            </SwiperSlide>
          ))}
          </Swiper>
      </>

      <div className="flex justify-center items-center gap-4 mt-[30px]">

        <div className="border rounded-md">
          <img src="/img/course__1.jpeg" alt="" className="rounded-t-md" />
          <div className="p-4">
            <p className="font-mono">bg Determined-Poitras</p>
            <h2 className="text-xl font-bold mt-1">LMS Website With LearnPress</h2>
            <div className="flex justify-start items-center gap-4 my-3">
              <div className="flex gap-1">
              <i className="bi bi-clock-fill"></i>
                <span>2 Weeks</span>
              </div>
              <div className="flex gap-1">
              <i className="bi bi-people-fill"></i>
                <span>123 Students</span>
              </div>
            </div>
            <hr />
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="line-through">$29.5</span>
                <span className="text-green-500 font-semibold">Free</span>
              </div>
              <button className="btn btn-sm">View More</button>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <img src="/img/course__3.jpeg" alt="" className="rounded-t-md"  />
          <div className="p-4">
            <p className="font-mono">bg Determined-Poitras</p>
            <h2 className="text-xl font-bold mt-1">LMS Website With LearnPress</h2>
            <div className="flex justify-start items-center gap-4 my-3">
              <div className="flex gap-1">
              <i className="bi bi-clock-fill"></i>
                <span>2 Weeks</span>
              </div>
              <div className="flex gap-1">
              <i className="bi bi-people-fill"></i>
                <span>123 Students</span>
              </div>
            </div>
            <hr />
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="line-through">$29.5</span>
                <span className="text-green-500 font-semibold">Free</span>
              </div>
              <button className="btn btn-sm">View More</button>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <img src="/img/course__2.jpeg" alt="" className="rounded-t-md"  />
          <div className="p-4">
            <p className="font-mono">bg Determined-Poitras</p>
            <h2 className="text-xl font-bold mt-1">LMS Website With LearnPress</h2>
            <div className="flex justify-start items-center gap-4 my-3">
              <div className="flex gap-1">
              <i className="bi bi-clock-fill"></i>
                <span>2 Weeks</span>
              </div>
              <div className="flex gap-1">
              <i className="bi bi-people-fill"></i>
                <span>123 Students</span>
              </div>
            </div>
            <hr />
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="line-through">$29.5</span>
                <span className="text-green-500 font-semibold">Free</span>
              </div>
              <button className="btn btn-sm">View More</button>
            </div>
          </div>
        </div>

      </div>

    <div className="flex justify-center items-center">
    <button className="btn mt-[25px] mx-auto">View All Courses</button>
    </div>


      </section>
    </div>
  )
}

export default Courses