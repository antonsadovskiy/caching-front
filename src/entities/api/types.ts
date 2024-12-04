export type MessageType = {
  messageinfo: string;
  date: string;
  receiveremail: string;
};
export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
