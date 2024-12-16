'use client';
import React, {useState,useEffect } from "react";

// import "../../../index.scss"
import { useParams } from "next/navigation";
import Image from "next/image";
import PortfolioDetails from "@/app/components/PortfolioDetails";
import NewsDetails from "@/app/components/NewsDetails";
const  newDetail=()=>{
    const params=useParams()
    const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const [service, setServices] = useState();
  useEffect(() => {
    const getDetails = async () => {
      const formData = new FormData();
      formData.append("slug", params.slug);

      try {
        const response = await fetch(`${serverurl}get-newsdetails/`, {
          method: "POST",

          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          setServices(data);

        }
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };
  getDetails();
}, []);
  
    return (
     <NewsDetails news={service} />
    );
  }

export default newDetail;
