module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    borderRadius: {
      xl: "0.75rem",
      lg: "0.5rem",
      md: "0.38rem",
      sm: "0.18rem",
    },
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "5.5xl": "3.375rem",
        "6xl": "3.75rem",
        "7xl": "5rem",
      },
      padding: {
        '2px': '2px',
      },
      lineHeight: {
        12: "3.75rem",
      },
      colors: {
        gray: {
          25: "#F9FAFB",
          50: "#E5E5E5",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          650: "#68737D",
          700: "#49545C",
          800: "#1F2937",
          900: "#111827",
        },
        amber: {
          150: "#FFA84B",
        },
        purple: {
          450: "#B16CEA",
        },
      },
    },
    fontFamily: {
      sans: ["'SF Pro Display'", "sans-serif"],
      serif: ["'SF Pro Text'", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
