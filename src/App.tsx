import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import styles from './App.module.css';
import { routes } from './app/routes.ts';

export type DataType =
  | 'photos'
  | 'posts'
  | 'comments'
  | 'albums'
  | 'todos'
  | 'users';

const routesArray: { link: string; label: string }[] = [
  {
    link: routes.posts,
    label: 'Посты',
  },
  {
    link: routes.photos,
    label: 'Фото',
  },
  {
    link: routes.comments,
    label: 'Комментарии',
  },
  {
    link: routes.todos,
    label: 'Список дел',
  },
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        {routesArray.map((route, index) => {
          const isActive = location.pathname === route.link;

          return (
            <Button
              type={isActive ? 'primary' : 'default'}
              key={index}
              onClick={() => navigate(route.link)}
            >
              {route.label}
            </Button>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
