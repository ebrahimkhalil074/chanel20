/* eslint-disable prettier/prettier */
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Image } from '@heroui/image';

const Slider = ({ slideData }:{ slideData :any}) => {
  return (
    <Swiper
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 4, spaceBetween: 40 },
      }}
      className="mySwiper"
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{ clickable: true }}
    >
      {slideData?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-4">
            <Image
              alt={slide.title}
              className="w-full h-auto object-contain max-h-[150px]"
              src={slide.image}
            />
            <h3 className="mt-4 text-lg font-semibold">{slide.title}</h3>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
