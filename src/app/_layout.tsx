import '../../global.css';

import { Slot } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme } from '@react-navigation/native';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
    card: '#101010',
  },
};

const RootLayout = () => {
  return (
    <ThemeProvider value={theme}>
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
