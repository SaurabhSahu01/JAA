import React from 'react';
import Profile from '@/components/Profile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Profile | JAA',
};

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Profile />
      </main>
      <Footer />
    </>
  );
}
