import React, { createContext, useContext, useState, useEffect } from 'react';
import storage from '../storage';
import { getStorageTheme } from '../service';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}


export function ThemeProvider({ children }) {
  const [name, setTheme] = useState('dark');

  const toggle = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    storage.save({
      key: 'theme',
      data: name
    })
  };

  const retieveTheme = async () => {
    try {
      const response = await getStorageTheme();
      setTheme(response);
    } catch (error) {
      console.log('....error', error);
      setTheme('light')
    }
  }

  useEffect(() => {
    retieveTheme();
  }, [])

  return (
    <ThemeContext.Provider value={{ name, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}


