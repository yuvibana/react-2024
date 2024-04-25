// src/components/Form.js
import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const formData = new FormData(form)
    let formObj = Object.fromEntries(formData.entries())
    console.log(formObj);
  };


  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full text-black p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full text-black p-2 border rounded" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" className="w-full p-2 border rounded text-black" rows="4" required />
        </div>
        <div className='flex gap-5'>
          <div className="mb-6 text-center flex gap-2 items-center">
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor="male" className="block text-gray-700 text-sm font-bold cursor-pointer">Male</label>
          </div>
          <div className="mb-6 text-center flex gap-2 items-center">
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor="female" className="block text-gray-700 text-sm font-bold cursor-pointer">Female</label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      <div className='flex justify-center mt-4 gap-5'>
        {/* <button className='' onClick={HndlIncre}>+</button> */}
        <button className='text-3xl' onClick={() => setCounter(counter + 1)}>+</button>
        <span className='text-3xl border py-0 px-4'>{counter}</span>
        <button className='text-3xl' onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
};

export default App;
