"use client";
import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import logoLight from "../assets/images/logo/logo-light.png";

import { useParams } from "next/navigation";
import Image from "next/image";
import { H1 } from "@/app/components/Typrography";
const ServiceDetails = ({ initialservice }) => {
  const params = useParams();
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [service, setServices] = useState(initialservice);
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
const bg_image=serverurl + initialservice?.image3


const adjustImagePaths = (html, baseUrl) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const images = doc.querySelectorAll("img");

  images.forEach((img) => {
    const src = img.getAttribute("src");

    // Skip base64 images
    if (src && src.startsWith("data:")) {
      img.style.width = "auto";  // Let the image retain its natural width
      img.style.height = "auto"; // Let the image retain its natural height
      img.style.objectFit = "contain"; 
    }

    // Adjust non-base64 image paths
    if (src && !src.startsWith("http") && !src.startsWith("data:")) {
      img.setAttribute("src", `${serverurl}${src}`);
    }
  });

  return doc.body.innerHTML;
};

const sanitizedHTML = adjustImagePaths(service?.detail );
const sanitizedHTMLS = adjustImagePaths(service?.detail2 );

  const metadata = {
    title: service?.metaname
      ? String(service.metaname)
      : "SharpLogicians | Creative Digital Agency",
    description: service?.metadesc
      ? String(service?.metadesc)
      : "SharpLogicians | Creative Digital Agency",
    keywords: service?.keywords
      ? String(service.keywords)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title:
        service?.metaname ||
        service?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        service?.metades || `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        service?.metaname ||
        service?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        service?.metades || `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
  };
  useEffect(() => {
          window.scrollTo(0, 0); // Scroll to the top of the page
        }, []);

  return (
    <>
    
      <title>{metadata.title}</title>

      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images} />
    <header
        className={`header-area formobile-menu header--transparent `}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/"><img src={logoLight} /></a>
            </div>
          </div>
          <div className="header-right">
           
            <div className="header-btn">
              <a className="rn-btn" href="/quote">
                <span>Get a quote</span>
              </a>
            </div>
            </div>
            </div>
      
      {/* End Pagehelmet  */}
      {/* <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      /> */}
        </header>
      {/* Start Breadcrump Area */}
      <div
  className="rn-page-title-area pt--120 pb--190"
  style={{
    backgroundImage: `url(${bg_image})`,
  }}
  data-black-overlay="7"
>
  
    
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <H1 className="title theme-gradient">
                  {service?.service_title}
                </H1>
                <p>                  {service?.moretitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* End Breadcrump Area */}
      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <Image
                          width={600}
                          height={650}
                          src={serverurl + service?.image1}
                          alt="Team "
                          layout="responsive"
                          className="w-100"
                        />
                        {/* <img
                          className="w-100"
                          src={serverurl + service?.image1}
                          alt="Service Images"
                        /> */}
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <div
      dangerouslySetInnerHTML={{__html:sanitizedHTML}}
      />
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <div
                          dangerouslySetInnerHTML={{ __html: sanitizedHTMLSSS}}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <Image
                          width={600}
                          height={650}
                          src={serverurl + service?.image2}
                          alt={service?.service_title}
                          layout="responsive"
                          className="w-100"
                        />
                        {/* <img
                          className="w-100"
                          src={serverurl + service?.image2}
                          alt="Service Images"
                        /> */}

                        {/* <Image
                            className="w-100"
                            src={serverurl+service?.image2.replace("/media/",'media/')}
                            alt="Service Images"
                            width={200}
                            height={400}
                          /> */}
                        {/* <ModalVideo
                            channel="youtube"
                            // isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
                            // onClose={() => this.setState({ isOpen: false })}
                          />
                          <button
                            className="video-popup"
                            // onClick={this.openModal}
                          >
                            <span className="play-icon"></span>
                          </button> */}
                      </div>
                    </div>
                  </div>

                  {/* End Single Area */}
                </div>
              </div>
              <div className="slide-btn"  style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                 
                }}>
                <a
                  className="rn-button-style--2 btn-primary-color"
                  href="/quote"
                >
                  <span style={{color:'#000000',fontWeight:600}}> Get a quote</span>
                </a>
              </div>
           
            </div>
          </div>
        </div>
      </div>

      {/* End Page Wrapper */}
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

export default ServiceDetails;
