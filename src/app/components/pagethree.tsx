import React from "react";
import Rfp from "./rightfp";
import Link from "next/link";
import MyAnimation from "./Fanm";

  
function PageThree (){
    return (
        <>
      <div className='flex justify-center nicha gap-28 pb-11 '>
      <Rfp />
  
  
  
  
      <div className='flex flex-col justify-between items-center ji w-[450px] h-[505px]  py-[30px] px-[26px] bc-p black-box'>
        <h2>Votre demande a bien été envoyée</h2>

        <MyAnimation />

        <p className="text-center">Nous reviendrons vers vous très<br /> prochainement, consultez vos messages.</p>

        <button className="w-full py-[8px] bc-p">
        <Link href="/">
          Revenir à l&apos;accueil
        </Link>
          </button>
        
      </div>
      </div>
      </>
    );
  };
  
  export default PageThree;
  