import FormEl from './form';
import MainLayout from '../components/MainLayout';
import React from 'react';

interface Props {
  name: string;
  authChange: () => void;
}

const HomePage: React.FC<Props> = ({ name, authChange }) => {
  return (
    <>
      <MainLayout title={'Home page'} authChange={authChange}>
        <h1>Hello {name}!</h1>
        <FormEl />
      </MainLayout>
    </>
  );
};

export default HomePage;
