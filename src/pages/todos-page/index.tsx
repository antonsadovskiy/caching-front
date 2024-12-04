import { useState } from 'react';
import { Button, Input, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { TodoType } from '../../entities/api/types.ts';
import { Api } from '../../entities/api';

const columns: ColumnsType<TodoType> = [
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
    title: 'Completed',
    dataIndex: 'completed',
    key: 'email',
    width: '10%',
    render: (item) => <Input type="checkbox" checked={item} />,
  },
];

export const TodosPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  async function fetchTodos() {
    try {
      const data = await Api.getTodos();
      setTodos(data.data);
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
      <Button onClick={fetchTodos}>Запросить список дела</Button>
      <Table style={{ width: '100%' }} columns={columns} dataSource={todos} />
    </div>
  );
};
