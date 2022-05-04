import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../CloseButton';
import bugImageUrl from '../../assets/bug.svg';
import { FeedbackTypeProps, feedbackTypes } from '../../helpers';

type FeedbackContentStepProps = {
  feedbackType: FeedbackTypeProps;
  onFeedbackRestartRequested: () => void;
};

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type='button'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='h-4 w-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2 px-8'>
          <img
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
            className='h-6 w-6'
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 outline-none border-zinc-600 bg-transparent rounded-md focus:border-brand-500 p-4 resize-none scrollbar scrollbar-thumb-brand-500 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
        />
      </form>
    </>
  );
}
