import React from 'react';
import Messages from '@/components/Messages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Messages | JAA',
};

export default function MessagesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Messages />
      </main>
      <Footer />
    </>
  );
}
