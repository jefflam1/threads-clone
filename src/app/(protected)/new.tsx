import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';

const NewPostScreen = async () => {
  const [text, setText] = useState<string>('');
  const { user } = useAuth();

  const onSubmit = async () => {
    if (!text || !user) return;

    const { data, error } = await supabase.from('posts').insert({
      content: text,
      user_id: user?.id,
    });

    if (error) {
      console.error(error);
    }

    setText('');
  };

  return (
    <SafeAreaView edges={['bottom']} className='p-4 flex-1 h-80'>
      <KeyboardAvoidingView
        className='flex-1'
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
      >
        <Text className='text-white text-lg font-bold'>{'username'}</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={`What's new?`}
          placeholderTextColor='gray'
          className='text-white text-lg'
          multiline
          numberOfLines={4}
        />

        <View className='mt-auto'>
          <Pressable
            onPress={onSubmit}
            className={`${
              text.length > 0 ? 'bg-white' : 'bg-gray-500'
            }  p-3 px-6 self-end rounded-full`}
          >
            <Text
              className={`${
                text.length > 0 ? 'text-black' : 'text-black'
              } font-bold`}
            >
              Post
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewPostScreen;
