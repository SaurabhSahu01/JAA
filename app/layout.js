import '@/styles/globals.css';
import { Providers } from './providers';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'JNU Alumni Association',
  description: 'Official portal for Jawaharlal Nehru University Alumni',
};

export const viewport = {
  themeColor: '#1B2D56',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scrollbar ${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
