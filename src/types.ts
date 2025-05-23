export type User = {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
};

export type Post = {
  id: string;
  user_id: string;
  content: string;
  user: User;
  created_at: string;
  parent_id: string | null;
  parent: Post | null;
  replies: Post[];
};
