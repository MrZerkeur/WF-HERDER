// @ts-ignore
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';

export default function Scrovi(){

    return(

        <div className=" w-full h-[200vh] relative">
      
        <ScrollyVideo src="/ki.mp4" sticky={true} trackscroll={true} />   
  
        </div> 
    
    )
}