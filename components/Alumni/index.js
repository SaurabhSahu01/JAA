'use client';

import React from "react";
import ImageViewer from 'react-simple-image-viewer';
import { motion } from 'framer-motion';

const alumniList = [
    {
        ListTitle: "Politics & Public Policy",
        List: [
            {
                id: 37,
                name: 'Dr. S. Jaishankar',
                description: 'Minister of External Affairs, Government of India',
                imageSrc: '/jnu/SJai.webp',
            },
            {
                id: 36,
                name: 'Nirmala Sitharaman',
                description: 'Minister of Finance & Corporate Affairs, Government of India',
                imageSrc: '/jnu/nirmala.webp',
            },
            {
                id: 7,
                name: "Baburam Bhattarai",
                description: "36th Prime Minister of Nepal",
                imageSrc: "/jnu/baburam.webp"
            },
            {
                id: 38,
                name: 'Sita Ram Yechury',
                description: 'General Secretary of CPI(M), Prominent Parliamentarian',
                imageSrc: '/jnu/Sitaram.webp',
            },
            {
                id: 69,
                name: 'Prakash Karat',
                description: 'Former General Secretary of CPI(M) (2005 to 2015)',
                imageSrc: '/jnu/PrakashKarat.webp',
            },
            {
                id: 40,
                name: 'Devi Prasad Tripathi',
                description: 'General Secretary of NCP of India, Scholar & Thinker',
                imageSrc: '/jnu/dp.webp',
            }
        ]
    },
    {
        ListTitle: "Humanities, Social Sciences & Academia",
        List: [
            {
                id: 9,
                name: 'Abhijit Banerjee',
                description: 'Nobel Laureate in Economics (2019), Ford Foundation Professor at MIT',
                imageSrc: '/jnu/ABan.webp',
            },
            {
                id: 41,
                name: 'Santishree Dhulipudi Pandit',
                description: 'Vice-Chancellor of JNU, Renowned Political Scientist',
                imageSrc: '/jnu/santi.webp',
            }
        ]
    },
    {
        ListTitle: "Art, Literature & Journalism",
        List: [
            {
                id: 1,
                name: "Sanjay Chauhan",
                description: "Film Screenplay & Dialogue Writer (Paan Singh Tomar, I Am Kalam)",
                imageSrc: "/jnu/sanjay.webp",
            },
            {
                id: 4,
                name: "Swara Bhaskar",
                description: "Bollywood Actress & Socio-Political Activist",
                imageSrc: "/jnu/swara.webp",
            },
        ]
    }
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
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 }
  })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Alumni() {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [photo, setPhoto] = React.useState(null);

    const openImageViewer = React.useCallback((src) => {
        setPhoto(src);
        setCurrentImage(0);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="min-h-screen relative overflow-hidden py-16 px-6 md:px-10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>
            <div className="absolute inset-0 dot-grid opacity-30"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Notable JNUites</span>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-jnu-blue mt-3 leading-tight">
                        Gallery of Fame
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
                        Honoring JNU alumni who have made exceptional contributions across governance, academia, science, literature, and the arts.
                    </p>
                </motion.div>

                {/* Categories */}
                {alumniList.map((cat, catIdx) => (
                    <div key={catIdx} className="mb-24 last:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-display font-bold text-jnu-blue mb-10 border-l-4 border-jnu-gold pl-4"
                        >
                            {cat.ListTitle}
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={stagger}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        >
                            {cat.List.map((alumni, i) => (
                                <motion.div key={alumni.id} variants={fadeUp} custom={i}>
                                    <TiltCard className="card-3d p-6 text-center group cursor-pointer h-full flex flex-col items-center justify-between">
                                        <div className="w-full">
                                            <div className="relative mb-6 mx-auto w-fit">
                                                <div className="absolute inset-0 bg-jnu-blue/10 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                                <img
                                                    src={alumni.imageSrc}
                                                    alt={alumni.name}
                                                    onClick={() => openImageViewer(alumni.imageSrc)}
                                                    className="w-28 h-28 rounded-full object-cover relative z-10 ring-4 ring-white shadow-lg group-hover:ring-jnu-blue/20 transition-all duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="text-lg font-display font-bold text-jnu-blue mb-2 group-hover:text-jnu-blue-light transition-colors">
                                                {alumni.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {alumni.description}
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold text-jnu-gold/80 mt-6 group-hover:text-jnu-gold transition-colors block">
                                            View Photo &rarr;
                                        </span>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Lightbox Viewer */}
            {isViewerOpen && (
                <div className="relative z-[1000]">
                    <ImageViewer
                        src={[photo]}
                        currentIndex={currentImage}
                        disableScroll={true}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                        backgroundStyle={{
                            backdropFilter: "blur(12px)",
                            backgroundColor: "rgba(15, 23, 42, 0.6)"
                        }}
                    />
                </div>
            )}
        </div>
    );
}
