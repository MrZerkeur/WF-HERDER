'use client'
// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'

//

// const HorizontalScrollbar: React.FC = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState<number>(0);

//   const handleScroll = () => {
//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//       const scrollRatio = scrollContainer.scrollLeft / maxScrollLeft;
//       setScrollPosition(scrollRatio * 3);
//     }
//   };

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => {
//         scrollContainer.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <div
//         className="scroll-container"
//         ref={scrollContainerRef}
//         style={{
//           width: '100%',
//           overflowX: 'scroll',
//           whiteSpace: 'nowrap',
//           position: 'relative',
//         }}
//       >
//         <div
//           className="scroll-content"
//           style={{
//             width: '300%',
//             height: '50px',
//             background: 'linear-gradient(to right, red, orange, yellow, green)',
//           }}
//         />
//       </div>
//       <div id="scrollPosition">Scroll Position: {scrollPosition.toFixed(2)}</div>
//     </div>
//   );
// };


// 


// const Carousel = ({
//   data,
// }: {
//   data: {
//     image: string
//   }[]
// }) => {
//   const backgrounds = [
//     {image: '/showcasebg/1.background.png'},
//     {image: '/showcasebg/2.background.png'},
//     {image: '/showcasebg/3.background.png'},
//     {image: '/showcasebg/4.background.png'}
//   ]

//   const [currentImg, setCurrentImg] = useState(0)
//   const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
//   const carouselRef = useRef(null)

  
//   useEffect(() => {
//     let elem = carouselRef.current as unknown as HTMLDivElement
//     let { width, height } = elem.getBoundingClientRect()
//     if (carouselRef.current) {
//       setCarouselSize({
//         width,
//         height,
//       })
//     }
//   }, [])

//   return (
//     <div className='w-full flex flex-col data-center'>
//       {/* Carousel container */}
//       <div className="relative h-60 w-80 overflow-visible rounded-md">
//         {/* Image container */}
//         <div
//           ref={carouselRef}
//           style={{
//             left: -currentImg * carouselSize.width,
//           }}
//           className="absolute flex h-full w-full transition-all gap-28 duration-300"
//         >
//           {/* Map through data to render images */}
//           {data.map((v, i) => (
//             <div key={i} className="relative h-full w-full shrink-0">
//               <Image
//                 className="pointer-events-none"
//                 alt={`carousel-image-${i}`}
//                 fill
//                 src={v.image || 'https://random.imagecdn.app/500/500'}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="mt-3 flex justify-center z-10">
//         <button
//           disabled={currentImg === 0}
//           onClick={() => setCurrentImg((prev) => prev - 1)}
//           className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
//         >
//           {'<'}
//         </button>
//         <button
//           disabled={currentImg === data.length - 1}
//           onClick={() => setCurrentImg((prev) => prev + 1)}
//           className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
//         >
//           {'>'}
//         </button>
//       </div>
//       {/* <HorizontalScrollbar /> */}
//     </div>

    
//   )
// }





// const CarouselItem = ({ content, isActive }) => (
  //   <div className={`w-full h-64 flex data-center justify-center text-2xl font-bold rounded-lg
  //     ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
  //     {content}
  //   </div>
  // );


  // 80%
  import Image from 'next/image';
  import React, { useState, useEffect } from 'react';
  import { ChevronLeft, ChevronRight } from 'lucide-react';
  
  const Carousel = ({ data , setbacki }: { data: { image: string }[], 
    setbacki: (background: string) => void }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const backgrounds = [
      {image: '/showcasebg/1.background.png'},
      {image: '/showcasebg/2.background.png'},
      {image: '/showcasebg/3.background.png'},
      {image: '/showcasebg/4.background.png'}
    ]
  
    useEffect(() => {
      const updateWidth = () => {
        const container = document.getElementById('carousel-container');
        if (container) {
          setContainerWidth(container.offsetWidth);
        }
      };
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      
      setbacki(backgrounds[activeIndex].image);
    }, [activeIndex, setbacki]);

    const slideWidth = containerWidth * 0.6;
    const gap = containerWidth * 0.1; // 10% gap between slides
  
    return (
      <div id="carousel-container" className="w-full max-w-6xl mx-auto relative ">
        <div className="flex items-center justify-start">
          <button onClick={prevSlide} className="absolute left-40 z-10 p-2 bg-white rounded-full shadow-md">
            <ChevronLeft size={24} />
          </button>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${-activeIndex * (slideWidth + gap )}px)`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-end"
                style={{ width: slideWidth, marginLeft: gap }}
              >
                <Image
                  className="carousel-img w-full h-auto object-cover rounded-lg"
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={slideWidth}
                  height={slideWidth * 0.75}
                  unoptimized
                />
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-40 z-10 p-2 bg-white rounded-full shadow-md">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className='ml-[45px]'>

        <div className='flex justify-center rounded-full w-fit bg-[#5C5A5C] mx-auto mt-8'>
                <div className={`w-[100px] h-[5px] rounded-full ${activeIndex == 0 ? 'bg-white' : ''}`}></div>
                <div className={`w-[100px] h-[5px] rounded-full ${activeIndex == 1 ? 'bg-white' : ''}`}></div>
                <div className={`w-[100px] h-[5px] rounded-full ${activeIndex == 2 ? 'bg-white' : ''}`}></div>
                <div className={`w-[100px] h-[5px] rounded-full ${activeIndex == 3 ? 'bg-white' : ''}`}></div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;