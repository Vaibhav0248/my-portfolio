/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Slate 900
        secondary: "#111827", // Gray 900
        card: "#1E293B", // Slate 800
        accent: "#3B82F6", // Blue 500
        cyanAccent: "#06B6D4", // Cyan 500
        textWhite: "#F8FAFC", // Slate 50
        textGray: "#94A3B8", // Slate 400
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        mono: ["Space Grotesk", "IBM Plex Sans", "monospace"],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .85, transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
