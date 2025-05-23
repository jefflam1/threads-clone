import PostListItem from '@/components/PostListItem';
import { posts } from '@/dummyData';
import { supabase } from '@/lib/supabase';
import { Post } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const fetchPosts = async () => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .throwOnError();

  return data;
};

export default function HomeScreen() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator size='large' color='#0000ff' />;
  }

  if (error) {
    return <Text className='text-white text-2xl'>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href='/new' className='text-blue-500 p-4 text-center text-3xl'>
          New Post
        </Link>
      )}
    />
  );
}
