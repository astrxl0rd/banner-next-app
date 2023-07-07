
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
    <div className="bg-red w-full p-4">
      <div className="row-start w-2/3" >
        <h1 className="text-xl text-white mb-4" >{agentName}</h1>
        <br></br>
        <p className="text-sm text-white ">{description}</p>
      </div>
      <div className="row-2 w-1/3">
        {/* {fullPortrait && <Image src={fullPortrait} alt={""} height={600} width={600}/> } */}
        <img className="absolute pl-16 h-2/3 -z-50" src={bustPortrait}/>
        <img className=" h-5/6" src={fullPortrait}/>
        
      </div>

    </div>

  )
}

export default BannerSlideshowCard