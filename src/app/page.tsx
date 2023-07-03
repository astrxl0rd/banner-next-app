"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation, Mousewheel} from 'swiper';
import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";


export default function Home() {
  const [listBanner, setListBanner] = useState([]);
  return (
    <section className="bg-blueGray-100">
      <div>
        
      </div>
      <div className='w-full'>
        <div className='flex justify-items-center'>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            mousewheel={true}
            autoplay={{
              delay:500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable:true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel]}
            className="mySwiper"
          >
            /* nanti isi looping buat swiperslide nya */
            <SwiperSlide>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            </SwiperSlide>
            <SwiperSlide>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            </SwiperSlide>
            <SwiperSlide>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
