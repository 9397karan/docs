import React, { useState } from 'react';
import { Form } from './Form';

const Background = () => {
  const [open, setOpen] = useState(false);


  const handleClick=()=>{
    setOpen(true)
  }

  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>
          Documents
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>
          Docs
        </h1>
      </div>
      <div className='add fixed bottom-10 right-10'>
        <button 
          onClick={handleClick} 
          className="ml-4 btn btn-primary">
          Add
        </button>
      </div>
      <Form open={open} setOpen={setOpen} />
    </>
  );
};

export default Background;
