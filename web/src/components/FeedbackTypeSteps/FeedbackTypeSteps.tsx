import React from 'react';
import { FeedbackTypeProps, feedbackTypes } from '../helpers';
import { CloseButton } from './CloseButton';

type WidgetFormOptionsProps = {
  setFeedbackType: (key: FeedbackTypeProps) => void;
};

export function FeedbackTypeSteps({ setFeedbackType }: WidgetFormOptionsProps) {
  return (
    <>
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
              onClick={() => setFeedbackType(key as FeedbackTypeProps)}
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent gap-2 hover:border-brand-500 hover:brightness-125 transition duration-300 focus:border-brand-500 focus:brightness-125 focus:outline-none'
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
