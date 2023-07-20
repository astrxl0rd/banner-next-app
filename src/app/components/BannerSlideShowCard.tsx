
import Image from "next/image";

interface bannerSlideShowProps {
  agentName: string;
  fullPortrait: string;
  bustPortrait: string;
  description: string;
  isPlayableCharacter: boolean;
}
const BannerSlideshowCard = ({ agentName, fullPortrait, bustPortrait, description, isPlayableCharacter }: bannerSlideShowProps) => {
  console.log(agentName)
  return (
    // <div>ini banner nantinya</div>
    <>

      <div className="grid grid-cols-2 w-full bg-red-500 h-[65vh]">
        <div className="p-20" >
          <h1 className="text-4xl font-extrabold text-white mb-4" >{agentName}</h1>
          <br></br>
          <p className="text-xl text-white ">{description}</p>

        </div>
        {/* {fullPortrait && <Image src={fullPortrait} alt={""} height={600} width={600}/> } */}
        <div className="flex justify-center relative">
          {/* <p>ewe</p> */}
          <img className="absolute -top-32 w-4/5 -right-20 opacity-70" src={bustPortrait}/>
          <img className="w-3/5 absolute z-1" src={fullPortrait} />
        </div>


      </div>
    </>

  )
}

export default BannerSlideshowCard