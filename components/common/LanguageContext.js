'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Nav
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    events: 'Events',
    feed: 'Feed',
    messages: 'Messages',
    profile: 'Profile',
    login: 'Login',
    logout: 'Logout',
    join: 'Join Us',
    
    // Hero
    connect: 'Connect.',
    empower: 'Empower.',
    inspire: 'Inspire.',
    hero_desc: 'Welcome home, JNUites. Stay connected with a global network of leaders, scholars, and changemakers shaping the future.',
    join_btn: 'Join the Network',
    explore_btn: 'Explore Feeds',
    
    // Footer
    footer_desc: 'Official portal for Jawaharlal Nehru University Alumni. Connect, empower, and inspire.',
    quick_links: 'Quick Links',
    contact_info: 'Contact Info',
    
    // Stats
    alumni_worldwide: 'Alumni Worldwide',
    meets_held: 'Alumni Meets Held',
    active_chapters: 'Active Chapters',
  },
  hi: {
    // Nav
    home: 'होम',
    about: 'हमारे बारे में',
    gallery: 'गैलरी',
    events: 'कार्यक्रम',
    feed: 'फीड',
    messages: 'संदेश',
    profile: 'प्रोफ़ाइल',
    login: 'लॉगिन',
    logout: 'लॉगआउत्त',
    join: 'जुड़ें',
    
    // Hero
    connect: 'जुड़ें।',
    empower: 'सशक्त बनें।',
    inspire: 'प्रेरित करें।',
    hero_desc: 'जेएनयू के साथियों का घर में स्वागत है। भविष्य को आकार देने वाले नेताओं, विद्वानों और बदलाव लाने वालों के वैश्विक नेटवर्क से जुड़े रहें।',
    join_btn: 'नेटवर्क से जुड़ें',
    explore_btn: 'फीड्स देखें',
    
    // Footer
    footer_desc: 'जवाहरलाल नेहरू विश्वविद्यालय के पूर्व छात्रों के लिए आधिकारिक पोर्टल। जुड़ें, सशक्त बनाएं और प्रेरित करें।',
    quick_links: 'त्वरित लिंक',
    contact_info: 'संपर्क जानकारी',
    
    // Stats
    alumni_worldwide: 'दुनिया भर में पूर्व छात्र',
    meets_held: 'आयोजित पूर्व छात्र सम्मेलन',
    active_chapters: 'सक्रिय चैप्टर्स',
  }
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'hi')) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale) => {
    if (newLocale === 'en' || newLocale === 'hi') {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  const t = (key) => {
    return translations[locale][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
