import { User, Post } from './types';

export const users: User[] = [
  {
    id: 'u1',
    username: 'jennawong',
    name: 'Jenna Wong',
    avatar_url:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  },
  {
    id: 'u2',
    username: 'alex.martinez',
    name: 'Alex Martinez',
    avatar_url:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
  },
  {
    id: 'u3',
    username: 'sarah.smith',
    name: 'Sarah Smith',
    avatar_url:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  },
  {
    id: 'u4',
    username: 'mike.tech',
    name: 'Mike Johnson',
    avatar_url:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
  },
  {
    id: 'u5',
    username: 'emily.dev',
    name: 'Emily Chen',
    avatar_url:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    user_id: 'u1',
    content:
      'Just deployed my first React Native app! 🚀 The journey of learning mobile development has been incredible. What are your favorite RN libraries?',
    user: users[0],
    created_at: '2025-03-15T12:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p2',
    user_id: 'u2',
    content:
      '@jennawong Congrats! React Navigation and React Native Paper are must-haves in my projects.',
    user: users[1],
    created_at: '2025-03-15T12:30:00.000Z',
    parent_id: 'p1',
    parent: null,
    replies: [],
  },
  {
    id: 'p3',
    user_id: 'u3',
    content:
      "Working on a new design system. Here's a sneak peek of our component library 👩‍💻",
    user: users[2],
    created_at: '2025-03-15T13:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p4',
    user_id: 'u4',
    content: 'TypeScript + React Native is the perfect combo! Who else agrees?',
    user: users[3],
    created_at: '2025-03-15T14:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p5',
    user_id: 'u5',
    content:
      '@mike.tech Absolutely! Type safety has saved me countless hours of debugging.',
    user: users[4],
    created_at: '2025-03-15T14:15:00.000Z',
    parent_id: 'p4',
    parent: null,
    replies: [],
  },
  {
    id: 'p6',
    user_id: 'u1',
    content:
      "Who's going to React Native Conf this year? Would love to meet up! 🤝",
    user: users[0],
    created_at: '2025-03-15T15:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p7',
    user_id: 'u3',
    content: "@jennawong I'll be there! Let's definitely connect.",
    user: users[2],
    created_at: '2025-03-15T15:10:00.000Z',
    parent_id: 'p6',
    parent: null,
    replies: [],
  },
  {
    id: 'p8',
    user_id: 'u2',
    content:
      'Just published my first npm package for React Native animations! Check it out: react-native-smooth-animations',
    user: users[1],
    created_at: '2025-03-15T16:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p9',
    user_id: 'u4',
    content:
      'TIL: You can use React Native Web to run your mobile app in the browser! Game changer 🎮',
    user: users[3],
    created_at: '2025-03-15T17:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p10',
    user_id: 'u5',
    content:
      'Sharing my VS Code setup for React Native development. Thread below 🧵',
    user: users[4],
    created_at: '2025-03-15T18:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p11',
    user_id: 'u5',
    content:
      '1/ First, install these essential extensions:\n- React Native Tools\n- ESLint\n- Prettier\n- Auto Import',
    user: users[4],
    created_at: '2025-03-15T18:01:00.000Z',
    parent_id: 'p10',
    parent: null,
    replies: [],
  },
  {
    id: 'p12',
    user_id: 'u3',
    content:
      'Anyone else excited about the new React Native architecture? The performance improvements are incredible! 📱✨',
    user: users[2],
    created_at: '2025-03-15T19:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p13',
    user_id: 'u1',
    content:
      '@sarah.smith The new architecture is amazing! Have you migrated any production apps yet?',
    user: users[0],
    created_at: '2025-03-15T19:15:00.000Z',
    parent_id: 'p12',
    parent: null,
    replies: [],
  },
  {
    id: 'p14',
    user_id: 'u2',
    content:
      "Pro tip: Use React Native Performance Monitor to track your app's performance metrics in development.",
    user: users[1],
    created_at: '2025-03-15T20:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p15',
    user_id: 'u4',
    content:
      "Just achieved 60 FPS on our app's most complex screen! 🎉 Optimization tips coming soon...",
    user: users[3],
    created_at: '2025-03-15T21:00:00.000Z',
    parent_id: null,
    parent: null,
    replies: [],
  },
];

// Add replies to posts
posts.forEach((post) => {
  if (post.parent_id) {
    const parentPost = posts.find((p) => p.id === post.parent_id);
    if (parentPost) {
      parentPost.replies.push(post);
      post.parent = parentPost;
    }
  }
});

export default {
  users,
  posts,
};
