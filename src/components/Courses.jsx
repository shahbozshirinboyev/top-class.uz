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

      </section>
    </div>
  )
}

export default Courses