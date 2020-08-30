import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import HomePage from './home';
import AuthPage from './authorisation';

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

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const name = query.name instanceof Array ? query.name.join(',') : query.name;
  console.log(query);
  return {
    props: {
      name: name || 'World',
    },
  };
};
