import { ColumnsType } from 'antd/es/table';
import { Button, Table } from 'antd';
import { useState } from 'react';

import { CommentType } from '../../entities/api/types.ts';
import { Api } from '../../entities/api';

const columns: ColumnsType<CommentType> = [
  {
    title: 'Post Id',
    dataIndex: 'postId',
    key: 'postId',
    width: '10%',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '30%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '10%',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
    width: '30%',
  },
];

export const CommentsPage = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  async function fetchComments() {
    try {
      const data = await Api.getComments();
      setComments(data.data);
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
      <Button onClick={fetchComments}>Запросить комментарии</Button>
      <Table
        style={{ width: '100%' }}
        columns={columns}
        dataSource={comments}
      />
    </div>
  );
};
