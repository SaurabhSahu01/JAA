'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { UserCircleIcon, PowerIcon, UserIcon } from "@heroicons/react/24/solid"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import cookieCutter from "cookie-cutter"
import { deleteCookie } from '@/src/utils/login'
import { useProfile } from '@/components/common/ProfileContext';
import { useLanguage } from '@/components/common/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
    const { profile, clearProfile } = useProfile();
    const router = useRouter();
    const pathname = usePathname();
    const { locale, changeLocale, t } = useLanguage();
    const [userDropdown, setUserDropdown] = React.useState(false);
    const [userToken, setUserToken] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        if (cookieCutter.get('userToken')) {
            setUserToken(true);
        } else {
            setUserToken(false);
        }
    }, [])

    // Removed the complex useEffect that was duplicating the profile fetch logic
    // Now the ProfileProvider handles fetching and caching the profile automatically

    // Scroll listener for navbar background
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('feed'), path: '/feeds' },
        { name: t('gallery'), path: '/gallery' },
        { name: t('about'), path: '/about' },
        { name: t('contact'), path: '/contact' },
    ];

    const handleLogout = () => {
        deleteCookie('userToken');
        deleteCookie('uid');
        deleteCookie('refreshToken');
        deleteCookie('profileSet');
        clearProfile();
        router.push('/');
        setTimeout(() => window.location.reload(), 500);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-xl shadow-glass border-b border-gray-200/50' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
                    {/* Logo */}
                    <Link href="/" className='flex items-center gap-3 group'>
                        <div className="relative">
                            <div className="absolute inset-0 bg-jnu-blue/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                                src="/header/JNUnewLogo.png"
                                width={42}
                                height={42}
                                alt="JNU logo"
                                className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className='text-lg font-display font-bold text-jnu-blue leading-tight'>JNU Alumni</span>
                            <span className='text-[10px] font-medium text-gray-400 tracking-widest uppercase'>Association</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className='hidden md:flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                                    pathname === link.path
                                        ? 'text-jnu-blue bg-jnu-blue/5'
                                        : 'text-gray-600 hover:text-jnu-blue hover:bg-gray-50'
                                }`}
                            >
                                {link.name}
                                {pathname === link.path && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-jnu-blue rounded-full"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className='hidden md:flex items-center gap-3 relative'>
                        {/* Language Switcher */}
                        <button 
                            onClick={() => changeLocale(locale === 'en' ? 'hi' : 'en')}
                            className="px-3 py-1.5 mr-2 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 text-xs font-bold text-jnu-blue transition-all border border-gray-200/50"
                        >
                            {locale === 'en' ? 'हिन्दी' : 'EN'}
                        </button>
                        {userToken ? (
                            <>
                                {profile?.photo ? (
                                    <button onClick={() => setUserDropdown(!userDropdown)} className="relative group">
                                        <div className="absolute inset-0 bg-jnu-gold/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <img src={`${profile.photo}`} alt="userpic" className='w-10 h-10 rounded-full cursor-pointer ring-2 ring-jnu-blue/20 group-hover:ring-jnu-blue/50 transition-all relative z-10'/>
                                    </button>
                                ) : (
                                    <button onClick={() => setUserDropdown(!userDropdown)} className="relative group">
                                        <UserCircleIcon className='h-10 w-10 text-jnu-blue/70 cursor-pointer group-hover:text-jnu-blue transition-colors' />
                                    </button>
                                )}
                                <AnimatePresence>
                                    {userDropdown && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute top-14 right-0 w-44 flex flex-col gap-1 p-2 glass-card z-50'
                                        >
                                            <li>
                                                <button className='w-full text-left px-4 py-2.5 text-gray-600 hover:text-jnu-blue hover:bg-jnu-blue/5 rounded-xl flex items-center gap-3 text-sm font-medium transition-all' onClick={() => { router.push('/profile'); setUserDropdown(false); }}>
                                                    <UserIcon className='h-4 w-4' /> My Profile
                                                </button>
                                            </li>
                                            <li>
                                                <button className='w-full text-left px-4 py-2.5 text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-3 text-sm font-medium transition-all' onClick={handleLogout}>
                                                    <PowerIcon className='h-4 w-4' /> Sign Out
                                                </button>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className='px-5 py-2.5 text-jnu-blue font-semibold rounded-full hover:bg-jnu-blue/5 transition-all text-sm'>
                                    Sign In
                                </Link>
                                <Link href="/join" className='btn-primary !py-2.5 !px-6 text-sm !shadow-md'>
                                    Join Association
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-jnu-blue"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.path}
                                        className={`text-2xl font-display font-bold transition-colors ${
                                            pathname === link.path ? 'text-jnu-blue' : 'text-gray-400 hover:text-jnu-blue'
                                        }`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col items-center gap-4 mt-8"
                            >
                                {userToken ? (
                                    <>
                                        <Link href="/profile" className="btn-primary !text-base" onClick={() => setMobileOpen(false)}>
                                            My Profile
                                        </Link>
                                        <button className="text-red-500 font-semibold text-sm" onClick={() => { handleLogout(); setMobileOpen(false); }}>
                                            Sign Out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="btn-secondary !text-base" onClick={() => setMobileOpen(false)}>
                                            Sign In
                                        </Link>
                                        <Link href="/join" className="btn-primary !text-base" onClick={() => setMobileOpen(false)}>
                                            Join Association
                                        </Link>
                                    </>
                                )}
                                {/* Mobile Language Switcher */}
                                <button 
                                    onClick={() => { changeLocale(locale === 'en' ? 'hi' : 'en'); setMobileOpen(false); }}
                                    className="px-6 py-2.5 mt-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-bold text-jnu-blue transition-all border border-gray-200 w-full text-center"
                                >
                                    {locale === 'en' ? 'हिन्दी (Hindi)' : 'English (EN)'}
                                </button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer for fixed header */}
            <div className="h-[72px]"></div>
        </>
    )
}

export default Header