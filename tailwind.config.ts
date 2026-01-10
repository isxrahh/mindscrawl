/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,vue,jsx,tsx}",
        "./pages/**/*.{html,js,vue,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Add other file paths here
    ],
    theme: {
        extend: {
            animation: {
                ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                "gradient-x": "gradient-x 6s ease infinite",

            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            colors: {
                emerald: {
                    600: "#16a34a",
                },
            }
        }
    },
    plugins: [
        // Add Tailwind plugins here
    ],
};

