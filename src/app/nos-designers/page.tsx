import Image from "next/image";

export default function nosDesigner(){

        return(
            <>
            <div className="h-full w-full bg-[red] fot-pro">

                <div className="spacin"></div>
                <div className="flex justify-center bg-[#DFDFDF] py-[8px]">
                    <p className="text-[12px] text-[#7c7c7c]">-10 % sur toutes les commandes supérieures à 500 €</p>
                </div>
                <div className="py-11 nd-lay mx-auto ">
                    <div className="ind-layout mx-auto flex flex-col gap-[52px]">
                        <div className="bg-white rounded-[35px]">

                        <div><h2 className="chapleur pt-[40px] pl-[62px] tscm">Entourez-vous d&apos;experts.<br/><span className="text-[#19967d]">Expérimentés, créatifs, polyvalents.</span></h2></div>
                        <div>
                            <Image width={900} height={400} src="/page2/entourez-vous-illustration.png" alt="entourez-vous-illustration" />
                        </div>
                        </div>
                        <div className="flex flex-col gap-[26px]">

                        <h3 className="text-[24px] font-semibold">
                            Comptez sur leur expertise.
                        </h3>
                        <div className="flex flex-col gap-[36px]">

                        <div className="flex justify-between gap-[30px] hji">
                            <div className="w-full h-[380px] mino bg-white relative rounded-[35px]">
                                <div className="pt-[28px] w-full ga flex flex-col justify-center items-center">
                                    <div className="w-[70%]">
                                    <h4 className="text-[24px] text-[#19967d] tscm">Simple, Captivant.</h4>
                                    <p className="text-[18px] tma">Une utilisation simple pour<br />des utilisateurs émerveillés.</p>
                                    </div>
                                </div>
                                <Image className="absolute piec mx-auto" src="/page2/simple-captivant-illustration.png" width={300} height={200} alt="simple-captivant-illustration"/>
                            </div>
                            <div className="w-full h-[380px] mino bg-white relative rounded-[35px]">
                                <div className="pt-[28px] w-full ga flex flex-col justify-center items-center">
                                    <div className="w-[70%]">
                                    <h4 className="text-[24px] text-[#19967d] tscm">Facile à intégrer</h4>
                                    <p className="text-[18px] tma">Des maquettes conçues<br />pour une intégration fluide <br />par les développeurs.</p>
                                    </div>
                                </div>
                                <Image className="absolute piec mx-auto" src="/page2/facile-a-integrer-illustration.png" width={300} height={200} alt="facile-a-integrer-illustration"/>
                            </div>
                        </div>

                        <div className="w-full h-fit relative bg-white rounded-[35px] flex flex-col items-center">
                            {/* text */}
                            <div><h2 className="text-center chapleur pt-[48px] tscm">Nos experts, votre solution.<br/><span className="text-[#19967d]">Plus de 40 projets menés à bien par nos designers.</span></h2></div>
                            <Image className="w-full" src="/page2/nos-experts-illustration.png" width={300} height={200} alt="nos-experts-illustration" unoptimized/>
                        </div>
                        </div>

                        </div>

                        <div className="flex flex-col gap-[26px]">
                        <h3 className="text-[24px] font-semibold">
                            À votre écoute.
                        </h3>
                        <div className="henim">
                            <div className="flex justify-between moking gap-[30px]">

                            <div className="w-full h-[400px] csm bg-white relative rounded-[35px]  testy">
                                <h3 className="kerberos pt-[28px] w-full flex flex-col justify-center items-center heyn">Des outils adaptés,<br/>Pour communiquer.</h3>
                                <Image className="absolute picsec " src="/page2/des-outils-illustration.png" width={300} height={200} alt="des-outils-illustration"/>
                            </div>
                            <div className="w-full h-[400px] bg-white csm relative rounded-[35px] testy"> 
                                    <h3 className="kerberos pt-[28px] w-full flex flex-col justify-center items-center">Comprenons vos<br/> attentes.</h3>
                                  <Image className="absolute picsec" src="/page2/communiquons-illustration.png" width={300} height={200} alt="communiquons-illustration"/>
                            </div>
                            <div className="w-full h-[400px] bg-white csm relative rounded-[35px] test"> 
                                  <div className="z-[1] relative pt-[28px] w-full ga flex flex-col justify-center items-center">
                                  <h3 className="kerberos">Prêt à décoller ?</h3>
                                  <button className="rounded-full hmm text-[#ababab] text-[12px] px-[24px] py-[8px]">Prendre RDV</button>
                                  </div>
                                  <Image className="absolute picsec imag " src="/page2/pret-a-decoller-illustration.png" width={300} height={200} alt="pret-a-decoller-illustration"/>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>


                </div>
            </div>
            </>
        );
    
}