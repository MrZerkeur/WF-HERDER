import Image from "next/image";

export default function Rfp(){
    return(
        <div className="flex flex-col gap-8 nik">
        <h1 className='max-w-[350px] head-rfp'>Un agent Herder prendra le temps de comprendre vos besoins. </h1>
        <Image src="/imgs/sec-img.png" width={350} height={256} alt="dashi"></Image>

        <div className="flex flex-col gap-6">
            <h1 className='max-w-[350px] text-[14px]'>Nous vous contacterons par mail ou par téléphone afin de convenir ensemble d'une date d'entretien.</h1>
            <div className='flex gap-[12px]'>
                <div className="flex gap-[8px]">
                    <Image src="/free-symbol.png" height={25} width={25} alt="free-symbol"/>
                    <p>Devis gratuit</p>
                
                </div>
                <div className="flex gap-[8px]">
                    <Image src="/24h-symbol.png" height={25} width={25} alt="24h-symbol"/>
                    <p>Réponse sous 24h</p>

                </div>
            </div>
        </div>
    </div>
    );
} 