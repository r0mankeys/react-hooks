import { createContext } from 'react';
import Layout from './components/Layout.jsx';
import HookSection from './components/HookSection.jsx';
import UseStateBody from './components/useState.jsx';
import UseEffectBody from './components/useEffect.jsx';
import UseContextBody from './components/useContext.jsx';
import UseRefBody from './components/useRef.jsx';
import UseMemoBody from './components/useMemo.jsx';
import UseReducerBody from './components/useReducer.jsx';
import UseCustomBody from './components/CustomHooks/useCustomBody.jsx';
import Placeholder from './components/Placeholder.jsx';

export const ThemeContext = createContext('dark');

function App() {
  return (
    <Layout>
      <HookSection
        title={`useState`}
        description={`useState is a hook that lets you add state to function components. This is how you add interactivity to your app.`}
        addOn={`Make sure to update the state with a callback to the previous state instead of the direct state variable itself. Also use object state values and object destructuring when updating complex state such as form fields.`}
      >
        <UseStateBody />
      </HookSection>
      <HookSection
        title={`useEffect`}
        description={`useEffect is a hook that lets you perform side effects in function components whenever your app renders or re-renders (typically used in conjuction with useState). This is how you handle API requests, timers, and other side effects.`}
        addOn={`Make sure to add a dependency array to useEffect to prevent infinite loops (this can occur if the effect itself causes a state change, this will crash the app. An empty array is the same as "onMount" and will only happen once. ). Also, use a cleanup function to prevent memory leaks (this is a function that is returned in the useEffect, this function essentially undoes what was done in the useEffect, the useEffect returns when the component that contains it will unmount).`}
      >
        <UseEffectBody />
      </HookSection>
      <ThemeContext.Provider value={'dark'}>
        <HookSection
          title={`useContext`}
          description={`useContext is a hook that allows you to provide a value to all components in a tree without having to pass props down manually (no more prop drilling), in this sense you provide a global state to all components so they share the same "context".`}
          addOn={`This works by creating a main context in your app, then wrapping your app in a provider that provides the context to all components in the tree. Then you can use the useContext hook in any component to access the context value. (Ensure you import the context in the component you want to use it in).`}
        >
          <UseContextBody />
        </HookSection>
      </ThemeContext.Provider>
      <HookSection
        title={`useRef`}
        description={`useRef is a hook that allows your component to remeber a value between renders. Essentially persistent variables that don't trigger a re-render when they change. This is useful for accessing DOM elements, storing mutable values, and creating timers (stopwatches).`}
        addOn={`The timer state (like elapsed time) updates the component and causes re-renders. To manage the interval set by setInterval, we need a reference to the interval ID we initially created. Since the interval ID should persist across renders without causing re-renders, we use a ref to store it. This way, we can clear the interval when needed without triggering additional renders.
         Also, every React element has a ref attribute that can be used to get a reference to the underlying DOM element (exactly like querySelector). This is useful for accessing the DOM directly to perform actions like focusing an input field or measuring the size of an element.`}
      >
        <UseRefBody />
      </HookSection>
      <HookSection
        title={`useMemo`}
        description={`useMemo is a hook that allows you to memoize the result of expensive calculations so they don't have to be recalculated when your component re-renders (as this slows down your enitre app). This is useful for optimizing performance in your app.`}
        addOn={`Without using memoization, incrementing the count, (or doing anything else in the app) would take the same amount of time as it would to run the slowDouble function. This is because the slowDouble function is called every time the component re-renders. By memoizing the slowDouble function we make it so that it is only called when it's being triggered directly, this in fact memoizes the result of the function (the result is cached) so it doesn't have to be recalculated every time the component re-renders.`}
      >
        <UseMemoBody />
      </HookSection>
      <HookSection
        title={`useCallback`}
        description={`useCallback is a hook that allows you to memoize functions so they don't have to be recreated every time your component re-renders. This is useful for optimizing performance in your app.`}
        addOn={`Functions in React are different by default upon every render, even if the function is pure, which is why wrapping it in a memo can increase performance. This is because the function is only recreated when the dependencies change, otherwise it is memoized (cached) and doesn't have to be recreated every time the component re-renders. (Also ensure to wrap the component that is using the callback in React.memo to prevent re-renders).`}
      >
        <Placeholder />
      </HookSection>
      <HookSection
        title={`useReducer`}
        description={`useReducer is a hook that allows you to group complex component level sate in a reducer function, this is to help consolidate overhwelming state logic for maintainability and readbility`}
        addOn={`useReducer is one of the tougher hooks, it's similar to Redux in that it uses a reducer function to manage state. The reducer function takes in the current state and an action, then returns a new state. The action is an object that describes what happened, and the reducer function uses this to determine how to update the state. The reducer function is passed to useReducer along with the initial state, and useReducer returns the current state and a dispatch function. The dispatch function is used to send actions to the reducer, which then updates the state. This is useful for managing complex state logic in a more maintainable and readable way.`}
      >
        <UseReducerBody />
      </HookSection>
      <HookSection
      title={`Custom Hooks`}
      description={`Custom hooks are reusable hooks that you can create to abstract logic out of your components. This is useful for sharing logic between components, and keeping your components clean and maintainable.`}
      addOn={`Custom hooks are just functions that use other hooks. They can use any of the built-in hooks, or other custom hooks. Custom hooks can be used to abstract logic out of components, and make it reusable. This is useful for sharing logic between components, and keeping your components clean and maintainable. Custom hooks can also be used to create hooks that are specific to your app, and can be shared across multiple components. This is useful for creating hooks that are specific to your app, and can be shared across multiple components.`}
      >
        <UseCustomBody />
      </HookSection>
    </Layout>
  );
}

export default App;
