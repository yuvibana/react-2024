import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  const callbackFunc = (e) => {

  }

  return (
    <div className='flex justify-center w-full h-screen duration-200'
      style={{ background: color }}
    >
      <div className='flex flex-wrap justify-center fixed bottom-12 gap-8 shadow-lg bg-white py-2 px-3 rounded'>
        <button className='text-white bg-black py-2 px-7 rounded' onClick={() => setColor('black')} >Black</button>
        <button className='text-white bg-yellow-500 py-2 px-7 rounded' onClick={() => setColor('#eab308')}>Yellow</button>
        <button className='text-white bg-green-700 py-2 px-7 rounded' onClick={() => setColor('#15803d')} >Green</button>
        <button className='text-white bg-pink-600 py-2 px-7 rounded' onClick={() => setColor('#db2777')} >Pink</button>
      </div>
    </div>
  )
}

export default App
