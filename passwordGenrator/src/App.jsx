import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [password, setPassword] = useState('');
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  
  // useRef
  const passWordRef = useRef(null)


  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJHKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += '0123456489';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordtoclipBoard = (() => {
    passWordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed])


  return (
    <div className="outerdiv flex items-center bg-black text-black" style={{ height: '100vh', width: '100%' }}>
      <div className="innerdiv max-w-full mx-auto shadow-md rounded bg-white">
        <div className="flex shadow rounded-lg mb-4">
          <input
            type="text"
            value={password}
            className="p-2 w-full border-0 outline-none"
            placeholder="Password"
            readOnly
            ref={passWordRef}
          />
          <button
            onClick={copyPasswordtoclipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800">copy</button>
        </div>
        <div className="flex text-sm gap-x-2 p-1">
          {/* Password Range */}
          <div className="flex items-center gap-x-1 py-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLenght(e.target.value)}
            />
            <label htmlFor="range">Length : {length}</label>
          </div>
          {/* Is Number Allowed */}
          <div className="flex items-center gap-x-1 py-2 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberall"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberall" className="cursor-pointer">Number Allowed</label>
          </div>
          {/* Is Char Allowed */}
          <div className="flex items-center gap-x-1 py-2 ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charall"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charall" className="cursor-pointer">Char Allowed</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App