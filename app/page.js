import React from 'react';
import HomePage from '@/components/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home | JAA',
};

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "JNU Alumni Association",
    "url": "https://jnualumniassociation.com",
    "logo": "https://jnualumniassociation.com/favicon.png",
    "description": "The official alumni association of Jawaharlal Nehru University (JNU), Delhi.",
    "sameAs": [
      "https://twitter.com/JNU_official_50",
      "https://www.facebook.com/jnuofficial"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
