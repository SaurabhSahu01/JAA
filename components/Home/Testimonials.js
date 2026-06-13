'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "JAA has allowed me to connect with fellow JNUites across the globe. The mentorship network is invaluable and has directly accelerated my research collaborations.",
    author: "Dr. Amit K.",
    batch: "SIS, Batch of '98",
    avatar: "/jnu/Soumen.webp"
  },
  {
    quote: "Reliving campus memories, connecting with seniors, and staying updated on research breakthroughs has never been easier. The platform feels clean, modern, and secure.",
    author: "Priyesh S.",
    batch: "SBT, Batch of '12",
    avatar: "/jnu/David.webp"
  },
  {
    quote: "An amazing platform that truly connects the past, present, and future of JNU. The design reflects JNU's rich legacy while offering modern digital networking.",
    author: "Meera R.",
    batch: "SSS, Batch of '06",
    avatar: "/jnu/Mridula.webp"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Voices of JAA</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-jnu-blue mt-3 mb-16">Alumni Testimonials</h2>

        {/* Carousel Card */}
        <div className="relative h-[250px] md:h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-10 border border-gray-200/50 shadow-glass-md w-full"
            >
              <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
                "{testimonials[activeIdx].quote}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[activeIdx].avatar} 
                  alt={testimonials[activeIdx].author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-jnu-gold/50"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold text-jnu-blue leading-tight">
                    {testimonials[activeIdx].author}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {testimonials[activeIdx].batch}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'bg-jnu-gold scale-125' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
