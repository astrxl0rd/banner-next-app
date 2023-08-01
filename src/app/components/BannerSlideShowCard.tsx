import Image from "next/image";
import { useState } from "react";
import '../styles/carousel.scss'

interface bannerSlideShowItem {
  // agentName: string;
  fullPortrait: string;
  // bustPortrait: string;
  // description: string;
  // isPlayableCharacter: boolean;
}

interface bannerSlideShowProps {
  items: bannerSlideShowItem[];
}

const BannerSlideShowCard: React.FC<bannerSlideShowProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const goToSlide = (index: number, direction:string) => {
    setActiveIndex(index);
    setDirection(direction);
  };

  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    goToSlide(nextIndex, 'next');
  };

  const goToPrevSlide = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex, 'previous');
  };

  
  return (
    <>
      <div className="carousel flex w-full h-[100vh]">
        <div className="">
          {items.map((item, index) => (
            <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''} ${direction === 'next' && index === activeIndex ? 'next' : ''} ${direction === 'previous' && index === activeIndex ? 'previous' : ''}`}
          >
              {/* Your carousel item content */}
              {activeIndex == index &&


                // <img src={item.fullPortrait} />
                <div className="">

                  <img className="w-full object-fill" src={item.fullPortrait} />
                </div>


              }
            </div>
          ))}
        </div>
        <div className="carousel-controls absolute bottom-[50%] left-[4%]  flex  ">
          <button className="carousel-control-btn mr-2"  onClick={goToPrevSlide}>
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

//       <div className="grid grid-cols-2 w-full h-[100vh]">
//         <img className = "absolute -z-20 w-full h-full "src={'https://cdn.wallpapersafari.com/29/51/5mT1UG.jpg'}/>
//         <div className="p-20" >
//           <h1 className="text-4xl font-extrabold text-white mb-4" >{agentName}</h1>
//           <br></br>
//           <p className="text-xl text-white ">{description}</p>

//         </div>
//         {/* {fullPortrait && <Image src={fullPortrait} alt={""} height={600} width={600}/> } */}
//         <div className="flex justify-center relative">
//           {/* <p>ewe</p> */}
//           <img className="  w-4/5 -right-20 opacity-70" src={bustPortrait}/>
//           <img className="w-4/5  absolute z-1" src={fullPortrait} />
//         </div>

//       </div>
//     </>

//   )
// }

export default BannerSlideShowCard;
