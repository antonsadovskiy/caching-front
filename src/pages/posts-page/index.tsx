import { useState } from 'react';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { PostType } from '../../entities/api/types.ts';
import { Api } from '../../entities/api';

const columns: ColumnsType<PostType> = [
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId',
    width: '10%',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '30%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '30%',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
    width: '30%',
  },
];

export const PostsPage = () => {
  const [posts] = useState<PostType[]>([]);

  async function fetchPosts() {
    try {
      await Api.getUsers();
      // setPosts(data.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Button onClick={fetchPosts}>Запросить посты</Button>
      <Table style={{ width: '100%' }} columns={columns} dataSource={posts} />
    </div>
  );
};
