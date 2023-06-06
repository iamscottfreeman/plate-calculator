import { fonts } from '@/app/fonts';
import React from 'react';
import Icon from './Icon';

const Header = () => {
  return (
    <div className='mb-10'>
      <h1 className={`text-5xl text-center uppercase ${fonts.header.className}`}>Plate Calculator</h1>
    </div>
  );
};

export default Header;