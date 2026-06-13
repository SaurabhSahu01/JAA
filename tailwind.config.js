/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(220,80%,56%,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(0,60%,50%,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,80%,56%,0.05) 0px, transparent 50%)',
      },
      colors: {
        'primarycolor': '#1B2D56',
        'jnu-blue': '#1B2D56',
        'jnu-blue-light': '#2A4A8C',
        'jnu-red': '#8B2323',
        'jnu-red-light': '#B33030',
        'jnu-gold': '#D4AF37',
        'jnu-gold-light': '#E8C84A',
        'dark-base': '#0A0F1C',
        'dark-card': '#111827',
        'dark-surface': '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-slow': 'glow 4s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'gradient-shift-fast': 'gradientShift 4s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(27,45,86,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(27,45,86,0.25), 0 0 80px rgba(27,45,86,0.1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'rotateY(5deg) rotateX(2deg)' },
          '75%': { transform: 'rotateY(-5deg) rotateX(-2deg)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.06)',
        'glass-lg': '0 16px 48px rgba(0,0,0,0.08)',
        'glass-xl': '0 24px 64px rgba(0,0,0,0.12)',
        'glow-blue': '0 0 30px rgba(27,45,86,0.15)',
        'glow-gold': '0 0 30px rgba(212,175,55,0.2)',
        'card-3d': '0 20px 60px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 30px 80px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
      },
    },
    screens: {
      'xs': '250px',
      'sm': '450px',
      'md': '700px',
      'lg': '950px',
      'xl': '1200px',
    },
  },
  plugins: [],
}
