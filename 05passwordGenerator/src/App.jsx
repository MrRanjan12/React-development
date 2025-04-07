import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+|:?></*[]{}`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },
[Password])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numAllowed, charAllowed, PasswordGenerator]);
  

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4">
        <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 bg-gray-800 text-orange-400">
          <h1 className="text-white text-center mt-4 text-3xl font-bold tracking-wide mb-6">
            🔐 Password Generator
          </h1>

          <div className="flex items-center shadow-inner rounded-lg overflow-hidden mb-6">
            <input
              className="outline-none w-full py-3 px-4 text-gray-800 text-lg font-medium bg-white rounded-l-md transition-all duration-300 focus:ring-2 focus:ring-orange-400"
              type="text"
              value={Password}
              placeholder="Your secure password"
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipbord}
              className="outline-none bg-blue-700 text-white
          px-4 py-3.5 shrink-0 cursor-pointer hover:bg-blue-800"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label> Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-l">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
  
    
    </>
  );
}
export default App;
