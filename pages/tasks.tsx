import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { checkRef } from '../firebase';
import { Button } from 'antd';

const Tasks: React.FC = () => {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    checkRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          lastname: items[item].lastname,
        });
      }
      setList(newState);
    });
    return () => {};
  }, []);

  return (
    <MainLayout title="Tasks">
      <h1>Tasks page</h1>
      <div>
        {list.map((user: any) => (
          <h3 key={user.id}>
            {user.name} {user.lastname}
            <span> - </span>
            <Button onClick={() => checkRef.child(user.id).remove()} type="default" danger>
              X
            </Button>
          </h3>
        ))}
      </div>
    </MainLayout>
  );
};

export default Tasks;
