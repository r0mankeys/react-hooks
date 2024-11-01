import { useState, useEffect } from "react";

// Goal is to have a hook that functions the same as useState, but persist the data in localStorage

const getSavedData = (key, intialValue) => {
  const savedData = JSON.parse(localStorage.getItem(key));
  if (savedData) return savedData;
  if (intialValue instanceof Function) return intialValue(); // Allows the initial value to be a function
  return intialValue;
};

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedData(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
