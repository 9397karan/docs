import React, { useRef } from 'react';

export const Form = ({ open, setOpen,title,desc,handleSubmit }) => {

    
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`fixed inset-0 bg-gray-800 transition-opacity duration-200 ${open ? 'opacity-50' : 'opacity-0'}`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`content bg-white p-8 rounded shadow-lg z-10 transition-transform duration-200 ${open ? 'scale-100' : 'scale-90'}`}
      >
        <h1 className='text-2xl mb-4'>Create New</h1>
        <div>
          <form className='m-3 mt-4'>
            <div className="mb-3">
              <label htmlFor="title" className="form-label block text-sm font-medium text-gray-700">Title</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="title" placeholder='Enter title' ref={title}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label block text-sm font-medium text-gray-700">Content</label>
              <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="exampleFormControlTextarea1" rows="3" ref={desc}></textarea>
            </div>
            <button type="submit" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
