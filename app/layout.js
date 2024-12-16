'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.scss";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "SharpLogicians | Creative Digital Agency",
//   description: "SharpLogicians | Creative Digital Agency",
//   keywords:"bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
      
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
      <HelmetProvider>

        {children}
        </HelmetProvider>
      </body>
    </html>
  );
}
