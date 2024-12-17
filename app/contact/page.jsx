"use client";
import React, { useState, useEffect } from "react";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ContactTwo from "../components/ContactTwo";
import BrandTwo from "../components/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [textField, setTextField] = useState("");

  const [textField2, setTextField2] = useState("");
  const [textField3, setTextField3] = useState("");
  const [title, setTitle] = useState();
  const [heading, setheading] = useState();
  const [heading3, setheading3] = useState();
  const [image, setimage] = useState();

  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [homeDetail, setHomeDetail] = useState({
    metaname: "",
    metadescription: "",
    keywords: '',
    metanamecontact: "",
    metadescriptioncontact: "",
    keywordscontact:'',
    metanamequote: "",
    metadescriptionquote: "",
    keywordsquote:'',
    heading: "",
    detail: "",
    footeremail: "",
    footeremail2: "",
  });
useEffect(() => {

  
    const getDetails = async () => {

      try {
        const response = await fetch(`${serverurls}get-contactus/`);
        const data = await response.json();

        const response2 = await fetch(`${serverurls}contact/`);
        const response33 = await fetch(`${serverurls}get-home-detail/`);
        const data33=await response33.json()
        setHomeDetail(data33);

        if (response.ok) {
          const data7 = await response2.json();
          setTitle(data7.data.title);
          setheading(data7.data.heading);
          setheading3(data7.data.heading3);
          setimage(serverurl+data7.data.contact_image)
          setTextField(data.detail);
          setTextField2(data.detail2);
          setTextField3(data.detail3);
        }
      } catch (error) {
        console.error("Error adding service:", error);
      }
    };
    
    getDetails();
  }, []);
  

  return (
    <>
  
  <Helmet>
  <meta charSet="utf-8" />
        <title>{homeDetail && homeDetail?homeDetail?.metanamecontact:'SharpLogicians | Creative Digital Agency' } </title>
        <meta name="description" content={homeDetail && homeDetail?homeDetail?.metadescriptioncontact:'SharpLogicians | Creative Digital Agency'} />
        <meta
          name="keywords"
          content={homeDetail && homeDetail?homeDetail?.keywordscontact:"bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"} />
  
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
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{heading && heading?heading:''}</h2>
                <p>
                    {title && title?title:''}.{" "}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Contact Top Area  */}
      
      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            
            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <div className="icon">
                  <FiHeadphones />
                </div>
                <div className="inner"
                    dangerouslySetInnerHTML={{
                      __html: textField ? textField : "",
                    }}
                  />
                </div>
             
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: textField2 ? textField2 : "",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: textField3 ? textField3 : "",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}

      {/* Start Contact Page Area  */}
      <div className="rn-contact-page ptb--120 bg_color--1">
        <ContactTwo image={image} title={title}  />
      </div>
    

      {/* Start Brand Area */}
      <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer heading3={heading3} />
    </>
  );
};

export default Contact;
