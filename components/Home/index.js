'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Milestones from './Milestones';
import Testimonials from './Testimonials';
import { useLanguage } from '@/components/common/LanguageContext';

const Canvas3D = dynamic(() => import('@/components/Canvas3D'), { ssr: false });

/* ---- Animation Variants ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }
  })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ---- Data ---- */
const famousAlumni = [
  { name: "Dr. S. Jaishankar", role: "Minister of External Affairs", img: "/jnu/SJai.webp" },
  { name: "Nirmala Sitharaman", role: "Minister of Finance", img: "/jnu/nirmala.webp" },
  { name: "Abhijit Banerjee", role: "Nobel Laureate (Economics)", img: "/jnu/ABan.webp" },
  { name: "Santishree D. Pandit", role: "Vice-Chancellor, JNU", img: "/jnu/santi.webp" },
  { name: "Sitaram Yechury", role: "Political Leader & CPI(M)", img: "/icons/profileIcon.webp" },
  { name: "Prakash Karat", role: "Former CPI(M) General Secy", img: "/icons/profileIcon.webp" },
  { name: "Amitabh Mattoo", role: "International Relations Scholar", img: "/icons/profileIcon.webp" },
  { name: "Nivedita Menon", role: "Political Theorist & Author", img: "/icons/profileIcon.webp" },
];



const features = [
  {
    title: "Global Feeds",
    desc: "Stay updated on campus news, research breakthroughs, and alumni achievements worldwide.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
    ),
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-jnu-blue",
    link: "/feeds",
  },
  {
    title: "Exclusive Events",
    desc: "From reunions to guest lectures—never miss a networking opportunity or milestone celebration.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    color: "from-red-500/10 to-red-600/5",
    iconColor: "text-jnu-red",
    link: "/events",
  },
  {
    title: "Mentorship Network",
    desc: "Connect with industry leaders, seek guidance, and discover career opportunities within the alumni family.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    color: "from-amber-500/10 to-amber-600/5",
    iconColor: "text-jnu-gold",
    link: "/about",
  },
  {
    title: "Photo Gallery",
    desc: "Relive memories through curated collections of campus life, alumni meets, and cultural events.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" /></svg>
    ),
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
    link: "/gallery",
  },
];

/* ---- 3D Tilt Hook ---- */
function useCard3D() {
  const ref = React.useRef(null);
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    }
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

/* ---- 3D Tilt Card Component ---- */
function TiltCard({ children, className = '' }) {
  const { ref, handleMouseMove, handleMouseLeave } = useCard3D();
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

/* ---- Animated Counter ---- */
function AnimatedCounter({ value, label, icon }) {
  const [count, setCount] = React.useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-2xl mb-2 block">{icon}</span>
      <span className="text-4xl md:text-5xl font-display font-bold text-jnu-blue">
        {count.toLocaleString()}{suffix}
      </span>
      <p className="text-gray-500 text-sm font-medium mt-2">{label}</p>
    </div>
  );
}

/* ======================================
   HOME COMPONENT
   ====================================== */
export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const stats = [
    { label: t('alumni_worldwide'), value: "50,000+", icon: "🌍" },
    { label: t('meets_held'), value: "24", icon: "🎓" },
    { label: t('active_chapters'), value: "45+", icon: "🤝" },
  ];

  return (
    <div className="font-sans text-gray-900 selection:bg-jnu-blue/10 selection:text-jnu-blue">

      {/* ========== 1. HERO SECTION ========== */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-mesh-gradient"></div>
        <div className="absolute inset-0 dot-grid opacity-40"></div>

        {/* Floating 3D decorative shapes */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-72 h-72 bg-gradient-to-br from-jnu-blue/8 to-jnu-blue/3 rounded-3xl hidden lg:block"
          style={{ transform: 'rotateX(10deg) rotateY(-10deg)', perspective: '1000px' }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[25%] w-40 h-40 bg-gradient-to-br from-jnu-gold/10 to-jnu-gold/3 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 left-[5%] w-24 h-24 bg-gradient-to-br from-jnu-red/8 to-transparent rounded-2xl hidden lg:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jnu-blue/5 border border-jnu-blue/10 text-jnu-blue text-xs font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 bg-jnu-gold rounded-full animate-pulse-soft"></span>
                  Est. 2002 — Connecting JNUites Globally
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-display font-extrabold leading-[1.05] tracking-tight">
                <span className="text-jnu-blue">{t('connect')}</span><br/>
                <span className="text-jnu-blue">{t('empower')}</span><br/>
                <span className="text-gradient-hero">{t('inspire')}</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-xl text-gray-500 max-w-lg leading-relaxed">
                {t('hero_desc')}
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/join" className="btn-primary text-center">
                  {t('join_btn')}
                </Link>
                <Link href="/feeds" className="btn-secondary text-center group">
                  {t('explore_btn')}
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Interactive 3D Diorama */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative hidden lg:block w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-jnu-blue/5 to-jnu-gold/5 rounded-[2rem] blur-3xl scale-110"></div>
              <Canvas3D className="relative z-10" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ========== STATS BAR ========== */}
      <section className="relative py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* ========== 2. GALLERY OF FAME ========== */}
      <section className="py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Our Pride</span>
            <h2 className="section-heading mt-3">Gallery of Fame</h2>
            <p className="section-subheading">
              Celebrating the remarkable achievements and global impact of our distinguished alumni.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {famousAlumni.map((alumni, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <TiltCard className="card-3d p-8 text-center group cursor-default">
                  <div className="relative mb-6 mx-auto w-fit">
                    <div className="absolute inset-0 bg-jnu-blue/10 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <img
                      src={alumni.img}
                      alt={alumni.name}
                      className="w-28 h-28 rounded-full object-cover relative z-10 ring-4 ring-white shadow-lg group-hover:ring-jnu-blue/20 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-display font-bold text-jnu-blue mb-1">{alumni.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{alumni.role}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mt-14"
          >
            <Link href="/alumni" className="btn-secondary inline-block">
              View All Notable Alumni &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== 3. OUR STORY ========== */}
      <section className="py-28 bg-gradient-to-b from-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-jnu-blue/5 to-jnu-gold/5 rounded-[2rem] blur-2xl"></div>
            <img src="/jnu/jyoti.webp" alt="JNU Alumni Founder" className="relative rounded-2xl shadow-card-3d w-full object-cover" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Our Journey</motion.span>
            <motion.h2 variants={fadeUp} className="section-heading mt-3 mb-8">The Story Behind JAA</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded by the visionary <strong className="text-jnu-blue">Mr. Jyoti Kumar Singh</strong>, the JNU Alumni Association began as a passion project to unite a scattered diaspora of brilliant minds.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed mb-8">
              What started as one person&apos;s dream quickly resonated with the community. Today, JAA is a thriving ecosystem where alumni gather to give back, network, and inspire the next generation of JNUites.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== MILESTONES TIMELINE ========== */}
      <Milestones />

      {/* ========== 4. PLATFORM FEATURES (3D Bento Grid) ========== */}
      <section className="py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Platform</span>
            <h2 className="section-heading mt-3">Everything You Need</h2>
            <p className="section-subheading">
              A comprehensive suite of tools designed to keep you connected, informed, and engaged.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Link href={feature.link}>
                  <TiltCard className={`card-3d p-8 md:p-10 bg-gradient-to-br ${feature.color} group cursor-pointer h-full`}>
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-jnu-blue mb-3 group-hover:text-jnu-blue-light transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-jnu-blue opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      Explore <span>&rarr;</span>
                    </span>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TESTIMONIALS CAROUSEL ========== */}
      <Testimonials />

      {/* ========== 5. CTA BANNER ========== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-90"></div>
        <div className="absolute inset-0 dot-grid opacity-10"></div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Reconnect with<br/>Your JNU Family?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of JNU alumni who are already building bridges, sharing knowledge, and creating opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="px-10 py-4 bg-white text-jnu-blue font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 text-center">
              Join Association Now
            </Link>
            <Link href="/login" className="px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all text-center">
              Member Login
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}