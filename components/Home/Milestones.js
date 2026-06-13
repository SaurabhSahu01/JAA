'use client';

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2002',
    title: 'Association Founded',
    desc: 'JNU Alumni Association (Regd.) officially established to bring the global diaspora of JNUites together.',
    icon: '🏛️'
  },
  {
    year: '2010',
    title: '5,000 Members',
    desc: 'A major growth milestone, expanding networks across major metro cities in India.',
    icon: '📈'
  },
  {
    year: '2018',
    title: 'Global Chapters',
    desc: 'Formed active international chapters in 10+ countries, including the US, UK, and Singapore.',
    icon: '🌍'
  },
  {
    year: '2023',
    title: 'Digital Portal Launch',
    desc: 'Launched our modern web platform, offering online profiles, global feeds, and secure messaging.',
    icon: '💻'
  },
  {
    year: '2026',
    title: '24th Annual Meet',
    desc: 'Celebrating our largest gathering yet at the JNU Convention Centre, fostering lifelong connections.',
    icon: '✨'
  }
];

export default function Milestones() {
  return (
    <section className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-jnu-blue mt-3">Milestones & History</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            From a simple vision in 2002 to a thriving global ecosystem connecting thousands today.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-200/80 ml-4 md:ml-auto md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:bg-gray-200/80">
          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="mb-16 last:mb-0 relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-1.5 md:left-1/2 md:translate-x-[-50%] w-4 h-4 bg-jnu-gold rounded-full border-4 border-white shadow-md z-20"></div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative p-6 glass-card border border-gray-200/50 shadow-glass-sm max-w-md ${
                    isEven ? 'md:justify-self-end md:text-right' : 'md:col-start-2'
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-jnu-gold font-display font-black text-xl">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-jnu-blue mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
