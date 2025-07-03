import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
    presets: [
        createPreset({
            cssPrefix: "fuma-", // here!
        }),
    ],
    content: [
        "./src/**/*.{ts,tsx,js,css}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    // other options
};