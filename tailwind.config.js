/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSection: {
          from: { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideInPreview: {
          from: { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        focusRingPulse: {
          '0%': { boxShadow: '0 0 0 0 #0070f3' },
          '70%': { boxShadow: '0 0 0 4px #b3d4fc' },
          '100%': { boxShadow: '0 0 0 0 #0070f3' },
        },
        fadeInImportExport: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSectionsLibrary: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInSectionEditor: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shakeError: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInSuccess: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        spinLoading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInEmptyState: {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeInTooltip: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInModal: {
          from: { opacity: '0', transform: 'scale(0.96) translateY(24px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeInToast: {
          from: { opacity: '0', transform: 'translateY(24px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInDropdown: {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInBackdrop: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInTab: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        expandAccordion: {
          from: { maxHeight: '0', opacity: '0' },
          to: { maxHeight: '500px', opacity: '1' },
        },
        progressBar: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        fadeInImage: {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 #0070f3' },
          '70%': { boxShadow: '0 0 0 8px rgba(0,112,243,0)' },
          '100%': { boxShadow: '0 0 0 0 #0070f3' },
        },
        popBadge: {
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '80%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInSidebar: {
          from: { opacity: '0', transform: 'translateX(-48px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInSection: 'fadeInSection 0.4s ease forwards',
        slideInPreview: 'slideInPreview 1s cubic-bezier(0.4,0,0.2,1)',
        focusRingPulse: 'focusRingPulse 0.3s',
        fadeInImportExport: 'fadeInImportExport 0.5s cubic-bezier(0.4,0,0.2,1)',
        fadeInSectionsLibrary: 'fadeInSectionsLibrary 0.5s cubic-bezier(0.4,0,0.2,1)',
        fadeInSectionEditor: 'fadeInSectionEditor 0.3s cubic-bezier(0.4,0,0.2,1)',
        shakeError: 'shakeError 0.4s cubic-bezier(0.4,0,0.2,1)',
        fadeInSuccess: 'fadeInSuccess 0.4s cubic-bezier(0.4,0,0.2,1)',
        spinLoading: 'spinLoading 0.7s linear infinite',
        fadeInEmptyState: 'fadeInEmptyState 0.5s cubic-bezier(0.4,0,0.2,1)',
        fadeInTooltip: 'fadeInTooltip 0.25s cubic-bezier(0.4,0,0.2,1)',
        fadeInModal: 'fadeInModal 0.35s cubic-bezier(0.4,0,0.2,1)',
        fadeInToast: 'fadeInToast 0.4s cubic-bezier(0.4,0,0.2,1)',
        fadeInDropdown: 'fadeInDropdown 0.25s cubic-bezier(0.4,0,0.2,1)',
        fadeInBackdrop: 'fadeInBackdrop 0.3s cubic-bezier(0.4,0,0.2,1)',
        fadeInTab: 'fadeInTab 0.3s cubic-bezier(0.4,0,0.2,1)',
        expandAccordion: 'expandAccordion 0.3s cubic-bezier(0.4,0,0.2,1)',
        progressBar: 'progressBar 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
        fadeInImage: 'fadeInImage 0.5s cubic-bezier(0.4,0,0.2,1)',
        pulse: 'pulse 1.2s infinite',
        popBadge: 'popBadge 0.3s cubic-bezier(0.4,0,0.2,1)',
        slideInSidebar: 'slideInSidebar 0.4s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [],
}
