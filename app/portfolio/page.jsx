'use client';
import React, { useState, useEffect, Fragment  } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
import ServiceList from '../components/ServiceList'
import Breadcrumb from "../components/Breadcrumb";



const Service =()=>{
    const [services, setServices] = useState([]);
    const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
    
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}services/`);
      const data = await response.json();
      setServices(data.data);

    }
    fetchServices()
},[serverurls])
        return(
            <>
                <Helmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

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