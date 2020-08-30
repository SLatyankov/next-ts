import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';

interface Props {
  children?: React.ReactNode;
  title: string;
  authChange?: () => void;
}

const MainLayout: React.FC<Props> = ({ children, title, authChange }) => {
  return (
    <>
      <Head>
        <title>Next-TS/{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className={'nav'}>
        <Link href={'home'}>
          <Button type="primary">Home</Button>
        </Link>
        <Link href={'about'}>
          <Button type="primary">About</Button>
        </Link>
        <Link href={'tasks'}>
          <Button type="primary">Tasks</Button>
        </Link>
        <Link href={'/'}>
          <Button type="primary" onClick={authChange}>
            Logout
          </Button>
        </Link>
      </nav>
      <main className={'main'}>{children}</main>
    </>
  );
};

export default MainLayout;
