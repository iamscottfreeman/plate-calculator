import React from 'react';

import { fonts } from '@/app/fonts';

const Header = () => {
  return (
    <div className='mb-5'>
      <h1 className={`text-5xl leading-10 text-center uppercase ${fonts.header.className}`}>Plate Calculator</h1>
    </div>
  );
};

export default Header;
