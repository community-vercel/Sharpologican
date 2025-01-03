'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.scss";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React,{useState,useEffect} from "react";
import Script from 'next/script';
import { usePathname } from "next/navigation";
import crypto from 'crypto';

const geistSans = Geist({

  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({ children }) {

 
    // Ensure we access the router only on the client-side
const pathname = usePathname(); // Get the current path

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleRouteChange = (url) => {
        window.gtag('config', 'G-SL88DQ1E24', {
          page_path: url,
        });
      };

      // Call the handleRouteChange function whenever the path changes
      handleRouteChange(pathname);

    }
  }, [pathname]); // Dependency on pathname to trigger the effect
  const nonce = crypto.randomBytes(16).toString('base64');

  return (
    <html lang="en">
       <head>
       <link
          rel="preload"
          href="/logo-light.png"  // Path relative to the 'public' folder
          as="image"
          type="image/png"
        />
        {/* Google Analytics */}
        <Script
  id="google-analytics"
  strategy="afterInteractive"
  nonce={nonce}
>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SL88DQ1E24', {
      page_path: window.location.pathname,
    });
  `}
</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
      <HelmetProvider>
          {children}
        </HelmetProvider>
      </body>
    </html>
  );
}
