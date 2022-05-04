import { Camera, Trash } from 'phosphor-react';
import React from 'react';
import html2canvas from 'html2canvas';
import { Loading } from './Loading';

type CameraButtonProps = {
  onScreenshot: (base64: string | null) => void;
  screenshot: string | null;
};

export function CameraButton({ onScreenshot, screenshot }: CameraButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = React.useState(false);

  const handleTakeScreenShot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(
      document.querySelector('html') as HTMLElement
    );
    const base64img = canvas.toDataURL('image/png');

    onScreenshot(base64img);

    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md flex items-end justify-end border-transparent text-zinc-400 hover:text-zinc-100 transition-colors relative'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshot(null)}
      >
        <Trash weight='fill' className='h-5 w-5 absolute top-12 right-1/4' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='bg-zinc-800 p-2 border-2 border-transparent rounded-md hover:bg-zinc-700 transition duration-300 cursor-pointer outline-none focus:border-brand-500'
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera weight='bold' className='h-6 w-6 text-zinc-400' />
      )}
    </button>
  );
}
