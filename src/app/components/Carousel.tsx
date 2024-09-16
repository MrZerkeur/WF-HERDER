'use client'

  import Image from 'next/image';
  import React, { useState, useEffect } from 'react';
  import { ChevronLeft, ChevronRight } from 'lucide-react';
  import Arrow from '../../../public/Arrow.png'
  
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

    const slideWidth = containerWidth * 0.7;
    // const gap = containerWidth * 0.1; 
    const gap = 0;
  
    return (
      <div id="carousel-container" className="w-full  max-w-6xl mx-auto relative my-auto  h-full">
        <div className="flex items-center justify-start ">
          <button onClick={prevSlide} className={`absolute left-40 z-10 p-2  rounded-full shadow-md ${activeIndex == 0? 'hidden' : ''}`}>
            {/* <ChevronLeft size={24} /> */}
            <Image src={Arrow} height={30} width={30} alt='arrow' />
          </button>
          <div
            className="flex  transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${-activeIndex * (slideWidth + gap )}px)`,
            }}
          >
            {/* khasni ndir hna margin-left: 90px; flwla */}
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-end"
                style={{ width: slideWidth, marginLeft: index === 0 ? '90px' : gap, }}
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
          <button onClick={nextSlide} className={`absolute right-40 z-10 p-2  rounded-full shadow-md ${activeIndex == 3 ? 'hidden' : ''}`}>
            {/* <ChevronRight size={24} /> */}
            <Image className='reverse' src={Arrow} height={30} width={30} alt='arrow' />
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