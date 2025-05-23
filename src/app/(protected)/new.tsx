import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';

const createPost = async (content: string, user_id: string) => {
  const { data } = await supabase
    .from('posts')
    .insert({
      content,
      user_id,
    })
    .select('*')
    .throwOnError();

  return data;
};

const NewPostScreen = () => {
  const [text, setText] = useState<string>('');
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const {
    mutate: createPostMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: () => createPost(text, user!.id ?? ''),
    onSuccess: (data) => {
      setText('');
      router.back();
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <SafeAreaView edges={['bottom']} className='p-4 flex-1 h-80'>
      <KeyboardAvoidingView
        className='flex-1'
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
      >
        <Text className='text-white text-lg font-bold'>{'username'}</Text>

        {error && <Text className='text-red-500 text-sm'>{error.message}</Text>}

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
            onPress={() => createPostMutation()}
            disabled={isPending}
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
