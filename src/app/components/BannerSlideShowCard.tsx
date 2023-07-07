
import Image from "next/image";

interface bannerSlideShowProps {
  agentName: string;
  fullPortrait: string;
  bustPortrait: string;
  description: string;
  isPlayableCharacter: boolean;
}
const BannerSlideshowCard = ({ agentName, fullPortrait, bustPortrait, description,isPlayableCharacter }: bannerSlideShowProps) => {
  console.log(agentName)
  return (
    // <div>ini banner nantinya</div>
    <div className="flex  w-full h-full p-4 gap-5">
      <div className="col-start w-2/3 p-20" >
        <h1 className="text-3xl font-extrabold text-white mb-4" >{agentName}</h1>
        <br></br>
        <p className="text-xl text-white ">{description}</p>
      </div>
      <div className="col-end w-1/3">
        {/* {fullPortrait && <Image src={fullPortrait} alt={""} height={600} width={600}/> } */}
        <img className="absolute pl-16 h-full -z-10" src={bustPortrait}/>
        <img className=" w-full  " src={fullPortrait}/>
        
      </div>

    </div>

  )
}

export default BannerSlideshowCard