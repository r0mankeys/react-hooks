import { ThemeContext } from '../App';
import { useContext, useState } from 'react';

export default function UseContextBody() {
  const contextTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(contextTheme);
  const themeStyles = {
    backgroundColor: theme === 'dark' ? '#393939' : '#f2f2f2',
    color: theme === 'dark' ? '#f2f2f2' : '#393939',
    padding: '1rem',
  };
  const buttonStyles = {
    backgroundColor: theme === 'dark' ? '#f2f2f2' : '#393939',
    color: theme === 'dark' ? '#393939' : '#f2f2f2',
    padding: '0.5rem 1rem',
    border: theme === 'dark' ? '2px solid #393939' : '2px solid #f2f2f2',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };
  return (
    <div
      style={themeStyles}
      className="h-80 w-[100%] flex flex-col items-center rounded-md"
    >
      <button
        className="self-start justify-self-start"
        onClick={() => toggleTheme()}
        style={buttonStyles}
      >
        Change Colour
      </button>
      <p className="mt-24">{theme} mode</p>
    </div>
  );
}
