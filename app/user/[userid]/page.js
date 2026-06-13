'use client';

import React, { use } from 'react';
import User from '@/components/User';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UserPage({ params }) {
  const resolvedParams = use(params);
  const userid = resolvedParams.userid;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <User useruid={userid} />
      </main>
      <Footer />
    </>
  );
}
