'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const eventsList = [
    {
        id: "alumni-meet-2026",
        title: "24th JNU Alumni Meet & Dinner",
        date: "Saturday, 18 April 2026",
        time: "6:30 PM onwards",
        venue: "Convention Centre, JNU Campus, New Delhi",
        image: "/events/alumni-meet-poster.jpg",
        description: "The official annual JNU Alumni Meet. Reconnect with old friends, network with distinguished alumni, and celebrate our shared legacy.",
        badge: "Featured Event",
        badgeColor: "bg-jnu-gold/10 text-jnu-gold border-jnu-gold/20"
    }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 }
  })
};

export default function EventsIndex() {
    return (
        <>
            <Header />
            <main className="min-h-screen relative overflow-hidden py-16 px-6 md:px-10">
                {/* Background */}
                <div className="absolute inset-0 bg-mesh-gradient"></div>
                <div className="absolute inset-0 dot-grid opacity-30"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Calendar</span>
                        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-jnu-blue mt-3">
                            Alumni Events
                        </h1>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                            Stay engaged with the community through academic conferences, reunions, and networking dinners.
                        </p>
                    </motion.div>

                    {/* Events List */}
                    <div className="space-y-12">
                        {eventsList.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                custom={index}
                                className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-gray-200/50 shadow-glass-lg"
                            >
                                {/* Event Image */}
                                <div className="lg:col-span-5 h-[280px] lg:h-full relative overflow-hidden bg-gray-900 group">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
                                </div>

                                {/* Event Info */}
                                <div className="lg:col-span-7 p-6 lg:p-10 space-y-6 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${event.badgeColor}`}>
                                                {event.badge}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-jnu-blue leading-tight mb-3">
                                            {event.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                                            {event.description}
                                        </p>

                                        {/* Event Meta */}
                                        <div className="space-y-3 border-t border-gray-100 pt-4">
                                            <div className="flex items-center text-sm text-gray-500 gap-2">
                                                <span className="text-jnu-gold">📅</span>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 gap-2">
                                                <span className="text-jnu-gold">🕒</span>
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 gap-2">
                                                <span className="text-jnu-gold">📍</span>
                                                <span>{event.venue}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Link 
                                            href={`/events/${event.id}`}
                                            className="btn-primary inline-flex items-center gap-2"
                                        >
                                            View Details & Register
                                            <span>&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
