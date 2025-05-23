import { Post } from '@/types';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View className='border-b border-gray-800/70'>
      <View className='p-4 flex-row'>
        {/* Left side - Avatar */}
        <Image
          source={{ uri: post.user.avatar_url }}
          className='h-10 w-10 rounded-full mr-3'
        />

        {/* Right side - Content */}
        <View className='flex-1'>
          {/* Post Header */}
          <View className='flex-row items-center mb-1'>
            <Text className='text-white font-semibold mr-1'>
              {post.user.username}
            </Text>

            <Text className='text-gray-500'>
              {' '}
              {dayjs(post.created_at).fromNow()}
            </Text>
          </View>

          {/* Post Content */}
          <Text className='text-white mt-2 mb-3 '>{post.content}</Text>

          {/* Post Actions */}
          <View className='flex-row items-center gap-8 mt-2'>
            <Pressable className='flex-row items-center'>
              <Ionicons name='heart-outline' size={20} color='#d1d5db' />
              <Text className='text-gray-500 ml-2'>2</Text>
            </Pressable>
            <Pressable className='flex-row items-center'>
              <Ionicons name='chatbubble-outline' size={20} color='#d1d5db' />
              <Text className='text-gray-500 ml-2'>{0}</Text>
            </Pressable>

            <Pressable className='flex-row items-center'>
              <Ionicons name='repeat-outline' size={20} color='#d1d5db' />
            </Pressable>

            <Pressable className='flex-row items-center'>
              <Ionicons name='paper-plane-outline' size={20} color='#d1d5db' />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostListItem;
