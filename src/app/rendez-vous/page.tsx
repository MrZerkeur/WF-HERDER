"use client"
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Image from 'next/image';
import PageOne from '../components/pageone';
import PageTwo from '../components/pagetwo';
import PageThree from '../components/pagethree';



export default function rendezVous(){

    const form = useRef<HTMLFormElement | null>(null);


    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      lastname: '',
      telephone: '',
      codepromo: '',
      email: '',
      message: ''
    });



    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handleBack = () => {
      setStep(step - 1);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSend = () => {
      
      const serviceID = 'service_j8wuscp';
      const templateID = 'template_6lps7es';
      const userID = 'tKO7GQoDfj0j24_kd';

      setStep(4);
  
      // emailjs.send(serviceID, templateID, formData, userID)
      //   .then((response) => {
      //     console.log('SUCCESS!', response.status, response.text);

      //     setFormData({
      //       name: '',
      //       lastname: '',
      //       telephone: '',
      //       codepromo: '',
      //       email: '',
      //       message: '',
      //     });
      //     setStep(4);
      //   })
      //   .catch((err) => {
      //     console.error('FAILED...', err);
      //     alert('Failed to send message. Please try again.');
      //   });
    }
    



    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
  
    const handleMouseOver1 = () => {
      videoRef1.current?.play();
      setIsPlaying1(true);
    };
  
    const handleMouseLeave1 = () => {
      videoRef1.current?.pause();
      setIsPlaying1(false);
    };
  
    const handleMouseOver2 = () =>  {
      videoRef2.current?.play();
      setIsPlaying2(true);
    };
  
    const handleMouseLeave2 = () => {
      videoRef2.current?.pause();
      setIsPlaying2(false);
    };
  

    return(
        <>
        <div className='not-pro'>

            <div className="spacin"></div>
            <div className="flex justify-center items-center gap-6 flex-col controling-p py-7 ">
                <div className="flex gap-6 ehm-layer	">
                <div className={`w-[167px] ehm h-[3px] rounded-full ${step == 1 ? 'bg-[#19967D]' : 'bg-black'}`}></div>
                <div className={`w-[167px] ehm h-[3px] rounded-full ${step == 2 ? 'bg-[#19967D]' : 'bg-black'}`}></div>
                <div className={`w-[167px] ehm h-[3px] rounded-full ${step == 3 || step == 4 ? 'bg-[#19967D]' : 'bg-black'}`}></div>
                </div>
                        
                {(step === 1 && <div>
                            <div>
                                <h1 className="text-lg text-semibold">
                                Choisissez votre prestation.
                                </h1>
                            </div>
                            <div className="flex gap-8 glass">
                                <div className="bg-[#F8F8F8] w-[277px] rounded-3xl py-4 flex flex-col gap-4 ">
                                    <div className="flex justify-center w-full" onMouseOver={handleMouseOver1} onMouseLeave={handleMouseLeave1}>
                                    <video src="/vids/onLap.mp4" ref={videoRef1} width={223}></video>
                                    </div>
                                    <div className="pl-[10%]">
                                        <h3>Site web</h3>
                                        <div className="text-xs leading-5">
                                            <p className="text-[#707070]">Design attractif <br />Expérience utilisateur intuitive <br />Facile à intégrer <br />Adapté à tous les supports </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="button-mutton text-white bg-[#06513E] text-xs py-3 px-8 rounded-full" onClick={handleNext}>Sélectionner</button>
                                    </div>

                                </div>

                                <div className="bg-[#F8F8F8] w-[277px] rounded-3xl flex flex-col py-4 gap-4">
                                    <div className="flex justify-center w-full" onMouseOver={handleMouseOver2} onMouseLeave={handleMouseLeave2}>
                                    <video src="/vids/onMob.mp4" ref={videoRef2} width={83}></video>
                                    </div>
                                    <div className="pl-[10%]">
                                        <h3>Application</h3>
                                        <div className="text-xs leading-5">
                                            <p className="text-[#707070]">Design attractif <br />Expérience utilisateur intuitive <br />Facile à intégrer <br />Adapté à tous les supports </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="button-mutton text-white bg-[#06513E] text-xs py-3 px-8 rounded-full" onClick={handleNext}>Sélectionner</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                    </div>
                    <div>
                    {step === 2 && (
                      <PageOne
                      formData={formData}
                        handleChange={handleChange}
                        handleNext={handleNext}
                      />
                    )}
                    {step === 3 && (
                      <PageTwo
                        formData={formData}
                        handleChange={handleChange}
                        handleBack={handleBack}
                        handleSend={handleSend}
                      />
                    )}
                    {step === 4 && (
                      <PageThree/>
                    )}
                  </div>







                    {/* <div>
                        <div>
                            <h1>Un agent Herder prendra le temps de comprendre vos besoins. </h1>
                            <Image src="/imgs-sec-img.png" width={256} height={256} alt="dashi"></Image>
                            
                            <div>
                            <h1>Nous vous contacterons par mail ou par téléphone afin de convenir ensemble d'une date d'entretien.</h1>
                            <div>
                            <div>Devis gratuit</div>
                                    <div>Réponse sous 24h</div>
                                </div>
                                </div>
                        </div>
                        <div>

                        </div>


                    </div> */}
          </div>
        </>
    );

}