import React from 'react';
import AboutUs from '@/components/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | JAA',
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
