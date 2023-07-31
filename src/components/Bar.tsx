import React, { Dispatch, SetStateAction } from 'react';

import { fonts } from '@/app/fonts';
import DEFAULT_BARS from '@/app/DEFAULT_BARS';

type Props = {
  barWeight: number;
  collars: boolean;
  setBarWeight: Dispatch<SetStateAction<number>>;
  setCollars: Dispatch<SetStateAction<boolean>>;
};

type BarWeightProps = {
  weight: number;
};

const Bar = ({ barWeight, collars, setBarWeight, setCollars }: Props) => {
  const BarWeight = ({ weight }: BarWeightProps) => (
    <label
      className={`flex justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded cursor-pointer select-none ${
        weight === barWeight ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
      }`}
    >
      <input
        type='radio'
        name='barWeight'
        className='hidden'
        checked={weight === barWeight}
        onChange={() => setBarWeight(weight)}
      />
      {weight}kg
    </label>
  );

  return (
    <div className='mb-10'>
      <div className={`uppercase text-xl pl-2 ${fonts.header.className}`}>Bar</div>
      <div className='grid grid-cols-3 gap-1'>
        {DEFAULT_BARS.map((weight) => (
          <BarWeight weight={weight} />
        ))}
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
    </div>
  );
};

export default Bar;
