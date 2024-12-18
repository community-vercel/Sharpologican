"use client";
import React, { useState, useEffect, Fragment } from "react";
import {

  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
const Service = () => {
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [portfolioData, setPortfolioData] = useState();

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}portfolio/`);
      const data = await response.json();
      setPortfolioData(data.data);
    };
    fetchServices();
  }, []);

  return (
    <>
     <Helmet>
           <meta charSet="utf-8" />
           <title>SharpLogicians | Portfolio</title>
           <meta name="description" content="SharpLogicians | Creative Digital Agency | Portfolio" />
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
         </Helmet> 
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Portfolio"} />
      {/* End Breadcrump Area */}

      {/* Start Service Area */}
      <div
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">Our Portfolio</h2>
                    <p>
               {portfolioData && portfolioData[0]?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    {/* <Slider {...slickDot}> */}
                    <div className="row">

                      {portfolioData?.map((value, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left" key={index}>
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <div>
                            <div className={`thumbnail ${serverurl}${value.image}`}></div>
                             <Image
                                                         width={500}
                                                         height={665}
                                                         className="thumbnail"
                                                         src={`${serverurl}${value.image}`}
                                                         alt={value.title ? value.title : "Portfolio"}
                                                         layout="responsive"
                                                       />
                            {/* <img
  className="thumbnail"
  src={`${serverurl}${value?.image}`}
  alt={value.title?value.title:'Portfolio'}
 // Use priority only for critical images
/>                        */}
                            </div>
                                 
                            <div
                              className={`bg-blr-image ${serverurl+value.image}`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.title}</p>
                              <h4>
                                <Link href={`/portfolio/${value.slug}`}>{value.heading}</Link>
                              </h4>
                              <div className="portfolio-button">
                                <Link className="rn-btn" href={`/portfolio/${value.slug}`}>
                                  {value.buttonText}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <Link
                            className="link-overlay"
                            to="/portfolio-details"
                          ></Link> */}
                        </div>
</div>


                      ))}
                      </div>
                    {/* </Slider> */}
                  </div>
                </div>
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
  );
};
export default Service;
