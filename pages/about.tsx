import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { aboutRef } from '../firebase';

const About: React.FC = () => {
  const [about, setAbout] = useState<string>('');
  useEffect(() => {
    aboutRef.on('value', (snapshot) => {
      const text = snapshot.val();
      setAbout(text);
    });
  }, []);

  return (
    <MainLayout title="About">
      <h1>About page</h1>
      <h2>{about}</h2>
    </MainLayout>
  );
};

export default About;
