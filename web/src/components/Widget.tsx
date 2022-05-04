import React from 'react';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        type='button'
        className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group justify-items-end'
      >
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-1 transition-all duration-600'>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}