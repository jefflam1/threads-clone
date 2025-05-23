import '../../global.css';

import { Slot } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme } from '@react-navigation/native';
import { AuthProvider } from '@/providers/AuthProvider';

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
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
