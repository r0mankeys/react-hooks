import { useState, useMemo } from 'react';

export default function UseMemoBody() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const slowDouble = num => {
    let i = 0;
    while (i < 10 ** 8.2) i++; // a noticable delay
    return num * 2;
  };
  const double = useMemo(() => {
    return slowDouble(number);
  }, [number]);

  return (
    <div className="flex flex-col">
      <div>
        <button
          onClick={() => setNumber(prev => prev + 1)}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Increment Number
        </button>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Increment Count
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4 w-44">
        <p>
          <strong>Number:&nbsp;</strong>
          {number}
        </p>
        <p>
          <strong>Double of number:&nbsp;</strong>
          {double}
        </p>
        <p>
          <strong>Count:&nbsp;</strong>
          {count}
        </p>
      </div>
    </div>
  );
}
