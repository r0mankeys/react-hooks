import { useState, useEffect, useRef } from 'react';
import { CubeIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export default function UseRefBody() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current); // clear any existing interval

    intervalRef.current = setInterval(() => {
      // store reference to interval
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime && now) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <h2>
          <strong>Time Passed:&nbsp;</strong>
          {secondsPassed.toFixed(3)}
        </h2>
        <div className="mt-4">
          <button
            onClick={() => handleStart()}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Start
          </button>
          <button
            onClick={() => handleStop()}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Stop
          </button>
        </div>
      </div>
      <hr className="my-4 border-t-2" />
      <div className="mt-4 flex">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CubeIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={inputRef}
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Focus on me..."
          />
        </div>
        <button
          onClick={() => focusInput()}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800"
        >
          <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
}
