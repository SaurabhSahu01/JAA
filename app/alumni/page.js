import React from 'react';
import Alumni from '@/components/Alumni';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Alumni | JAA',
};

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Alumni />
      </main>
      <Footer />
    </>
  );
}
