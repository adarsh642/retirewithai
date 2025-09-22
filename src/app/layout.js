import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "FuturePlan - AI-Powered Retirement Planning",
  description: "Plan your retirement with AI-powered insights and personalized strategies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {/* Material Symbols for icons */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>

        {/* Removed global fixed notification button; using page-level Topbar like Dashboard */}

        {children}
      </body>
    </html>
  );
}
