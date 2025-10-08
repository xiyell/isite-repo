export interface Forum {
  id: string;
  title: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  commentCount?: number;
}