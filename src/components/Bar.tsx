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
  type: string;
};

const Bar = ({ barWeight, collars, setBarWeight, setCollars }: Props) => {
  const BarWeight = ({ weight, type }: BarWeightProps) => (
    <label
      className={`flex flex-col justify-center items-center flex-grow flex-shrink basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded-lg cursor-pointer select-none ${
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
      <p className='text-xs lowercase text-gray-400'>{type}</p>
    </label>
  );

  return (
    <div className='mt-4'>
      <div className={`uppercase text-xl pl-2 ${fonts.header.className}`}>Bar Weight</div>
      <div className='grid grid-cols-3 gap-2'>
        {DEFAULT_BARS.map((weight, index) => (
          <BarWeight key={index} {...weight} />
        ))}
        <label
          className={`flex flex-col justify-center items-center basis-0 px-4 h-16 bg-gray-800 text-white border-2 rounded-lg cursor-pointer select-none ${
            collars ? 'border-red-600 bg-gray-700' : 'text-gray-300 border-gray-700'
          }`}
        >
          <input type='checkbox' className='hidden' checked={collars} onChange={(e) => setCollars(e.target.checked)} />
          Collars
          <p className='text-xs lowercase text-gray-400'>2x2.5kg</p>
        </label>
      </div>
    </div>
  );
};

export default Bar;
