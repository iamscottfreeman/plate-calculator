import React, { Dispatch, SetStateAction } from 'react';

import { fonts } from '@/app/fonts';

type Props = {
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
};

const Input = ({ weight, setWeight }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className={`uppercase text-left text-xl ${fonts.header.className}`}>Weight</div>
      <div
        className='bg-gray-800 text-white border-2 border-red-600 rounded cursor-text'
        onClick={() => document.getElementById('input')?.focus()}
      >
        <input
          id='input'
          type='number'
          value={weight}
          onChange={(e) => {
            const weight = e.currentTarget.value;
            if (parseFloat(weight) < 9999 || weight == '') setWeight(weight);
          }}
          className={`bg-gray-800 text-white p-4 text-xl active:border-0 outline-0 w-32 text-right pr-0 ${fonts.header.className}`}
        />
        <span className={`p-4 pl-2 uppercase text-sm ${fonts.header.className}`}>kg</span>
      </div>
    </div>
  );
};

export default Input;
