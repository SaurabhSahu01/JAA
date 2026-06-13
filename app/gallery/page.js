import React from 'react';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gallery | JAA',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
