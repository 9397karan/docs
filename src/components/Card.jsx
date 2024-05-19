import React from 'react';
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{ scale: 1.2, rotateX: "20deg" }} // Apply rotation effect along the X-axis while dragging
      className='relative w-60  h-72 rounded-[50px] bg-zinc-900/90 text-white p-3 z-1 overflow-hidden'
    >
      <h2 className='justify-between item-center underline underline-offset-4 text-xl'>{data.title}</h2>
      <p className='text-sm leading-tight font-semibold'>{data.desc.slice(0,200)}..</p>
      <div className='footer absolute bottom-0 bg-green-600 w-full py-1 left-0'>
        <h1 className='flex items-center justify-between px-[40%] text-xxl '>
          <button className="btn text-white" onClick={() => console.log("hjdshj")}>View</button>
        </h1>
      </div>
    </motion.div>
  );
};

export default Card;
