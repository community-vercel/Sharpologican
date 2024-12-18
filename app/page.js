
'use client';
import CreativeLanding from "./new/page";
import { useState, useEffect } from "react";

export default function Home() {
  const [homeDetail, setHomeDetail]=useState()
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

   useEffect(() => {
      const fetchServices = async () => {
        
       
        const response33 = await fetch(`${serverurls}get-home-detail/`);
        const data33=await response33.json()
        setHomeDetail(data33);

      }
      fetchServices()
    }),[];
  return (
  <CreativeLanding homeDetail={homeDetail} />
  );
}
