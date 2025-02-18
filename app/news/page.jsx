"use client";
import React, { useState, useEffect, Fragment } from "react";
import {

  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
const News= () => {
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [newsdata, setnewsdata] = useState();
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}news/`);
      const data = await response.json();
      
      // Sort by id in ascending order
      const sortedData = data.data.sort((a, b) => b.id - a.id);






  
      setnewsdata(sortedData);
    };
    
    fetchServices();
  }, []);
  const metaTitle = 'SharpLogicians |  News' ;
  const metaDescription = 'SharpLogicians | Creative Digital Agency | News';
  const metaImages = ['/logo-light.png'];
  
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
  
  const metadata = {
  
    title: metaTitle || 'SharpLogicians |  Service',
    description: metaDescription || 'SharpLogicians | News | Creative Digital Agency | News',
    keywords: "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
  
  };
  
  
  
          return(
              <>
    <title>{metadata.title}</title>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images[0]} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
  
 
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"News"} />
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
                    <h2 className="title">All News</h2>
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    {/* <Slider {...slickDot}> */}
                    <div className="row">

                      {newsdata?.map((value, index) => (
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
                              {/* <p>{value.description}</p> */}
                              <h4>
                                <Link href={`/news/${value.slug}`}>{value.title}</Link>
                              </h4>
                              <div className="portfolio-button">
                                <Link className="rn-btn" href={`/news/${value.slug}`}>
                     Read More
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
export default News;
