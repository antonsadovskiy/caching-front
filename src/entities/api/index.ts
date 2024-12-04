import {
  CommentType,
  MessageType,
  PhotoType,
  PostType,
  TodoType,
  UserType,
} from './types.ts';

export class Api {
  public static async getAllUsers() {
    const res = await fetch(`http://localhost:3000/users`);
    return (await res.json()) as { data: UserType[]; meta: string };
  }

  public static async addUser(userId: string, name: string, email: string) {
    fetch('http://localhost:3000/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        name,
        email,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  public static async getUserMessages(id: number) {
    const res = await fetch(`http://localhost:3000/users/${id}/messages`);
    return (await res.json()) as { data: MessageType[]; meta: string };
  }

  public static async deleteUser(id: number) {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    });
    return (await res.json()) as { data: UserType[]; message: string };
  }

  public static async getPosts() {
    const res = await fetch(`http://localhost:3000/posts`);
    return (await res.json()) as { data: PostType[]; meta: string };
  }

  public static async getPhotos() {
    const res = await fetch(`http://localhost:3000/photos`);
    return (await res.json()) as { data: PhotoType[]; meta: string };
  }

  public static async getComments() {
    const res = await fetch(`http://localhost:3000/comments`);
    return (await res.json()) as { data: CommentType[]; meta: string };
  }

  public static async getTodos() {
    const res = await fetch(`http://localhost:3000/todos`);
    return (await res.json()) as { data: TodoType[]; meta: string };
  }

  public static async getUsers() {
    const res = await fetch(`http://localhost:3000/users`);
    return await res.json();
  }
}
