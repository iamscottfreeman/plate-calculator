import { fonts } from '@/app/fonts';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  barWeight: number;
  collars: boolean;
  setBarWeight: Dispatch<SetStateAction<number>>;
  setCollars: Dispatch<SetStateAction<boolean>>;
};

const Bar = ({ barWeight, collars, setBarWeight, setCollars }: Props) => {
  return (
    <div className='mt-10'>
      <div className={`uppercase text-left text-xl ${fonts.header.className}`}>Bar</div>
      <div className='flex justify-between align-middle'>
        <label
          className={`flex items-center bg-gray-800 text-white border-2 px-8 py-4 cursor-pointer select-none ${
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
          className={`flex items-center bg-gray-800 text-white border-2 px-8 py-4 mx-2 cursor-pointer select-none ${
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
          className={`block bg-gray-800 text-white border-2 px-8 py-2 cursor-pointer select-none ${
            collars ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
          }`}
        >
          <input type='checkbox' className='hidden' checked={collars} onChange={(e) => setCollars(e.target.checked)} />
          Collars
          <p className='text-xs leading-3 whitespace-nowrap'>(2x2.5kg)</p>
        </label>
      </div>
    </div>
  );
};

export default Bar;
