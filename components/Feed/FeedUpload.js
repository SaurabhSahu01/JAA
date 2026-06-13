'use client';

import React from 'react';
import { useProfile } from '@/components/common/ProfileContext';

function FeedUpload({ setWantShare }) {
    const { profile } = useProfile();
    const img = profile?.photo || null;

    return (
        <div className="glass-card p-5 flex items-center gap-4 border border-gray-200/50 shadow-glass-md">
            <div className="flex-shrink-0">
                {img ? (
                    <img 
                        src={`${img}`} 
                        alt="profile" 
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-jnu-blue/10 shadow-sm" 
                    />
                ) : (
                    <img 
                        src="/icons/profileIcon.webp" 
                        alt="default"
                        className="w-12 h-12 rounded-full ring-2 ring-jnu-blue/10 shadow-sm" 
                    />
                )}
            </div>
            
            <button
                className="w-full py-3.5 px-6 rounded-full bg-gray-50/60 hover:bg-gray-50 border border-gray-200/50 text-gray-400 cursor-pointer transition-all text-sm font-semibold text-left hover:border-jnu-blue/25 hover:text-gray-500"
                onClick={() => setWantShare(true)}
            >
                Share an update, research, or memory with the network...
            </button>
            
            <button
                onClick={() => setWantShare(true)}
                className="flex-shrink-0 w-11 h-11 rounded-full bg-jnu-blue/5 hover:bg-jnu-blue/10 flex items-center justify-center text-jnu-blue transition-colors border border-jnu-blue/10"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    );
}

export default FeedUpload;