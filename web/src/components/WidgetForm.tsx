import React from 'react';
import { feedbackTypes } from '../helpers';
import { CloseButton } from './CloseButton';

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className='flex gap-2 py-8 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type='button'
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent gap-2 hover:border-brand-500 hover:brightness-125 transition duration-300 focus:border-brand-500 focus:brightness-125 focus:outline-none'
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por Patrick
      </footer>
    </div>
  );
}
