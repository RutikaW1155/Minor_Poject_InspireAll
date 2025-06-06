import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './darkmode.css'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add('darkmod');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('darkmod');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <FontAwesomeIcon
      icon={darkMode ? faSun : faMoon}
      onClick={() => setDarkMode(prev => !prev)}
      className='cursor-pointer text-xl'
    />
  );
};

export default DarkMode;
