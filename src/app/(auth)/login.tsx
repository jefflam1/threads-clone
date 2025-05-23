import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    // Implement your login logic here
    if (!email || !password) {
      Alert.alert('Please enter an email and passowrd');
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
    } catch (error) {
      console.error('Login error: ', error);
      Alert.alert('Login error: ', error as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1 bg-black'
    >
      <View className='flex-1 justify-center px-6'>
        {/* Header */}
        <View className='mb-4'>
          <Text className='text-white text-4xl font-bold'>Welcome back</Text>
        </View>

        {/* Login Form */}
        <View className='gap-4'>
          {/* Email Input */}
          <View>
            <Text className='text-white mb-2 text-sm'>Email</Text>
            <TextInput
              className='w-full bg-gray-900 rounded-lg px-4 py-3 text-white'
              placeholder='Enter your email'
              placeholderTextColor='#666'
              keyboardType='email-address'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Input */}
          <View>
            <Text className='text-white mb-2 text-sm'>Password</Text>
            <TextInput
              className='w-full bg-gray-900 rounded-lg px-4 py-3 text-white'
              placeholder='Enter your password'
              placeholderTextColor='#666'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className='bg-white rounded-lg py-4 mt-6'
            activeOpacity={0.8}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text className='text-black text-center font-semibold text-lg'>
              {isLoading ? 'Logging in...' : 'Login'}
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity
            className='mt-4'
            onPress={() => router.push('/signup')}
          >
            <Text className='text-gray-400 text-center'>
              Don't have an account? <Text className='text-white'>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
