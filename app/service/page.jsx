'use client';
import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
import ServiceList from '../components/ServiceList'
import Breadcrumb from "../components/Breadcrumb";
import { useState, useEffect, Fragment } from "react";



const Service =()=>{
    const [services, setServices] = useState([]);
    const serverurl=process.env.NEXT_PUBLIC_DJANGO_URL;
    
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurl}services/`);
      const data = await response.json();
      setServices(data.data);

    }
    fetchServices()
},[])
        return(
            <>
<Helmet>
      <meta charSet="utf-8" />
      <title>SharpLogicians | Creative Digital Agency</title>
      <meta name="description" content="SharpLogicians | Creative Digital Agency" />
      <meta
        name="keywords"
        content="bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
      />
      <meta name="author" content="Createx Studio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" color="#5bbad5" href="safari-pinned-tab.svg" />
      <meta name="msapplication-TileColor" content="#766df4" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={ 'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                        <div className="col-lg-12">
              <ServiceList
                item="6"
                service={services}
                column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
              />
            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </>
        )
    
}
export default Service;