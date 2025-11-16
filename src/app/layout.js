import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raushani Roy - Social Media Manager & Digital Strategist",
  description: "Social Media Manager helping brands and individuals build strong digital identities through creative storytelling, strategic planning, and consistent online engagement.",
  keywords: "Social Media Manager, Digital Strategist, Content Strategy, Social Media Marketing, Brand Building, Instagram Strategy, YouTube Optimization, Content Creation",
  authors: [{ name: "Raushani Roy" }],
  openGraph: {
    title: "Raushani Roy - Social Media Manager & Digital Strategist",
    description: "Social Media Manager helping brands and individuals build strong digital identities through creative storytelling, strategic planning, and consistent online engagement.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raushani Roy - Social Media Manager & Digital Strategist",
    description: "Social Media Manager helping brands and individuals build strong digital identities through creative storytelling, strategic planning, and consistent online engagement.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#171717] dark:bg-black dark:text-white transition-colors duration-300`}>
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
