import Image from "next/image";
import { useState } from "react";
import '../styles/carousel.scss'

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
  const [direction, setDirection] = useState('');
  

  const goToSlide = (index: number, direction: string) => {
    setDirection(direction);
    setTimeout(() => {
      setActiveIndex(index);
    }, 300); // Wait for the transition to complete before updating the active slide
  };

  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    goToSlide(nextIndex, 'next');
  };

  const goToPrevSlide = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex, 'previous');
  };

  console.log(activeIndex);
  return (
    <>
      <div className="relative">
        <div className="carousel">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''} ${direction === 'next' && index === activeIndex ? 'next' : ''} ${direction === 'previous' && index === activeIndex ? 'previous' : ''}`}
            >
              {/* Your carousel item content */}
              {index == activeIndex &&

                
                <div className="flex flex-row w-full h-[100vh]">
                  <img className="absolute -z-20 w-full h-full " src={'https://cdn.wallpapersafari.com/29/51/5mT1UG.jpg'} />
                  <div className=" p-20" >
                    <h1 className="text-4xl font-extrabold text-white mb-4" >{item.agentName}</h1>
                    <br></br>
                    <p className="text-xl text-white ">{item.description}</p>

                  </div>
                  {/* {{ item.fullPortrait && <Image src={item.fullPortrait} alt={""} height={600} width={600} />} } */}
                  <div className=" justify-center relative">

                    {/* <img className="  w-4/5 -right-20 opacity-70" src={item.bustPortrait} /> */}
                    <img className="w-4/5  absolute z-1" src={item.fullPortrait} />
                  </div>

                </div>


              }
            </div>
          ))}
        </div>
        <div className="carousel-controls absolute bottom-[50%] left-[4%]  flex  ">
          <button className="carousel-control-btn mr-2" onClick={goToPrevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

        </div>
        <div className="carousel-controls absolute bottom-[50%] left-[94%]  flex ">

          <button className="carousel-control-btn" onClick={goToNextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
// const BannerSlideshowCard = ({ agentName, fullPortrait, bustPortrait, description, isPlayableCharacter }: bannerSlideS) => {
//   console.log(agentName)
//   return (
//     // <div>ini banner nantinya</div>
//     <>

//     </>

//   )
// }

export default BannerSlideShowCard;
