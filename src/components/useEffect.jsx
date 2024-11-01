import {
  UsersIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';

export default function UseEffectBody() {
  const [route, setRoute] = useState('Shmooly');
  const [data, setData] = useState([]);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setClock(new Date());
    }, 1000);

    fetch(`https://jsonplaceholder.typicode.com/${route.toLowerCase()}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json);
      });

    return () => {
      // cleanup function
      clearInterval(time);
    };
  }, [route]);

  return (
    <div className="flex flex-col">
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => setRoute('Users')}
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full"
              aria-current="page"
            >
              <UsersIcon className="size-4 me-2" />
              <span className="inline-block">Users</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setRoute('Albums')}
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full"
            >
              <BookOpenIcon className="size-4 me-2" />
              <span className="inline-block">Albums</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setRoute('Comments')}
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full"
            >
              <ChatBubbleBottomCenterTextIcon className="size-4 me-2" />
              <span className="inline-block">Comments</span>
            </button>
          </li>
        </ul>
        <div className="overflow-y-scroll h-64 w-[22rem] px-6 py-4 bg-gray-200 text-medium text-gray-500 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{route}</h3>
          {(data.length > 0 &&
            data.map((item, index) => (
              <div className="my-4" key={index}>
                <span className="font-bold me-1">{item.id}:</span>{' '}
                {item.name || item.title}
              </div>
            ))) || (
            <>
              <p className="mb-2">
                This is some placeholder content for the Shmooly tab. Shmooly is
                Snots real name. He is Steve Smiths best friend.
              </p>
              <p>
                American Dad is indeed better than Family Guy. American Dads
                humor relies on the characters while Family guy relies on
                cutaway gags.
              </p>
            </>
          )}
        </div>
      </div>
      <hr className="my-4 border-t-2" />
      <div className="text-center flex flex-col items-start w-fit mx-auto">
        <div>
          <strong className="me-2">Date: </strong>
          {clock.toLocaleDateString()}
        </div>
        <div>
          <strong className="me-2">Time: </strong>
          {clock.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
