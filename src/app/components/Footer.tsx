import Image from "next/image";
import Link from "next/link";
export default function Footer(){

    return(
        <>
        {/* <div className="pt-11"> */}

        <div className="flex items-center w-full justify-center gap-5 py-7  border-t border-black">
        <p className="text-sm	font-bold">Rejoignez-nous sur</p>
        <div className="flex gap-3	">
        <Link href="https://www.facebook.com/profile.php?id=61562299486895&locale=fr_FR">
                <Image src="/svg/facebook-brands-solid.svg" className="onhov " height={24} width={24} alt="icon"></Image>
        </Link>
        <Link href="https://www.instagram.com/agence_herder/">
                <Image src="/svg/instagram-brands-solid.svg" className="onhov " height={24} width={24} alt="icon"></Image>
        </Link>
        <Link href="https://www.linkedin.com/company/herder-company/">
                <Image src="/svg/linkedin-brands-solid.svg" className="onhov " height={24} width={24} alt="icon"></Image>
        </Link>
        </div>
      </div>
        {/* </div> */}
        <div className="bg-black py-10 flex justify-center">
            <div className="flex w-p+[70%] jusify-between text-white gap-20 pixn">
                <p className="text-xs">Copyright© 2024 Herder. Tous droits réservés.</p>
                <Link href="/Mentions-legales">
                <p className="text-xs pointer">Mentions légales</p>
                </Link>
                <p className="text-xs">contact@agence-herder.fr</p>

            </div>
        </div>
        
        </>
    );

}