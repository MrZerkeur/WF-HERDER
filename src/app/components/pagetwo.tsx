import React from 'react';
import Rfp from './rightfp';

interface PageTwoProps {
  formData: {
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBack: () => void;
  handleSend: () => void;
}

const PageTwo: React.FC<PageTwoProps> = ({ formData, handleChange, handleBack, handleSend }) => {
  return (
    <div className='flex justify-center gap-28'>
        <Rfp />


    <div>
    
    <div className='py-[30px] px-[26px] flex flex-col gap-[22px] bc-p'>
    <h2>Votre projet</h2>
    <div className='flex flex-col gap-[22px]'>

      <textarea
      className='t-input w-[406px] '
      name="message"
      placeholder="Je souhaiterai avoir un design moderne pour mon site e-commerce de vêtements ..."
      value={formData.message}
      onChange={handleChange}
      />
      <div className='checkbox flex gap-[8px] text-[14px]'>

      <input type="checkbox"  />
      <p>J&apos;accepte de partager mes données pour obtenir des informations</p>
      </div>
      </div>
      <div className='flex flex-col gap-[16px]'>
        <button className='py-[10px] bg-[#06513E] br' onClick={handleSend}>Envoyer</button>
        <button className='py-[10px]  br' onClick={handleBack}>Précédent</button>
      </div>
    </div>
        </div>
    </div>
  );
};

export default PageTwo;
