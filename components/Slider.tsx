"use client"
import { Swiper, SwiperSlide } from 'swiper/react';


import "beercss";
import "material-dynamic-colors";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { Pagination } from 'swiper/modules';

export default function Slider({ children, data, width, margin }: { children?: any, data?: any, width?: number | string, margin?: number | string }) {
  
  return (
    <div className="w-full h-full rounded-box mt-4">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={margin}
        grabCursor={true}
        modules={[Pagination]}
        style={{padding:0, paddingBottom:2}}
      >
        {data?.map((item: any) => (
          <>
            <SwiperSlide key={crypto.randomUUID()} style={{ width: width ?? '20em' }}>
              {item}
            </SwiperSlide>
          </>
        ))}
        {children}
      </Swiper>
    </div>
  );
}