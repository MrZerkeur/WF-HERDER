// @ts-ignore
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';


interface ScroviProps {
    titre: string;
}
  

export default function Scrovi({ titre }: ScroviProps){

    return(

        <div className=" w-full h-[400vh] relative">
            <ScrollyVideo className="w-full " src={titre} sticky={true} trackScroll={true} />
        </div> 
    
    )
}