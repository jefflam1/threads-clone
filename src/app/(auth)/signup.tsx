import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSignUp = () => {
    // Implement your login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1 bg-black'
    >
      <View className='flex-1 justify-center px-6'>
        {/* Header */}
        <View className='mb-4'>
          <Text className='text-white text-4xl font-bold'>
            Create an account
          </Text>
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

          {/* Sign upButton */}
          <TouchableOpacity
            className='bg-white rounded-lg py-4 mt-6'
            activeOpacity={0.8}
            onPress={handleSignUp}
            disabled={isLoading}
          >
            <Text className='text-black text-center font-semibold text-lg'>
              {isLoading ? 'Signing up...' : 'Sign up'}
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity
            className='mt-4'
            onPress={() => router.push('/login')}
          >
            <Text className='text-gray-400 text-center'>
              Already have an account? <Text className='text-white'>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
