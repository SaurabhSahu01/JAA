'use client';

import React, { useState } from 'react'
import FeedUpload from './FeedUpload'
import UploadPopup from './cards/UploadPopup'
import Post from './cards/Post'
import { db } from '@/src/utils/firebase';
import { onSnapshot, doc, collection, getDoc } from "firebase/firestore"
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function Feed() {
  const router = useRouter();
  const [wantShare, setWantShare] = useState(false);
  const [posts, setPosts] = useState([]);
  const [verified, setVerified] = useState(false);

  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', uid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.verified === false || data.verified === 'pending') {
          setTimeout(() => {
            router.push('/join');
          }, 100)
        }
        else {
          setVerified(true);
          onSnapshot(collection(db, "posts"), (snap) => {
            const postData = [];
            snap.forEach((doc) =>
              postData.push({ ...doc.data(), id: doc.id })
            );
            postData.reverse();
            setPosts(postData);
          });
        }
      }
      else {
        console.log("document does not exists");
      }
    }).catch(err => {
      console.log('error getting the user verification details');
    })
  }, [])

  return (
    verified && (
      <div className="min-h-screen relative">
        {/* Background */}
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

        {wantShare && <UploadPopup setWantShare={setWantShare} />}

        <div className='max-w-2xl mx-auto px-4 py-8 relative z-10'>
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-display font-bold text-jnu-blue">Alumni Feed</h1>
            <p className="text-gray-400 text-sm mt-1">Stay connected with the JNU community</p>
          </motion.div>

          {/* Upload */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <FeedUpload setWantShare={setWantShare} />
          </motion.div>

          {/* Posts */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className='w-full mt-6 flex flex-col gap-5'
          >
            {posts.map((post, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Post data={post} />
              </motion.div>
            ))}
          </motion.div>

          {posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center py-20 glass-card mt-6"
            >
              <span className="text-4xl mb-4 block">📭</span>
              <p className="text-gray-400 font-medium">No posts yet. Be the first to share!</p>
            </motion.div>
          )}
        </div>
      </div>
    )
  )
}

export default Feed