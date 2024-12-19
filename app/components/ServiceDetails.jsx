"use client";
import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { Helmet } from "react-helmet-async";
import { useParams } from "next/navigation";
import Image from "next/image";
import { H1 } from "@/app/components/Typrography";
const ServiceDetails = ({initialservice}) => {
    console.log("initial",initialservice)
  const params = useParams();
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [service, setServices] = useState(initialservice);


  return (
    <>
      {/* Start Pagehelmet  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {service && service.metaname
            ? service.metaname
            : service && service.service_title
            ? service.service_title
            : "SharpLogicians | Creative Digital Agency"}
        </title>
        <meta
          name="description"
          content={
            service && service.metades
              ? service.metades
              : "SharpLogicians | Creative Digital Agency"
          }
        />
        <meta
          name="keywords"
          content={
            service && service.keywords
              ? service.keywords
              : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
          }
        />
        <meta name="author" content="Createx Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" color="#5bbad5" href="safari-pinned-tab.svg" />
        <meta name="msapplication-TileColor" content="#766df4" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>{" "}
      {/* End Pagehelmet  */}
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <H1 className="title theme-gradient">
                  {service?.service_title}
                </H1>
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
                          dangerouslySetInnerHTML={{ __html: service?.detail }}
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
                          dangerouslySetInnerHTML={{ __html: service?.detail2 }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                      <Image
                          width={600}
                          height={650}
                          src={serverurl + service?.image2}
                          alt="Team "
                          layout="responsive"
                          className="w-100"

                        />
                        {/* <img
                          className="w-100"
                          src={serverurl + service?.image2}
                          alt="Service Images"
                        /> */}
                        <div
                          className="header-btn"
                          style={{ marginTop: "20px" }}
                        >
                          <a className="rn-btn" href="/quote">
                            <span>Get a quote</span>
                          </a>
                        </div>
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
