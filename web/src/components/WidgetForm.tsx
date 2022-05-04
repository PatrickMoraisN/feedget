import React from 'react';
import { FeedbackTypeProps, feedbackTypes } from '../helpers';
import { CloseButton } from './CloseButton';
import { FeedbackTypeSteps } from './FeedbackTypeSteps';
import { FeedbackContentStep } from './steps';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] =
    React.useState<FeedbackTypeProps | null>(null);

  const handleRestartFeedbackSteps = () => {
    setFeedbackType(null);
  };

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {!feedbackType ? (
        <FeedbackTypeSteps setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedbackSteps}
        />
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por Patrick
      </footer>
    </div>
  );
}
