'use client';

import React from 'react';
import images from './data';
import ImageViewer from 'react-simple-image-viewer';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const categories = [
  { key: "", label: "All" },
  { key: "events", label: "Events" },
  { key: "jnu", label: "JNU Campus" },
  { key: "alumni meets", label: "Alumni Meets" },
];

function PhotoGallery() {
  const [category, setcategory] = React.useState("");
  const [displayImages, setDisplayImages] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    if (category == "") {
      let imgs = [];
      images.forEach(image => {
        imgs.push(...image.images);
      })
      setDisplayImages(imgs);
      return;
    }
    setDisplayImages(images.filter(image => image.category === category)[0]?.images || []);
  }, [category])

  return (
    <div className='min-h-screen relative'>
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

      <div className='max-w-7xl mx-auto px-6 md:px-10 py-12 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-jnu-gold font-bold text-xs tracking-[0.2em] uppercase">Memories</span>
          <h1 className="section-heading mt-2">Photo Gallery</h1>
          <p className="section-subheading">Relive the moments that make JNU special.</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setcategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                category === cat.key
                  ? 'bg-jnu-blue text-white shadow-glow-blue'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-jnu-blue/30 hover:text-jnu-blue shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={category}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
        >
          {displayImages?.map((src, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openImageViewer(index)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-card-3d transition-all duration-500">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-jnu-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {displayImages?.length === 0 && (
          <div className="text-center py-20 glass-card">
            <span className="text-4xl mb-4 block">📷</span>
            <p className="text-gray-400 font-medium">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        {isViewerOpen && (
          <ImageViewer
            src={displayImages}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(0,0,0,0.6)" }}
          />
        )}
      </div>
    </div>
  )
}

export default PhotoGallery
