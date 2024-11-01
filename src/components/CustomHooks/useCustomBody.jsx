import useLocalStorage from "./useLocalStorage.jsx";
import { useState } from "react";

export default function useCustomBody() {
    const [message, setMessage] = useLocalStorage("name", "");
    const [input , setInput] = useState("");
    const [error, setError] = useState(false);

    function handleChange(e) {
        setInput(e.target.value)
     }
     function handleSubmit(e) {
        e.preventDefault();
        if (input.trim() === "") {
           setError(true);
           return;
        }
        setError(false);
        setMessage(input);
        setInput("");
     }
     function clear() {
        setMessage("");
     }
    return (
        <div className="flex flex-col justify-center gap-4"> 
            <p className="text-center text-indigo-600 opacity-60">A hook that uses state, localStorage and side effects to persist state between page reloads</p>
            <form onSubmit={handleSubmit}>
            <h2 className="text-l font-semibold italic mb-2">Please input a message for your future self</h2>
            <input onChange={handleChange} type="text" value={input} className={`block w-full p-4 text-sm text-gray-900 border ${error ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`} />
            {error ? (
               <span className="block mt-1 text-red-600 text-xs">
                 This input field is required
               </span>
            ) : null}
            <button className={`mt-4 me-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5`} type="submit">Submit</button>
            <button onClick={clear} className={`mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5`} type="button">Clear</button>
            </form>
            {message && <p className="italic mx-auto hover:bg-slate-200 w-fit p-2 rounded-md">{message}</p>}
            <hr className="border-t-2" />
        </div>
    )
}
