'use client';

import React from 'react';
import { developmentimg, exclusiveimg } from './img';
import MemberCard from './MemberCard';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

function About() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>

      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-90"></div>
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">Our Foundation</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-3 mb-6">About JAA</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Connecting alumni, building bridges, and preserving the spirit of Jawaharlal Nehru University.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-display font-bold text-jnu-blue mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-jnu-blue/5 flex items-center justify-center text-lg">🎓</span>
              Our Legacy
            </h2>
            <p className='text-gray-600 leading-relaxed text-[15px]'>
              Our JNU days echo within us, weaving our paths and culminating in our esteemed status as JNU alumni. As we embark on a lifelong journey of learning, we remain connected, cherishing the unforgettable memories formed during our pivotal years at JNU.
            </p>
            <p className='text-gray-600 leading-relaxed text-[15px] mt-4'>
              To honor this legacy, let&apos;s pledge to contribute our time and efforts to enhance our alma mater, ensuring JNU thrives as a beacon of knowledge and growth. Together, we can create a nurturing environment that elevates JNU to new heights of excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-display font-bold text-jnu-blue mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-jnu-gold/10 flex items-center justify-center text-lg">🌟</span>
              Our Mission
            </h2>
            <p className='text-gray-600 leading-relaxed text-[15px]'>
              Our esteemed alumni, including social scientists, civil servants, literary critics, media experts, foreign language specialists, journalists, political leaders, social activists, technologists, managers, and entrepreneurs, continue to make significant contributions to society&apos;s betterment.
            </p>
            <p className='text-gray-600 leading-relaxed text-[15px] mt-4'>
              JAA aims to broaden our base of Life Members, fostering enduring connections between alumni and JNU. Acquiring Life Membership serves as a testament to our continued association with this great institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Leadership</span>
          <h2 className="section-heading mt-3">Executive Committee</h2>
          <p className="section-subheading">The visionaries guiding the JNU Alumni Association forward.</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className='flex flex-wrap gap-4 items-center justify-center'
        >
          {exclusiveimg.map((data, index) => (
            <motion.div key={index} variants={fadeUp}>
              <MemberCard data={data} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Development Committee */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Building the Future</span>
          <h2 className="section-heading mt-3">Development Committee</h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className='flex flex-wrap gap-4 items-center justify-center'
        >
          {developmentimg.map((data, index) => (
            <motion.div key={index} variants={fadeUp}>
              <MemberCard data={data} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default About;