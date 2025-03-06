import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primaryColor: "#121d23",
        textPrimaryColor: "#c9a581",
        buttonColor: "#C8A97E",
        buttonHoverColor: "#B0906E",
        buttonHoverTextLightColor: "#E5C48D",
        coffeeBeanColor: "#293239",
        mainNavbarColor: "#1A252B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(10px)" },
        },
        glow: {
          "0%, 100%": {
            opacity: "0.8",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
        },
        "bounce-slow-stop": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-150px)",
          },
          "60%": {
            transform: "translateY(-75px)",
          },
          "80%": {
            transform: "translateY(-25px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-category": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-20px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
          "80%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-zoom-icon": {
          "0%, 20%, 50%, 80%, 100%": {
            scale: "1",
          },
          "40%": {
            scale: "1.7",
          },
          "60%": {
            scale: "1.5",
          },
          "80%": {
            scale: "1.3",
          },
          "100%": {
            scale: "1",
          },
        },
      },
      animation: {
        wave: "wave 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "bounce-slow-stop": "bounce-slow-stop 4s ease-in-out infinite",
        "bounce-category": "bounce-category 2s ease-in-out infinite",
        "bounce-zoom-icon": "bounce-zoom-icon 2s ease-in-out infinite",
      },
      boxShadow: {
        "light-glow": "0 0 15px 10px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
