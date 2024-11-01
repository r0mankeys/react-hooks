import { useState } from 'react';

export default function UseStateBody() {
  const [count, setCount] = useState(10);
  return (
    <>
      <button
        onClick={() => setCount(prev => prev - 1)}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Decrement
      </button>
      <span className="inline-block text-3xl font-bold w-10 text-center">
        {count}
      </span>
      <button
        onClick={() => setCount(prev => prev + 1)}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Increment
      </button>
    </>
  );
}
