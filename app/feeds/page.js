import React from 'react';
import Feed from '@/components/Feed';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Feed | JAA',
};

export default function FeedPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Feed />
      </main>
      <Footer />
    </>
  );
}
