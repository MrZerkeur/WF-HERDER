import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from './success.json'; 

const MyAnimation = () => {
  const animationRef = useRef<any>(null);


  const playAnimation = () => {
    if (animationRef.current) {
      animationRef.current.play(); 
    }
  };

  return (
    <div className='w-[200px] '>
      <Lottie
        lottieRef={animationRef}  
        animationData={animationData}
        loop={false}  
      />

    </div>
  );
};

export default MyAnimation;