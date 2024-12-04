import { useState } from 'react';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { PhotoType } from '../../entities/api/types.ts';
import { Api } from '../../entities/api';

const columns: ColumnsType<PhotoType> = [
  {
    title: 'Album Id',
    dataIndex: 'albumId',
    key: 'albumId',
    width: '10%',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '40%',
  },

  {
    title: 'Big cover',
    dataIndex: 'url',
    key: 'bigCover',
    width: '30%',
    render: (_, record) => (
      <img src={record.url} alt={record.title} width={100} />
    ),
  },
  {
    title: 'Small cover',
    dataIndex: 'thumbnailUrl',
    key: 'smallCover',
    width: '10%',
    render: (_, record) => (
      <img src={record.thumbnailUrl} alt={record.title} width={30} />
    ),
  },
];

export const PhotosPage = () => {
  const [posts, setPosts] = useState<PhotoType[]>([]);

  async function fetchPosts() {
    try {
      const data = await Api.getPhotos();
      setPosts(data.data);
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
      <Button onClick={fetchPosts}>Запросить фото</Button>
      <Table style={{ width: '100%' }} columns={columns} dataSource={posts} />
    </div>
  );
};
