/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import "../styles/carousel.scss";

interface bannerSlideShowItem {
  agentName: string;
  fullPortrait: string;
  bustPortrait: string;
  description: string;
  isPlayableCharacter: boolean;
}

interface bannerSlideShowProps {
  items: bannerSlideShowItem[];
}

const BannerSlideShowCard: React.FC<bannerSlideShowProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const goToSlide = (index: number, direction: string) => {
    setDirection(direction);
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    console.log(nextIndex, activeIndex, items.length);
    goToSlide(nextIndex, "next");
  };

  const goToPrevSlide = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex, "previous");
  };

  const assignClass = (index: number) => {
    const nextIndex = (activeIndex + 1) % items.length;
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    let dataClass = "carousel-item";
    if (index === activeIndex) dataClass += " active";
    if (index === nextIndex) {
      if (direction === "next") dataClass += " next";
      else dataClass += " next next-show";
    }
    if (index === prevIndex) {
      if (direction === "previous") dataClass += " previous";
      else dataClass += " previous previous-show";
    }
    return dataClass;
  };

  const showImage = (index: number) => {
    const nextIndex = (activeIndex + 1) % items.length;
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    if (index === activeIndex || index === nextIndex || index === prevIndex)
      return true;

    return false;
  };

  return (
    <>
      <div className="relative">
        <div className="carousel">
          {items.map((item, index) => (
            <div key={index} className={`${assignClass(index)}`}>
              {showImage(index) && (
                <div className="flex flex-row w-full h-[100vh]">
                  <img
                    className="absolute -z-20 w-full h-full object-contain"
                    loading="lazy"
                    src={item.fullPortrait}
                    alt="test"
                  />
                  <div className=" p-20">
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                      {item.agentName}
                    </h1>
                    <br></br>
                    <p className="text-xl text-white ">{item.description}</p>
                  </div>
                  <div className=" justify-center relative">
                    <img
                      className="w-4/5  absolute z-1"
                      loading="lazy"
                      src={item.fullPortrait}
                      alt="test"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-controls absolute bottom-[50%] left-[4%]  flex  ">
          <button className="carousel-control-btn mr-2" onClick={goToPrevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="carousel-controls absolute bottom-[50%] left-[94%]  flex ">
          <button className="carousel-control-btn" onClick={goToNextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default BannerSlideShowCard;
