import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import React from "react";

const App = () => {
    return (
        <>
            <Swiper 
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: '.swiper-pagination',
                }} 
               
                modules={[Pagination]} 
                className="mySwiper w-full h-full"
            >
                <SwiperSlide>
                <div>
                <div className="w-full h-full flex justify-center items-center">
                       <img 
                        className="w-full h-full -z-10  relative" 
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                    <h1 className="text-blue-300 text-3xl absolute">Привеrrrrrrrrrrrrrrrrrт</h1>
                    </div>

                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="images"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="images"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="images"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>

                <div className="swiper-pagination">

                </div>
            </Swiper>
        </>
    )
}
  
export default App 