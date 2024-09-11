"use client"
import Image from "next/image";
import { Canvas } from "@react-three/fiber";

import Carousel from "./components/Carousel";
// import { ModelViewer } from "./components/three";

import { useState } from "react";
import Scrovi from "./components/vidScroll";

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
      <div className="reg-first-layer">

      <div className=" flex items-center w-full h-full">
        <div className="flex flex-col text-white px-[10%] w-full gap-6 items-start h-full justify-center">

        <h1 className="text-4xl font-semibold">Expert UI/UX</h1>
        <p className="text-2xl	font-extralight"> Créateur de visuel d&apos;interface<br /> et d&apos;expérience utilisateur <br />pour site web et application.</p>
        <button className="bg-[#06513E] px-12	 py-3 rounded-full font-medium button-mutton pointer z-10">Votre projet</button>
        </div>
      </div>
      </div>
      <video className="" src="/vids/v3.mp4" autoPlay muted></video>
    </div>

    <div className="second-lat bg-black">
      <div className="itxt flex justify-center text-white py-20 ">
          {/* <div className="w-[75px] h-[75px] color-blue-500 rounded-full top-[0%] left-[0%]"></div> */}
        <div className="acttual-text text-white flex flex-col gap-[8px]	">
          <h1 className="text-center text-xl font-bold">Votre interface mérite d&apos;être exceptionnelle.</h1>
          <p className="text-center text-m	">Offrir une expérience utilisateur de qualité, c&apos;est<br/> valoriser votre projet , mais aussi toucher le cœur de<br/> vos utilisateurs et les fidéliser durablement.</p>
        </div>

      </div>

    </div>
    <div className="third-lat bg-black relative">
      <Image className="back-carousel absolute" width={2000} height={400} src={backi} alt="backroung-img"></Image>
      <div className="flex justify-center items-center z-10	">
        <div className="py-6 px-[10%] flex justify-between align-center w-full items-center z-10">
          <h1 className="text-2xl text-white font-bold">Nos designers.</h1>
          <button className="bordering  text-white  px-9 py-3 rounded-full">En savoir plus</button>
        </div>

        </div>
        <div className=" h-[400px] w-full ">
          <Carousel data={DATA} setbacki={setbacki} />
          {/* <h1 className=" absolute "> carousel in progress.</h1> */}
      {/* <Carousel >
        <div className="div">1</div>
        <div className="div">2</div>
        <div className="div">3</div> 
        <div className="div">4</div>
        <div className="div">5</div>
        <div className="div">6</div>
        <div className="div">7</div>
      </Carousel> */}
      </div>
      </div>
      <div className="fourth-lat px-[10%] py-[6%] flex bg-black justify-between">
        <Image src="/imgs/variatio.png" height={850} width={850} alt="nice"  unoptimized></Image>
        <div className="flex flex-col text-white pt-10 pr-10 justify-center gap-3">
          <h1 className="text-xl font-bold text-start">Sublimez vos interfaces,<br/>Sur tous les supports.</h1>
          <p>Dans un monde où les<br/>utilisateurs accèdent à<br/>internet via une multitude<br/>d'appareils, la responsivité<br/>d'un site internet ou d'une<br/>application n'est plus une<br/>option, mais une nécessité.</p>

        </div>
      </div>
    

      </div>

      <div className="white-background">


      <div className="itxt flex justify-center text-black py-14 bg-[#F8F8F8]">
        <div className="acttual-text text-black flex flex-col gap-4 itcneter">
        <h1 className="text-center text-lg font-bold">Soyez accompagnés.</h1>
          <p className="text-center text-sm	">Laissez-vous guider par notre expertise. Herder peut<br/>rendre votre projet à la fois magnifique et facile à<br/>utiliser. Ensemble, créons des expériences que vos <br />utilisateurs n&apos;oublieront pas.</p>
      </div>
      </div>
 {/* 3d model hna */}
      {/* <div className="d-model">
      
      <ScrollyVideo src="/ki.mp4" />   

      </div> */}
{/* he gonna be */}
 {/*  */}
      {/* <Scrovi /> */}
      <div className="flex justify-center py-9 ">
          <div className="flex fleol items-center gap-7">

          <div className="flex items-center justify-center gap-4">
          <Image className="rounded-full" src="/imgs/Nathan.png" height={60} width={60} alt="buissness"></Image>
          <h3 className="font-medium	 text-2xl">Parlons de votre projet !</h3>
          </div>
                  
        
          <p className="text-center	text-lg text-black/75	">Nous mettons un point d&apos;honneur sur la compréhension de votre besoin.<br/> Votre site/application doit être unique et correspondre à votre univers.</p>
        
        
          <h4 className="text-center font-medium text-xs">
          Prenez rendez-vous gratuitement avec Nathan et parlons de vos idées pour leur donner vie.
          </h4>
        
        <button className="bg-[#06513E] px-9 py-3 rounded-full text-white w-fit font-medium">Prendre RDV</button>
          </div>
      </div>
      </div>

    </>

  );
}
