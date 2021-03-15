
import { useState, useEffect } from 'react';
import useMedia from './useMedia';

export default () => {
  const [newTheme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (newTheme === 'light') {
      window.localStorage.setItem('newTheme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('newTheme', 'light');
      setTheme('light');
    }
  };

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('newTheme');
    if (localTheme) {
      window.localStorage.setItem('newTheme', localTheme);
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [prefersDarkMode]);

  return [newTheme, toggleTheme];
};
