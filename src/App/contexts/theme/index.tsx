import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {theme} from '../../../theme';

const ThemeContext = createContext<{[key: string]: string}>({});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({children}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeContext.Provider value={isDarkMode ? theme.dark : theme.light}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
