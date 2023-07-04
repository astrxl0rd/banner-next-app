"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation, Mousewheel} from 'swiper';
import "swiper/swiper.min.css";
import fetchAgent from "./services/banner.services";
// import "swiper/modules/pagination/pagination.min.css";

export const getStaticProps =async () => {
  
}

export default function Home() {


  
    
  



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
              src="/raze.jpg"
              alt="Vercel Logo"
              className=""
              width={1200}
              height={1200}
              priority
            />
            </SwiperSlide>
            <SwiperSlide>
            <Image
              src="/raze.jpg"
              alt="Vercel Logo"
              className=""
              width={1200}
              height={1200}
              priority
            />
            </SwiperSlide>
            <SwiperSlide>
            <Image
              src="/raze.jpg"
              alt="Vercel Logo"
              className=""
              width={1200}
              height={1200}
              priority
            />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}
