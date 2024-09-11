import Image from "next/image";

export default function Rfp(){
    return(
        <div className="flex flex-col gap-8">
        <h1 className='max-w-[285px] head-rfp'>Un agent Herder prendra le temps de comprendre vos besoins. </h1>
        <Image src="/imgs/sec-img.png" width={256} height={256} alt="dashi"></Image>

        <div className="flex flex-col gap-6">
            <h1 className='max-w-[285px] text-[14px]'>Nous vous contacterons par mail ou par téléphone afin de convenir ensemble d'une date d'entretien.</h1>
            <div className='flex'>
                <div>Devis gratuit</div>
                <div>Réponse sous 24h</div>
            </div>
        </div>
    </div>
    );
} 