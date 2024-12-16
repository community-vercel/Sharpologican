import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";

import Link from "next/link";
import { Helmet } from 'react-helmet-async';
const NewsDetail=({news})=> {
    const formattedDate = new Date(news?.published_date).toLocaleDateString("en-US", {
        weekday: "long", // 'Monday'
        year: "numeric", // '2024'
        month: "long", // 'December'
        day: "numeric", // '13'
      });
    return (
      <>
<Helmet>
      <meta charSet="utf-8" />
      <title>{news && news.metaname?news.metaname:news && news.news_title?news.news_title:'SharpLogicians | Creative Digital Agency'}</title>
      <meta name="description" content={news && news.metades?news.metades:"SharpLogicians | Creative Digital Agency"} />
      <meta
        name="keywords"
        content={news && news.keywords?news.keywords:"bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
}      />
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
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
{news?.news_title}                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      {formattedDate}
                    </li>
                   
                    <li>
                      <FiHeart />
                      Like
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
               
                    <div
      dangerouslySetInnerHTML={{__html: news?.detail}}
    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

        {/* Start BLog Comment Form  */}
       
        {/* End BLog Comment Form  */}

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
  }

export default NewsDetail;
