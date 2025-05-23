import '../../global.css';

import { Slot } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme } from '@react-navigation/native';
import { AuthProvider } from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
