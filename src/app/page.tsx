'use client';
import { useEffect, useState } from 'react';

import DEFAULT_PLATES from './DEFAULT_PLATES';
import Bar from '@/components/Bar';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Plates from '@/components/Plates';
import MoreWeight from '@/components/MoreWeight';

export default function Home() {
  const [barWeight, setBarWeight] = useState(20);
  const [collars, setCollars] = useState(false);
  const [weight, setWeight] = useState<string>('');
  const [plates, setPlates] = useState<number[]>();
  const [remainder, setRemainder] = useState<number>(0);

  useEffect(() => {
    calcWeight();
  }, [weight, barWeight, collars]);

  const calcPlates = (weight: number) => {
    const availablePlates = JSON.parse(JSON.stringify(DEFAULT_PLATES)) as typeof DEFAULT_PLATES;
    const barLoad: number[] = [];
    availablePlates.map((plate, index) => {
      for (let i = plate.count; i > 0; i--) {
        if (plate.weight <= weight && plate.count > 0) {
          barLoad.push(plate.weight);
          weight = weight - plate.weight;
          availablePlates[index].count--;
        }
      }
    });
    setRemainder(weight * 2);
    setPlates(barLoad);
  };

  const calcWeight = () => {
    let sideWeight = (parseFloat(weight) - barWeight) / 2;
    if (isNaN(sideWeight)) return;
    if (collars) sideWeight = sideWeight - 2.5;
    calcPlates(sideWeight);
  };

  const isEnoughWeight = () => {
    return parseFloat(weight) < barWeight + (collars ? 5 : 0);
  };

  return (
    <main className='flex flex-col items-center pt-5 px-5 min-w-[300px]'>
      <Header />
      <Input weight={weight} barWeight={barWeight + (collars ? 5 : 0)} setWeight={setWeight} />
      {weight && (
        <div className={remainder > 0 ? 'h-56' : 'h-44'}>
          {weight &&
            (isEnoughWeight() ? <MoreWeight /> : <Plates plates={plates} collar={collars} remainder={remainder} />)}
        </div>
      )}
      <Bar barWeight={barWeight} collars={collars} setBarWeight={setBarWeight} setCollars={setCollars} />
    </main>
  );
}
