import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
// import "../../index.scss"


import { Helmet } from 'react-helmet-async';

const PortfolioDetails=({portfolio})=>{ 
  const SocialShare = [
    { Social: <FaFacebookF />, link: portfolio?.facebook },
    { Social: <FaLinkedinIn />, link:  portfolio?.linkedin },
    { Social: <FaInstagram />, link:  portfolio?.instagram   },
    { Social: <FaTwitter />, link:  portfolio?.x  },
  ];
    return (
      <>
        <Helmet>
              <meta charSet="utf-8" />
              <title>{portfolio && portfolio.metaname?portfolio.metaname:portfolio && portfolio.title?portfolio.title:'SharpLogicians | Creative Digital Agency'}</title>
              <meta name="description" content={portfolio && portfolio.metades?portfolio.metades:"SharpLogicians | Creative Digital Agency"} />
              <meta
                name="keywords"
                content={portfolio && portfolio.keywords?portfolio.keywords:"bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
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

        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
{portfolio?.header}                  </h2>
                  <p>
                  {portfolio?.title}                  
                  .{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    
                  <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span><strong>Branch </strong></span>
                        <h4><strong>{portfolio?.branch}</strong></h4>
                      </div>

                      <div className="port-view">
                        <span><strong>Project Types </strong></span>
                        <h4><strong>{portfolio?.types}</strong></h4>
                      </div>

                      <div className="port-view">
                        <span><strong>Program</strong></span>
                        <h4><strong>{portfolio?.progam}</strong></h4>
                      </div>
                    </div>

                    <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                      <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a href={`${val.link}`}>
                              <p style={{display:"inline-table"}}>
                              {val.Social}</p></a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h2><strong>{portfolio?.heading}</strong></h2>
                    <div
      dangerouslySetInnerHTML={{__html: portfolio?.detail}}
    />

                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Related Work */}
        {/* <div className="portfolio-related-work pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="theme-color font--18 fontWeight600">
                    Related Work
                  </span>
                  <h2>Our More Projects</h2>
                </div>
              </div>
            </div>
            <div className="row mt--10">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img
                        src={relatedImg1}
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">Digital Analysis</a>
                    </h4>
                    <span className="category">Technique</span>
                  </div>
                </div>
              </div>
          
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img
                        src={relatedImg2}
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">Plan Management</a>
                    </h4>
                    <span className="category">PLANNING</span>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div> */}
        {/* End Related Work */}

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

export default PortfolioDetails;
