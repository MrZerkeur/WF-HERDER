import React from 'react';
import Image from 'next/image';
import Rfp from './rightfp';

interface PageOneProps {
  formData: {
    name: string;
    email: string;
    lastname: string;
    telephone: string;
    codepromo: string;
    
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const PageOne: React.FC<PageOneProps> = ({ formData, handleChange, handleNext }) => {
  return (
      <>
    <div className='flex justify-center gap-28'>
    <Rfp />




    <div className='flex flex-col  gap-[18px] py-[30px] px-[26px] bc-p'>
      <h2>Vos informations</h2>
      <input
      className='p-input'
        type="text"
        name="name"
        placeholder="Prénom"
        value={formData.name}
        onChange={handleChange}
        />
        <input
        className='p-input'
        type="text"
        name="lastname"
        placeholder="Nom"
        value={formData.lastname}
        onChange={handleChange}
        />
        <input
        className='p-input'
        type="text"
        name="telephone"
        placeholder="Téléphone"
        value={formData.telephone}
        onChange={handleChange}
        />
        <input
        className='p-input'
        type="text"
        name="codepromo"
        placeholder="Code promo"
        value={formData.codepromo}
        onChange={handleChange}
        />
      <input
      className='p-input'
        type="email"
        name="email"
        placeholder="Mail"
        value={formData.email}
        onChange={handleChange}
        />
      <button className='py-[10px] bg-[#06513E] text-white br ' onClick={handleNext}>Contimue</button>
    </div>
    </div>
    </>
  );
};

export default PageOne;
