"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper';
import "swiper/swiper.min.css";
import axios from 'axios';
import { list } from 'postcss';
import BannerSlideshowCard from './components/BannerSlideShowCard';
// import fetchAgent from "./services/banner.services";
// import { bannerAgent } from './models/banner';
// import "swiper/modules/pagination/pagination.min.css";


export default function Home() {

  const [listAgent, setListAgent] = useState<any[]>([]);

  const getApi = async () => {
    let fetchData: any = await axios.get("https://valorant-api.com/v1/agents");
    fetchData = fetchData.data.data;
    setListAgent(fetchData);
    console.log("ini isi api",fetchData);
    
  };
  useEffect(() => {

    getApi();
    

  }, [])
  


  return (
    <section className="bg-blueGray-100">
      <div>

      </div>
      <div className='w-full'>
        <div className='flex justify-items-center'>
          {/* {listAgent.map((item,index)=>(
          <span>
            {item}
          </span>
        ))} */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            mousewheel={true}
            effect='cube'
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel]}
            className="mySwiper"
          >
            /* nanti isi looping buat swiperslide nya */
            {listAgent.map((item, index) => (
              <SwiperSlide key={index}>
                
                {/* { item.fullPortrait && <Image src={item.fullPortrait} alt="" height={600} width={600}  /> } */}
               {item.isPlayableCharacter && <BannerSlideshowCard key={index}
               agentName={item.displayName}
               fullPortrait = {item.fullPortrait}
               bustPortrait = {item.background}
               description= {item.description}
               isPlayableCharacter={item.isPlayableCharacter}
               />}

                
              </SwiperSlide>
            ))}



          </Swiper>
        </div>
      </div>
    </section>
  )
}
