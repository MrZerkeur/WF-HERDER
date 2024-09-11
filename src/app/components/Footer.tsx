import Image from "next/image";
export default function Footer(){

    return(
        <>
        <div className="flex items-center w-full justify-center gap-5 py-7 mt-11 border-t border-black">
        <p className="text-sm	font-bold">Rejoignez-nous sur</p>
        <div className="flex gap-3	">
                <Image src="/svg/facebook-brands-solid.svg" height={32} width={32} alt="icon"></Image>
                <Image src="/svg/instagram-brands-solid.svg" height={32} width={32} alt="icon"></Image>
                <Image src="/svg/linkedin-brands-solid.svg" height={32} width={32} alt="icon"></Image>
        </div>
      </div>
        <div className="bg-black py-10 flex justify-center">
            <div className="flex w-p+[70%] jusify-between text-white gap-20">
                <p className="text-xs">Copyright© 2024 Herder. Tous droits réservés.</p>
                <p className="text-xs">Mentions légales</p>
                <p className="text-xs">contact@agence-herder.fr</p>

            </div>
        </div>
        
        </>
    );

}