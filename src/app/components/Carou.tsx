'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Arrow from '../../../public/Arrow.png';

const MobileCarousel = ({ data, setbacki }: { data: { image: string }[], setbacki: (background: string) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const backgrounds = [
    { image: '/showcasebg/1.background.png' },
    { image: '/showcasebg/2.background.png' },
    { image: '/showcasebg/3.background.png' },
    { image: '/showcasebg/4.background.png' }
  ];

  useEffect(() => {
    if (backgrounds[activeIndex]) {
      setbacki(backgrounds[activeIndex].image);
    }
  }, [activeIndex, setbacki]);

  const updateActiveIndex = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const slideWidth = carouselRef.current.offsetWidth * 0.8;
      let newIndex = Math.round(scrollPosition / slideWidth);


      newIndex = Math.max(0, Math.min(newIndex, backgrounds.length - 1));
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative my-auto h-full">
      <div
        id="carousel-container"
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        onScroll={updateActiveIndex}
        style={{ scrollSnapType: 'x mandatory', gap: '20px' }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="snap-center  flex justify-center flex-shrink-0"
            style={{ width: '80vw', height: 'auto', marginRight: '20px',marginLeft: index === 0 ? '20px' : '0px'}}
          >
            <Image
              className="carousel-img w-full h-auto object-cover rounded-lg"
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={600}
              unoptimized
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-[400px] control rounded-full w-fit bg-[#5C5A5C] mx-auto mt-8">
        <div className={`w-[25%] h-[5px] rounded-full ${activeIndex === 0 ? 'bg-white' : ''}`}></div>
        <div className={`w-[25%] h-[5px] rounded-full ${activeIndex === 1 ? 'bg-white' : ''}`}></div>
        <div className={`w-[25%] h-[5px] rounded-full ${activeIndex === 2 ? 'bg-white' : ''}`}></div>
        <div className={`w-[25%] h-[5px] rounded-full ${activeIndex === 3 ? 'bg-white' : ''}`}></div>
      </div>
    </div>
  );
};

export default MobileCarousel;
