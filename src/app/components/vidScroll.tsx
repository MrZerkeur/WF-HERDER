// @ts-ignore
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';


export default function Scrovi(){

    return(

        <div className=" w-full h-[300vh] relative">
            <ScrollyVideo className="w-full " src="/0001-0191.mp4" sticky={true} trackScroll={true} />
        </div> 
    
    )
}