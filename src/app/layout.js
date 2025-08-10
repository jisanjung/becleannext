import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { GTM_ID } from "@/constants";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  verification: {
            google: "e80GxNcgWsCGtAEmx7vM-_eZBvtKGuOy_fTNjEQ--HY",
  },
  title: "Ceramic Coating Studio and Ceramic Coating Installers | beclean",
  description: "The world's first studio devoted solely to ceramic coatings. Every step is refined for precision, elegance, and protection that makes a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
      <GoogleTagManager gtmId={GTM_ID}/>
    </html>
  );
}
