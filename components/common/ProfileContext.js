'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';

const ProfileContext = createContext(null);

/**
 * ProfileProvider — replaces react-secure-storage with a proper React context.
 * Profile data is fetched once from the API and cached in memory (not localStorage).
 * Components can access profile data via useProfile() hook.
 */
export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = useCallback(async () => {
        const userToken = cookieCutter.get('userToken');
        const refreshToken = cookieCutter.get('refreshToken');
        
        if (!userToken || !refreshToken) {
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/getprofile', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${userToken} ${refreshToken}`,
                },
            });
            const data = await res.json();
            if (data && data.data) {
                setProfile(data.data);
            }
        } catch (err) {
            console.error('Failed to fetch profile:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    const clearProfile = useCallback(() => {
        setProfile(null);
    }, []);

    const updateProfile = useCallback((data) => {
        setProfile(data);
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, loading, fetchProfile, clearProfile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

/**
 * useProfile — hook to access the current user's profile data.
 * Returns { profile, loading, fetchProfile, clearProfile, updateProfile }
 */
export function useProfile() {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
}
