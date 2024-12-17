
"use client";
import { useState, useEffect, Fragment } from "react";
import { Helmet } from 'react-helmet-async';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Slider from "react-slick";
import ServiceList from '../components/ServiceList'
import Team from "../components/Team";
import ServiceThree from "../components/ServiceList";
import BrandTwo from "../components/BrandTwo";// Assuming the path to 
import Contact from "../components/ContactTwo"
import Testimonial from "../components/Testimonial";
import CounterOne from "../components/CounterOne";
import BlogContent from "../components/BlogContent"; // Assuming the path to the BlogContent
import Link from "next/link";
import FooterTwo from "../components/FooterTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoLight from "../assets/images/logo/logo-light.png";
import logoAllDark from "../assets/images/logo/logo-all-dark.png";
import aboutImg from "../assets/images/about/about-3.jpg";
import ScrollSpy from "../components/ScrollSpy";
import ScrollToTop from "react-scroll-up";
import Image from "next/image";
const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Welcome to Sharplogicians!",
    description:
      "Improve performance through design, development, & digital marketing.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];



const slickDot = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [{
      breakpoint: 800,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 993,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 580,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 481,
      settings: {
          slidesToShow: 1,
      }
  }
]
};

const CreativeLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [services, setServices] = useState([]);
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  const [aboutUsData, setAboutUsData] = useState(null);
  const [portfolioData, setPortfolioData] = useState();
  const [teamData, setTeamData] = useState();
  const [testimonials, setTestimonials] = useState();
  const [newsData, setnewsData] = useState();
  const [contactImage, setContactImage] = useState(null);
  const [clientImages, setClientImages] = useState([]);
  const [title, setnewtitle] = useState();
  const [counts, setcounts] = useState([]);
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
    const fetchServices = async () => {
      
      const response = await fetch(`${serverurls}services/`);
      const data = await response.json();
      const response33 = await fetch(`${serverurls}get-home-detail/`);
      const data33=await response33.json()
      setHomeDetail(data33);
      setServices(data.data);
      const response4 = await fetch(`${serverurls}about-us/`);
      const data2 = await response4.json();
      setAboutUsData(data2.data);
      const response5 = await fetch(`${serverurls}portfolio/`);
      const data3 = await response5.json();
      setPortfolioData(data3.data);
      const response6 = await fetch(`${serverurls}team/`);
      const data4 = await response6.json();
      setTeamData(data4.data);
      const response7 = await fetch(`${serverurls}testimonials/`);
      const data5 = await response7.json();
      setTestimonials(data5.data);
      const response9 = await fetch(`${serverurls}news/`);
      const data6 = await response9.json();
      setnewsData(data6.data);

      const response2 = await fetch(`${serverurls}contact/`);
        const data7 = await response2.json();
        setnewtitle(data7.data.title)
        setContactImage(serverurl+data7.data.contact_image);
        const response3 = await fetch(`${serverurls}clients/`);
        const data8 = await response3.json();
        setClientImages(data8.data);
        const response8 = await fetch(`${serverurls}get-count/`);
        const data9 = await response8.json();
        setcounts(data9.data);
      
    };

    fetchServices();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu toggle
  const handleMenuToggle = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  const menuTrigger = () => {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  };

  const closeMenuTrigger = () => {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  };

  useEffect(() => {
    // Submenu toggle logic
    const elements = document.querySelectorAll(".has-droupdown > a");
    elements.forEach((element) => {
      element.onclick = () => {
        const submenu = element.parentElement.querySelector(".submenu");
        if (submenu) {
          submenu.classList.toggle("active");
        }
        element.classList.toggle("open");
      };
    });
  }, []); 

  // Menu dropdown logic
  useEffect(() => {
  
    const dropdownLinks = document.querySelectorAll(".has-dropdown > a");
    dropdownLinks.forEach((link) => {
      link.onclick = () => {
        link.parentElement.querySelector(".submenu")?.classList.toggle("active");
        link.classList.toggle("open");
      };
    });
  }, []);

  return (
    <>
    
      <Helmet>
        <meta charSet="utf-8" />
        <title>
  {homeDetail?.metaname
    ? String(homeDetail.metaname) 
    : "SharpLogicians | Creative Digital Agency"}
</title> 
<meta
  name="description"
  content={
    homeDetail?.metadescription
      ? String(homeDetail.metadescription)
      : "SharpLogicians | Creative Digital Agency"
  }
/>
<meta
  name="keywords"
  content={
    homeDetail?.keywords
      ? String(homeDetail.keywords)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
  }
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

      {/* Start Header Area */}
      <header className={`header-area formobile-menu header--fixed default-color ${sticky ? "sticky" : ""}`}>
        <div className="header-wrapper" id="header-wrapper" onClick={handleMenuToggle}>
          
          <div className="header-left">
            <div className="logo">
              <a href="/">
              {/* <Image src={logoLight} alt="Logo" className="logo-1" />
              <Image src={logoLight} width={0} height={0} alt='Logo images' className="logo-2" /> */}

                <img className="logo-1" src='/logo-light.png' alt="Logo Images" />
                <img className="logo-2" src='/logo-light.png' alt="Logo Images" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <ScrollSpy

                  sectionIds={[
                    "#home",
                    "#service",
                    "#about",
                    "#portfolio",
                    "#team",
                    "#testimonial",
                    "#blog",
                    "#contact",
                  ]}
                />
              </ul>
            </nav>
            <div className="header-btn">
              <a
                className="rn-btn"
                href="/quote"
              >
                <span>Get Quote</span>
              </a>
            </div>
            {/* Start Humberger Menu */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              
              <span onClick={menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={closeMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}

      {/* Start Slider Area */}
      <div className="slider-activation slider-creative-agency" id="home">
        <div className="bg_image bg_image--26" data-black-overlay="6">
          {SlideList.map((value, index) => (
            <div
              className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {homeDetail.heading ? (
                        <h1 className="title theme-gradient">{homeDetail?.heading}</h1>
                      ) : (
                        ""
                      )}
                      {homeDetail.detail ? (
                        <p className="description">{homeDetail?.detail}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Slider Area */}

      {/* Start Service Area */}
      <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
        <div className="container">
          <div className="row creative-service">
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

      {/* Start About Area */}
      <div className="about-area ptb--120 bg_color--5" id="about">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
              {aboutUsData &&  <img className="w-100" src={serverurl+aboutUsData?.image} alt="About Images" />}

                  {/* <Image width={230} height={230} className="w-100" src={serverurl+aboutUsData?.image} alt="About Images" /> */}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{aboutUsData?.heading}</h2>
                    <p className="description">
                      {aboutUsData?.description}
                    </p>
                  </div>
                  <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">{aboutUsData?.firstTitle
                        }</h3>
                        <p>
                        {aboutUsData?.firstDescription

                        }
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">{aboutUsData?.
secondTitle
                        }</h3>
                        <p>
                        {aboutUsData?.
secondDescription
                        }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}
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
                    <Slider {...slickDot}>
                      {portfolioData?.map((value, index) => (
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <div>
                            <div className={`thumbnail ${serverurl}${value.image}`}></div>
                           
                            <img
  className="thumbnail"
  src={`${serverurl}${value?.image}`}
  alt={value.title?value.title:'Portfolio'}
 // Use priority only for critical images
/>                       
                            </div>
                                 
                            <div
                              className={`bg-blr-image ${serverurl+value.image}`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.title}</p>
                              <h4>
                                <Link href="/portfolio-details">{value.heading}</Link>
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
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">{counts[0]?.title}</h3>
                </div>
              </div>
            </div>
            <CounterOne count={counts} />
          </div>
        </div>

      {/* Start Team Area */}
      <div className="rn-team-area ptb--120 bg_color--1" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                  <h2 className="title">Skilled Team</h2>
                  <p>
                    {teamData && teamData[0]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team column="col-lg-4 col-md-6 col-sm-6 col-12" team={teamData} />
            </div>
          </div>
        </div>
      {/* End Team Area */}

      {/* Start Testimonial Area */}
     
      <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial test={testimonials} />
          </div>
        </div>
      {/* End Testimonial Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-title text-left">
                  <h2>Latest News</h2>
                  <p>
                    {newsData && newsData[0]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
              <div className="col-lg-12">
                <Slider {...slickDot}>
                  {newsData?.map((value, i) => (
                    <div className="blog blog-style--1" key={i}>
                      <div className="thumbnail">
                        <Link href={`/news/${value.slug}`}>
                        <img src={serverurl+value?.image} alt="Blog Images" />

                        {/* <Image width={1230} height={530}src={serverurl+value.image} alt="Blog Images" /> */}
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value?.title}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value?.content}</a>
                        </h4>
                        <div className="blog-btn">
                          <Link className="rn-btn text-white" href={`/news/${value?.slug}`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      {/* End Blog Area */}

      {/* Start Contact Area */}
      <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
          <Contact image={contactImage} title={title} />
        </div>
        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo clientImages={clientImages} />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
      </>
  );
};

export default CreativeLanding;