
import Image from "next/image";
import { useState } from "react";

interface bannerSlideShowItem {
  // agentName: string;
  fullPortrait: string;
  // bustPortrait: string;
  // description: string;
  // isPlayableCharacter: boolean;
}

interface bannerSlideShowProps{
  items:bannerSlideShowItem[];
}

const BannerSlideShowCard: React.FC<bannerSlideShowProps>=({items})=>{
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide =(index:number)=>{
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  console.log(activeIndex);
  return(
    <>
    <div className="relative">
      <div className="carousel overflow-hidden">
      {items.map((item, index) => (

          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            {/* Your carousel item content */}
            <img src={item.fullPortrait}  />
          </div>

        ))}
      </div>
      <div className="carousel-controls absolute bottom-0 left-0 w-full flex justify-center mt-2">
        <button
          className="carousel-control-btn mr-2"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        <button
          className="carousel-control-btn"
          onClick={goToNextSlide}
        >
          Next
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

export default BannerSlideShowCard