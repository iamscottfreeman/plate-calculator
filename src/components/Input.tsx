import React, { Dispatch, SetStateAction } from 'react';

import { fonts } from '@/app/fonts';

type Props = {
  weight: string;
  barWeight: number;
  setWeight: Dispatch<SetStateAction<string>>;
};

const Input = ({ weight, barWeight, setWeight }: Props) => {
  return (
    <div className='flex flex-col mb-5'>
      <div className={`uppercase text-left text-xl ml-14 ${fonts.header.className}`}>
        <label htmlFor='input'>Weight</label>
      </div>
      <div className='flex items-center'>
        <span
          className='text-3xl cursor-pointer bg-red-700 w-10 h-10 rounded-full text-center align-middle mr-4 select-none leading-10'
          onClick={() => {
            let newWeight = weight !== '' ? parseFloat(weight) : barWeight;
            if (newWeight) {
              newWeight = 2.5 * Math.ceil(newWeight / 2.5) - 2.5;
              if (newWeight >= barWeight) setWeight(newWeight.toString());
              if (newWeight < barWeight) setWeight(barWeight.toString());
            }
          }}
        >
          &ndash;
        </span>
        <div
          className='bg-gray-800 text-white border-2 border-red-600 rounded-lg cursor-text flex items-center leading-10'
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
            className={`bg-gray-800 text-white py-4 text-xl active:border-0 outline-0 w-32 rounded-xl text-right ${fonts.header.className}`}
          />
          <span className={`px-2 uppercase text-sm ${fonts.header.className}`}>kg</span>
        </div>
        <span
          className='text-3xl cursor-pointer bg-red-700 w-10 h-10 rounded-full text-center align-middle ml-4 select-none'
          onClick={() => {
            let newWeight = weight !== '' ? parseFloat(weight) : barWeight;
            if (!isNaN(newWeight)) {
              newWeight = 2.5 * Math.ceil(newWeight / 2.5) + 2.5;
              if (newWeight < 9999) setWeight(newWeight.toString());
            }
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default Input;
