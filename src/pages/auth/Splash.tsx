import React from 'react';

interface SplashScreenProps {
    finishLoading: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-page transition-colors duration-300">

            {/* Container with Reveal Animation */}
            <div className="animate-reveal flex flex-col items-center gap-6">

                {/* 1. Logo / Icon (Floating Animation) */}
                <div className="relative w-24 h-24 flex items-center justify-center animate-float">
                    {/* Background Blob (Cool effect) */}
                    <div className="absolute inset-0 bg-btn-primary opacity-20 rounded-full blur-xl"></div>

                    {/* Actual Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-16 h-16 text-heading"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>

                {/* 2. App Name & Tagline */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-display font-heavy text-heading tracking-tight">
                        Nexus<span className="text-btn-secondary">App</span>
                    </h1>
                    <p className="text-paragraph text-sm font-body tracking-widest uppercase">
                        Experience the Future
                    </p>
                </div>

                {/* 3. Loading Bar */}
                <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-btn-primary w-1/2 animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                </div>

            </div>

            {/* Footer Version */}
            <div className="absolute bottom-8 text-xs text-paragraph opacity-60">
                v1.0.0 &bull; React 19
            </div>
        </div>
    );
};

export default SplashScreen;