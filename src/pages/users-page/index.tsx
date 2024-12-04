import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';

import { Api } from '../../entities/api';
import { UserType } from '../../entities/api/types.ts';

import styles from './styles.module.css';

export const UsersPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<UserType[]>([]);
  const [isDeletingConfig, setIsDeletingConfig] = useState<
    {
      id: number;
      isDeleting: boolean;
    }[]
  >([]);

  const fetchData = async () => {
    try {
      const data = await Api.getAllUsers();

      setUsers(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickDelete = async (id: number) => {
    try {
      setIsDeletingConfig((prevState) => [
        ...prevState,
        { id, isDeleting: true },
      ]);
      const res = await Api.deleteUser(id);
      setUsers(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeletingConfig((prevState) =>
        prevState.filter((item) => item.id !== id),
      );
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '30%',

      render: (_: any, record: UserType) => {
        const isDeleting = isDeletingConfig.find(
          (item) => item.id === record.id,
        );

        return (
          <div className={styles.actionButtons}>
            <Button onClick={() => navigate(`/users/${record.id}`)}>
              View
            </Button>
            <Button
              loading={Boolean(isDeleting)}
              danger
              onClick={() => onClickDelete(record.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Button onClick={fetchData}>Refetch data</Button>
      <Table className={styles.table} dataSource={users} columns={columns} />
    </>
  );
};
