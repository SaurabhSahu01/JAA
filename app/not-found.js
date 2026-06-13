'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className='min-h-[80vh] flex items-center justify-center relative overflow-hidden px-6 pt-20'>
          {/* Background */}
          <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

          {/* Floating shapes */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[20%] w-32 h-32 bg-jnu-blue/5 rounded-3xl hidden md:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-[15%] w-24 h-24 bg-jnu-gold/8 rounded-full hidden md:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            {/* 3D Rotating 404 */}
            <motion.div
              animate={{ rotateY: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
              style={{ perspective: '800px' }}
            >
              <h1 className='text-[120px] md:text-[180px] font-display font-black text-gradient-hero leading-none tracking-tighter'>
                404
              </h1>
            </motion.div>

            <h2 className='text-2xl md:text-3xl font-display font-bold text-jnu-blue mb-4'>
              Oops! Lost in the Campus
            </h2>
            <p className='text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed'>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className='btn-primary'>
                Back to Home
              </Link>
              <Link href="/contact" className='btn-secondary'>
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
