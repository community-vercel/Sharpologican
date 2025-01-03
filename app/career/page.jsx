'use client';
import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify
import "../components/QuoteForm.css";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-up";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
import Career from "../components/career";


const Careerform = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const serverurls=process.env.NEXT_PUBLIC_DJANGO_URLS;

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`${serverurls}get-data/`);
      const result = await response.json();
      
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);





  return (
    <>
    
       
      <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
            </div>
<Career data={data } />
<div className="backto-top mt-20">
          <ScrollToTop showUnder={160}>
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
         <ToastContainer 
              position="top-right"
              autoClose={3000} // Auto-close after 5 seconds
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
           
            />
    </>
  );
};

export default Careerform;
