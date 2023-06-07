import React, { Dispatch, SetStateAction } from 'react';

import { fonts } from '@/app/fonts';

type Props = {
  barWeight: number;
  collars: boolean;
  setBarWeight: Dispatch<SetStateAction<number>>;
  setCollars: Dispatch<SetStateAction<boolean>>;
};

const Bar = ({ barWeight, collars, setBarWeight, setCollars }: Props) => {
  return (
    <div className='mb-10 flex flex-wrap justify-left space-x-2 space-y-2'>
      <div className={`basis-full uppercase text-xl pl-2 -mb-2 ${fonts.header.className}`}>Bar</div>
      <label
        className={`flex justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
          barWeight === 12.5 ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
        }`}
      >
        <input
          type='radio'
          name='barWeight'
          className='hidden'
          checked={barWeight === 12.5}
          onChange={() => setBarWeight(12.5)}
        />
        12.5kg
      </label>
      <label
        className={`flex justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
          barWeight === 15 ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
        }`}
      >
        <input
          type='radio'
          name='barWeight'
          className='hidden'
          checked={barWeight === 15}
          onChange={() => setBarWeight(15)}
        />
        15kg
      </label>
      <label
        className={`flex justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
          barWeight === 20 ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
        }`}
      >
        <input
          type='radio'
          name='barWeight'
          className='hidden'
          checked={barWeight === 20}
          onChange={() => setBarWeight(20)}
        />
        20kg
      </label>
      <label
        className={`flex justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
          barWeight === 25 ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
        }`}
      >
        <input
          type='radio'
          name='barWeight'
          className='hidden'
          checked={barWeight === 25}
          onChange={() => setBarWeight(25)}
        />
        25kg
      </label>
      <label
        className={`flex flex-col justify-center items-center basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
          collars ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
        }`}
      >
        <input type='checkbox' className='hidden' checked={collars} onChange={(e) => setCollars(e.target.checked)} />
        Collars
        <p className='text-xs leading-3 whitespace-nowrap'>(2x2.5kg)</p>
      </label>
    </div>
  );
};

export default Bar;
