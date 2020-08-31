import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import HomePage from './home';
import AuthPage from './authorisation';
import { nameRef } from '../firebase';

type Props = {
  name: string;
};

const Home: React.FC<Props> = ({ name }) => {
  const [isAuthorisation, seIsAuthorisation] = useState<boolean>(false);
  const authChange = () => {
    seIsAuthorisation(!isAuthorisation);
  };

  // @ts-ignore
  return (
    <>
      {isAuthorisation ? (
        <HomePage name={name} authChange={authChange} />
      ) : (
        <AuthPage authChange={authChange} />
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let nameText = '';
  nameRef.on('value', (snapshot) => {
    nameText = snapshot.val();
  });
  return {
    props: {
      name: nameText || 'World',
    },
  };
};
