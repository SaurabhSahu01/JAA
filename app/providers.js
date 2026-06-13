'use client';

import { ProfileProvider } from '@/components/common/ProfileContext';
import { LanguageProvider } from '@/components/common/LanguageContext';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Providers({ children }) {
  const pathname = usePathname();

  return (
    <ProfileProvider>
      <LanguageProvider>
        <AnimatePresence mode="wait" initial={false}>
          {/* We use a div instead of cloning elements for framer-motion in App Router */}
          <div key={pathname} className="min-h-screen">
            {children}
          </div>
        </AnimatePresence>
      </LanguageProvider>
    </ProfileProvider>
  );
}
