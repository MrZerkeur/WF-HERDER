"use client"
import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './nav.json';

const Navanm = () => {
  const animationRef = useRef<any>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const toggleAnimation = () => {
    if (animationRef.current) {
      const totalFrames = animationRef.current.totalFrames;

      if (!isAtEnd) {
        // Play forward from the first frame to the last frame
        animationRef.current.goToAndPlay(0, true);
      } else {
        // Play backward from the last frame to the first frame
        animationRef.current.goToAndPlay(totalFrames, true);
        animationRef.current.setDirection(-1); // Set reverse direction
      }

      setIsAtEnd(!isAtEnd);  // Toggle the state
    }
  };

  return (
    <div className='w-[50px]' onClick={toggleAnimation}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={false}  
      />
    </div>
  );
};

export default Navanm;