import React from 'react';
import Join from '@/components/Join';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Join Us | JAA',
};

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Join />
      </main>
      <Footer />
    </>
  );
}
