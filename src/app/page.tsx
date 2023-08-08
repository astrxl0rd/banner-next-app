"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/swiper.min.css";
import axios from "axios";
import { list } from "postcss";
import BannerSlideshowCard from "./components/BannerSlideShowCard";
// import fetchAgent from "./services/banner.services";
// import { bannerAgent } from './models/banner';
// import "swiper/modules/pagination/pagination.min.css";

export default function Home() {
  const items = [
    {
      fullPortrait: "/raze.jpg",
    },
    {
      fullPortrait: "https://wallpapercave.com/wp/wp2856747.jpg",
    },

    // Add more items as needed
  ];

  const [listAgent, setListAgent] = useState<any[]>([]);

  const getApi = async () => {
    let fetchData: any = await axios.get("https://valorant-api.com/v1/agents");
    fetchData = fetchData.data.data;
    setListAgent(fetchData);
    console.log("ini isi api", fetchData);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <BannerSlideshowCard items={listAgent} />
    </div>

    
  );
}
