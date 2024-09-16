import Image from "next/image";

export default function ScrollFirst(){

    return (<>
        <div className="he w-full">
            <div className="flex gap-[16px] w-fit mar ">
                <div className="card-s fsc">
                    <p>Solution. Trouvons ensemble une solution adaptée à votre besoin et à votre univers.</p>
                    <Image src="/sr/solution-illustration.png" className="absolute cimg-pro1" width={302} height={240} alt="solution-illustration"/>
                </div>
                <div className="card-s">
                    <p>Flowchart. Représentation schématique de la structure, montrant les différentes pages et leur hiérarchie.</p>
                    <Image src="/sr/flowchart-illustration.png" className="absolute cimg-pro2" width={270} height={210} alt="flowchart-illustration"/>
                </div>
                <div className="card-s msn">
                    <p>Wireframing. Nos experts conçoivent la mise en place idéale pour votre projet.</p>
                    <Image src="/sr/Mobile-agnece-web.png" className="absolute cimg-pro3" width={302} height={240} alt="Mobile-agnece-web"/>
                </div>    

            </div>
        </div>
    </>);

}