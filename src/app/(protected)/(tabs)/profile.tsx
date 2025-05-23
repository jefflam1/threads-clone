import { View, Text } from 'react-native';
import React from 'react';
import { supabase } from '@/lib/supabase';

const ProfileScreen = () => {
  return (
    <View>
      <Text
        onPress={() => supabase.auth.signOut()}
        className='text-white text-2xl font-bold'
      >
        Sign out
      </Text>
    </View>
  );
};

export default ProfileScreen;
