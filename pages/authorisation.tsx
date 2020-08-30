import React from 'react';
import { Button } from 'antd';

interface Props {
  authChange: () => void;
}

const AuthPage: React.FC<Props> = ({ authChange }) => {
  return (
    <>
      <div className={'box_auth'}>
        <h2>Authorisation</h2>
        <Button type="primary" htmlType="button" onClick={authChange}>
          Enter
        </Button>
      </div>
    </>
  );
};

export default AuthPage;
