'use client';

import React from 'react';
import { UserCircleIcon, CameraIcon } from "@heroicons/react/24/solid";

const ThirdStepRegistration = ({ register, fileAttached, img, setSecondStep }) => {
    return (
        <form onSubmit={register} className="flex flex-col items-center justify-center space-y-8 py-4">
            <h3 className="text-xl font-display font-bold text-jnu-blue text-center">
                Step 3: Upload Profile Photo
            </h3>
            
            <div className="flex flex-col items-center space-y-6">
                <div className="relative group">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-jnu-blue/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        {img === null ? (
                            <UserCircleIcon className="w-full h-full text-gray-200" />
                        ) : (
                            <img src={img} className="w-full h-full object-cover" alt="profile pic" />
                        )}
                    </div>
                    
                    <label 
                        htmlFor="fileUploader" 
                        className="absolute bottom-1 right-1 w-10 h-10 bg-jnu-blue text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-jnu-blue-light transition-colors"
                    >
                        <CameraIcon className="w-5 h-5" />
                    </label>
                    <input
                        type="file"
                        id="fileUploader"
                        className="hidden"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={fileAttached}
                    />
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-400">
                        {img ? "Photo uploaded successfully!" : "Please upload a square photo (JPEG, PNG)."}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between w-full pt-6 border-t border-gray-100">
                <button 
                    type="button"
                    onClick={() => setSecondStep(false)}
                    className="px-6 py-3 rounded-xl border border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-colors"
                >
                    &larr; Back
                </button>
                <button 
                    type="submit" 
                    className="btn-primary px-8 py-3 rounded-xl hover:shadow-glow-blue transition-all"
                >
                    Complete Registration
                </button>
            </div>
        </form>
    );
};

export default ThirdStepRegistration;
