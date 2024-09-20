"use client"
import Image from "next/image";
import { Canvas } from "@react-three/fiber";

import Carousel from "./components/Carousel";
// import { ModelViewer } from "./components/three";

import { useState } from "react";
import Scrovi from "./components/vidScroll";
import ScrollFirst from "./components/ScrollFirst";
import MobileCarousel from "./components/Carou";

// import { Carousel } from "react-responsive-carousel";




function secondL(){
  return (
    <div>
      <h1 className="big-text-mine"></h1>
      <p className="paragraph-of-big-txt"></p>
    </div>
  );
}

// gap 16 px padding 12px 

export default function Home() {
  const [backi,setbacki] = useState("/showcasebg/1.background.png");
  const DITI = [
    {image: '/show/1.png'},
    {image: '/show/2.png'},
    {image: '/show/3.png'},
    {image: '/show/4.png'}
  ]
  const DATA = [
    {image: '/showcase/1.png'},
    {image: '/showcase/2.png'},
    {image: '/showcase/3.png'},
    {image: '/showcase/4.png'}
  ]
  // const ref1 = useRef();
  // const ref2 = useRef();
  // const ref3 = useRef();
  // const ref4 = useRef();
  return (
    <>
    <div className="dark-background">
    <div className="margini">
    
    </div>
    <div className="first-lat ">
      <div className="reg-first-layer desktop-v">

      <div className=" flex items-center w-full h-full">
        <div className="flex flex-col text-white px-[10%] w-full gap-6 compg items-start h-full justify-center">

        <h1 className="text-4xl font-semibold h1f comph">Expert UI/UX</h1>
        <p className="text-2xl	font-extralight pf compp"> Créateur de visuel d&apos;interface<br /> et d&apos;expérience utilisateur <br />pour site web et application.</p>
        <button className="bg-[#06513E] px-12	 py-3 rounded-full font-medium button-mutton pointer z-[1] bf compb">Votre projet</button>
        </div>
      </div>
      </div>
      <video className="desktop-v w-full" src="/vids/v3.mp4" autoPlay muted></video>
      <video className="mobile-v w-full" src="/video-accueil.mp4" autoPlay muted></video>
    </div>
    <div className="bg-[#171519] mobile-v">
      <div className=" flex items-center w-full h-full">
        <div className="flex flex-col text-white px-[10%] w-full gap-6 compg items-start h-full justify-center items-center">

        <h1 className="text-4xl font-semibold h1f comph">Expert UI/UX</h1>
        <p className="text-2xl	font-extralight text-center pf compp"> Créateur de visuel d&apos;interface et d&apos;expérience utilisateur pour site web et application.</p>
        <button className="bg-[#06513E] px-12	 py-3 rounded-full font-medium button-mutton pointer z-[1] bf compb">Votre projet</button>
        </div>
      </div>
    </div>

    <div className="second-lat bg-black">
      <div className="itxt flex justify-center text-white py-20 ">
          {/* <div className="w-[75px] h-[75px] color-blue-500 rounded-full top-[0%] left-[0%]"></div> */}
        <div className="acttual-text text-white items-center flex flex-col gap-[8px]	">
          <h1 className="text-center text-xl font-bold selech">Votre interface mérite d&apos;être exceptionnelle.</h1>
          <p className="text-center text-m	selecp w-[416px]">Offrir une expérience utilisateur de qualité, c&apos;est valoriser votre projet , mais aussi toucher le cœur de vos utilisateurs et les fidéliser durablement.</p>
        </div>

      </div>

    </div>
    <div className="third-lat bg-black relative">
      <Image className="back-carousel absolute backroung-img" 
    width={2000} 
    height={400} 
    src={backi} 
    alt="backroung-img" 
    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div className="flex justify-center items-center z-[1]	">
        <div className="py-6 px-[10%] flex justify-between align-center pcon w-full items-center z-[1]">
          <h1 className="text-2xl text-white font-bold iop">Nos designers.</h1>
          <button className="bordering  text-white  px-9 py-3 rounded-full iob">En savoir plus</button>
        </div>

        </div>
        <div className="my-auto h-full w-full ">
          <div className="desktop">
            <Carousel data={DATA} setbacki={setbacki} />
          </div>
          <div className="ml-[40px] hem mobile">
            <MobileCarousel data={DITI} setbacki={setbacki}/>
          </div>

      </div>
      </div>
      <div className="fourth-lat px-[10%] py-[6%] flex bg-black h-[90vh] justify-around items-center change">
        <Image className="imag-var" src="/Design-var.png"  width={900} height={509.17} alt="nice"  unoptimized></Image>
        <div className="flex flex-col flery text-white pt-10 pr-10 justify-center gap-3">
          <h1 className="text-xl font-bold text-start">Sublimez vos interfaces, <br/>Sur tous les supports.</h1>
          <p className="w-[240.5px] ">Dans un monde où les utilisateurs accèdent à internet via une multitude d'appareils, la responsivité d'un site internet ou d'une application n'est plus une option, mais une nécessité.</p>
        </div>
      </div>
    

      </div>

      <div className="white-background relative">


      <div className="itxt flex justify-center text-black py-14 bg-[#F8F8F8] goat">
        <div className="acttual-text text-black flex flex-col gap-4 itcneter  goat">
        <h1 className="text-center text-4xl font-semibold muj  goat">Soyez accompagnés.</h1>
          <p className="text-center text-[#808080] text-2xl w-[650px] mujp	 goat">Laissez-vous guider par notre expertise. Herder peut<br/> rendre votre projet à la fois magnifique et facile à<br/> utiliser. Ensemble, créons des expériences que vos<br/> utilisateurs n&apos;oublieront pas.</p>
      </div>
      </div>


 <div className="model-s">

      <Scrovi titre="/0001-0240.mp4" />
 </div>

 <div className="model-v">
 {/* <ScrollFirst /> */}
 <Scrovi titre="/092.mp4" />

 </div>


      <div className="flex justify-center py-9 pb-11 lop">
          <div className="flex fleol items-center gap-7">

          <div className="flex items-center justify-center gap-4">
          <Image className="rounded-full rtpic" src="/imgs/Nathan.png" height={60} width={60} alt="buissness"></Image>
          <h3 className="font-medium rt	 text-2xl">Parlons de votre projet !</h3>
          </div>
                  
        
          <p className="text-center	text-lg w-[650px] rtj text-black/75	">Nous mettons un point d&apos;honneur sur la compréhension de votre besoin. Votre site/application doit être unique et correspondre à votre univers.</p>
        
        
          <h4 className="text-center font-medium text-xs rth">
          Prenez rendez-vous gratuitement avec Nathan et parlons de vos idées pour leur donner vie.
          </h4>
        
        <button className="bg-[#06513E] px-9 py-3 rounded-full text-white w-fit font-medium rtb">Prendre RDV</button>
          </div>
      </div>
      </div>


    </>

  );
}
