import DEFAULT_PLATES from '@/app/DEFAULT_PLATES';
import { fonts } from '@/app/fonts';
import React from 'react';

type Props = {
  plates: number[] | undefined;
  collar: boolean;
  remainder: number;
};

type PlateProps = {
  weight: number;
};

const Plates = ({ plates, collar, remainder }: Props) => {
  const Plate = ({ weight }: PlateProps) => {
    const color = DEFAULT_PLATES.find((plate) => plate.weight === weight)?.color;
    const size = weight >= 15 ? 'h-40' : weight >= 10 ? 'h-32' : 'h-20';
    return (
      <div className={`flex items-center justify-center ${color} w-7 ${size} mx-1 shadow shadow-black`}>
        <div className={`w-7 flex-shrink-0 -rotate-90 text-center ${fonts.header.className}`}>{weight}</div>
      </div>
    );
  };

  return (
    <div className='flex flex-col relative'>
      <div className='flex -ml-10 items-center'>
        <div className='h-40'>
          <div className='bg-gradient-to-b from-slate-400 to-slate-600 w-20 h-7 relative top-16 mt-1'></div>
        </div>
        {plates?.map((plate, index) => (
          <Plate key={index} weight={plate} />
        ))}
        {collar && (
          <div className='h-40'>
            <div className='flex items-center justify-center bg-gray-400 w-5 h-14 relative top-12 mt-1 shadow shadow-black' />
          </div>
        )}
        <div className='h-40'>
          <div className='bg-gradient-to-b from-slate-400 to-slate-600 w-10 h-7 relative top-16 mt-1'></div>
        </div>
      </div>
      {remainder > 0 && <div className='mt-4 text-center'>Unable to load additional {remainder}kg.</div>}
    </div>
  );
};

export default Plates;
