'use client'
/* eslint-disable prettier/prettier */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination ,Autoplay} from "swiper/modules";
import { Image } from "@heroui/image";

export default function Slider2() {
  return (
    <>
      <Swiper
        className="mySwiper"
        effect={"fade"}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
      >
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
