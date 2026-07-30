import { useEffect, useCallback, useRef, useState } from "react";
import { usePasswordGenerator } from "../hooks/usePasswordGenerator";

function PasswordGenerator() {
  const {
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    password,
    error,
    strength,
    passwordGenerator,
  } = usePasswordGenerator();

  const passwordRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // useEffect for automatic generation
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // copy function with useCallback + useRef
  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 800);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 text-orange-500 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Advanced Password Generator</h1>

      {error && <p className="text-red-400 mb-3 text-sm">{error}</p>}

      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-full bg-gray-900 px-3 py-2 rounded outline-none"
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`px-4 py-2 rounded text-white ${
            copied ? "bg-green-600" : "bg-slate-600"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="cursor-pointer"
        />
        <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Include Numbers</label>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={characterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
        />
        <label>Include Special Characters</label>
      </div>

      <button
        onClick={passwordGenerator}
        className="w-full px-4 py-2 rounded text-white bg-orange-600"
      >
        Generate Password
      </button>

      <p className="text-sm text-gray-400 mt-3">
        Strength: <span className="font-semibold">{strength}</span>
      </p>
    </div>
  );
}

export default PasswordGenerator;

                 