'use client';

import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.4
};

function Layout(props) {
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <>
            <Head>
                <title>{props.title ? "JAA - " + props.title : "JAA"}</title>
                <meta name='description' content='JNU Alumni Association — Connect, Empower, Inspire. A global network of leaders, scholars, and changemakers from Jawaharlal Nehru University.' />
                <link rel='icon' href="/favicon.ico" />
            </Head>

            {/* Floating Background Shapes */}
            <div className="floating-shapes" aria-hidden="true">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className='w-full min-h-screen relative z-10'>
                <Header />
                <motion.main
                    className="w-full min-h-screen"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    {!isHome && (
                        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 pb-2">
                            <button 
                                onClick={() => router.back()} 
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm text-gray-600 hover:text-jnu-blue hover:border-jnu-blue/30 text-sm font-semibold transition-all group"
                            >
                                <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span> Go Back
                            </button>
                        </div>
                    )}
                    {props.children}
                </motion.main>
                <Footer />
            </div>
        </>
    )
}

export default Layout