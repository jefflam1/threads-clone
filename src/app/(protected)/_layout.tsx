import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href='/login' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='new'
        options={{
          title: 'New thread',
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
