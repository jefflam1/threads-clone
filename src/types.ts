export type User = {
  id: string;
  username: string;
  name: string;
  image: string;
};

export type Post = {
  id: string;
  user_id: string;
  content: string;
  user: User;
  createdAt: string;
  parent_id: string | null;
  parent: Post | null;
  replies: Post[];
};
