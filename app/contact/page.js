import React from 'react';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | JAA',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
