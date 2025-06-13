import { Barlow } from "next/font/google";

const barlow = Barlow({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-barlow",
});

export {barlow};