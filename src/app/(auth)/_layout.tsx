import { View, Text } from 'react-native';
import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href='/(protected)' />;
  }
  return (
    <Stack>
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen
        name='signup'
        options={{ title: 'Sign up', headerBackButtonDisplayMode: 'minimal' }}
      />
    </Stack>
  );
};

export default AuthLayout;
