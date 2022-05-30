module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rubik: "Rubik",
            },
            colors: {
                dark: {
                    900: "#1B1A26",
                    800: "#282833",
                    700: "#282B2F",
                    600: "#313338",
                    500: "#35393F",
                },
            },
        },
    },
    plugins: [],
};
