import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Table } from 'antd';

import { Api } from '../../entities/api';
import { MessageType } from '../../entities/api/types.ts';
import styles from '../users-page/styles.module.css';

export const UserPage = () => {
  const params = useParams<{ id: string }>();

  const [messages, setMessages] = useState<MessageType[]>([]);

  const userId = params.id;

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const res = await Api.getUserMessages(Number(userId));
          setMessages(res.data);
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [userId]);

  const columns = [
    {
      title: 'Message Text',
      dataIndex: 'messageinfo',
      key: 'messageinfo',
      width: '10%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '30%',
    },
    {
      title: 'Receiver Email',
      dataIndex: 'receiveremail',
      key: 'receiveremail',
      width: '30%',
    },
  ];

  return (
    <div>
      <Table className={styles.table} dataSource={messages} columns={columns} />
    </div>
  );
};
