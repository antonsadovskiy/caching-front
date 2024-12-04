import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import App from '../App.tsx';
import { UsersPage } from '../pages/users-page';
import { UserPage } from '../pages/user-page';
import { PostsPage } from '../pages/posts-page';
import { PhotosPage } from '../pages/photos-page';
import { CommentsPage } from '../pages/comments-page';
import { TodosPage } from '../pages/todos-page';

import { routes } from './routes.ts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.root} element={<App />}>
      <Route path={routes.root} element={<Navigate to={routes.posts} />} />

      <Route path={routes.posts} element={<PostsPage />} />
      <Route path={routes.photos} element={<PhotosPage />} />
      <Route path={routes.comments} element={<CommentsPage />} />
      <Route path={routes.todos} element={<TodosPage />} />

      <Route path={routes.users} element={<UsersPage />} />
      <Route path={routes.user} element={<UserPage />} />
    </Route>,
  ),
);
