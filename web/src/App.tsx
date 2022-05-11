import { useState } from 'react';
import { Widget, Navbar } from './components';

export function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-7 gap-10'>
        <h1 className='text-zinc-200 text-5xl '>Feedget</h1>
        <p className='text-2xl leading-relaxed'>
          É um widget para feedbacks!
          <br />
          Nele você pode enviar uma screenshot, uma mensagem
          <br /> e vai direto para o email responsável!!
          <br /> Legal né?!
        </p>
      </div>
      <Widget />
    </>
  );
}
