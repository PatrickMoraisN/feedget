import { CircleNotch } from 'phosphor-react';
import React from 'react';

export function Loading() {
  return (
    <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
      <CircleNotch weight='bold' className='h-6 w-6 animate-spin' />
    </div>
  );
}
