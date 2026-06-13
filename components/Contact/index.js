'use client';

import React from 'react';
import cookieCutter from "cookie-cutter";
import Loader from '../common/Loader';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Contact() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [state, setvalue] = React.useState({
    firstName: "", lastName: "", number: "", email: "", message: "",
  });

  const handleChange = (e) => {
    setvalue({ ...state, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/contact', {
      method: "POST",
      headers: {
        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then((res) => res.json()).then(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => router.push('/'), 2000);
    }).catch(() => {
      setLoading(false);
    });
  }

  const contactInfo = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
      label: "+91-9717129297",
      href: "tel:+919717129297",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
      label: "connect@jnualumniassociation.com",
      href: "mailto:connect@jnualumniassociation.com",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />,
      secondIcon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
      label: "JNU, New Delhi — 110067",
      href: "https://maps.google.com?q=Jawaharlal+Nehru+University+New+Delhi",
    },
  ];

  return (
    <div className='min-h-screen relative flex items-center justify-center py-16 px-6'>
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

      {loading && (
        <div className='fixed inset-0 z-[200] backdrop-blur-md bg-white/40 flex items-center justify-center'>
          <Loader color="#1B2D56" loading={loading} size={70} />
        </div>
      )}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Reach Out</span>
          <h1 className="section-heading mt-2">Contact Us</h1>
          <p className="section-subheading">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          {/* Contact Info Card */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className='lg:col-span-2 gradient-animate rounded-2xl p-8 md:p-10 text-white relative overflow-hidden'
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>

            <h3 className='text-2xl font-display font-bold mb-2'>Contact Information</h3>
            <p className='text-white/60 text-sm mb-10'>Get in touch with the JNU Alumni Association</p>

            <div className='flex flex-col gap-8'>
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} className='flex items-center gap-4 text-white/80 hover:text-white transition-colors group'>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      {info.icon}
                      {info.secondIcon}
                    </svg>
                  </div>
                  <span className='text-sm font-medium'>{info.label}</span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-12">
              <a href="https://www.facebook.com/profile.php?id=100095223584273" target="_blank" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://instagram.com/jnualumniassociation" target="_blank" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className='lg:col-span-3'
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-16 text-center"
              >
                <span className="text-5xl mb-6 block">✅</span>
                <h3 className="text-2xl font-display font-bold text-jnu-blue mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form className='glass-card p-8 md:p-10' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block' htmlFor="firstName">First Name</label>
                    <input className='w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 outline-none transition-all' onChange={handleChange} value={state.firstName} id='firstName' type="text" placeholder="John" required />
                  </div>
                  <div>
                    <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block' htmlFor="lastName">Last Name</label>
                    <input className='w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 outline-none transition-all' onChange={handleChange} value={state.lastName} id='lastName' type="text" placeholder="Doe" required />
                  </div>
                </div>

                <div className='mb-6'>
                  <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block' htmlFor="email">Email</label>
                  <input className='w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 outline-none transition-all' onChange={handleChange} value={state.email} id='email' type="email" placeholder="your@email.com" required />
                </div>

                <div className='mb-6'>
                  <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block' htmlFor="number">Mobile</label>
                  <input className='w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 outline-none transition-all' onChange={handleChange} value={state.number} id='number' type="tel" placeholder="+91 9876543210" required />
                </div>

                <div className='mb-8'>
                  <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block' htmlFor="message">Message</label>
                  <textarea className='w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 outline-none transition-all resize-none' onChange={handleChange} value={state.message} placeholder='Tell us how we can help...' id='message' rows={4} required />
                </div>

                <button type='submit' className='btn-primary w-full sm:w-auto'>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact