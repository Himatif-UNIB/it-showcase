module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: "Outfit",
                "permanent-marker": "Permanent Marker",
            },
            colors: {
                dark: "#0D1321",
                "light-dark": "#171e2e",
            },
            boxShadow: {
                main: "0px 6px 18px rgba(0, 0, 0, 0.04)",
                light: "0px 4px 4px rgba(0, 0, 0, 0.08)",
                large: "0px 8px 16px rgba(17, 24, 39, 0.1)",
                card: "0px 2px 6px rgba(0, 0, 0, 0.06)",
                transaction: "0px 8px 16px rgba(17, 24, 39, 0.06)",
                button: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [],
}
