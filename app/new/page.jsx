"use client";
import { useState, useEffect, Fragment } from "react";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Slider from "react-slick";
import ServiceList from "../components/ServiceList";
import Team from "../components/Team";
import BrandTwo from "../components/BrandTwo"; // Assuming the path to
import Contact from "../components/ContactTwo";
import Testimonial from "../components/Testimonial";
import CounterOne from "../components/CounterOne";
import Link from "next/link";
import FooterTwo from "../components/FooterTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoLight from "../assets/images/logo/logo-light.png";
import logoAllDark from "../assets/images/logo/logo-all-dark.png";
import ScrollSpy from "../components/ScrollSpy";
import ScrollToTop from "react-scroll-up";
import Image from "next/image";
import { H1, H2 } from "../components/Typrography";
import { Suspense } from "react";
import ServiceThreeHome from "../components/ServiceListHome";

const SlideList = [
  {
    textPosition: "text-center",

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
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CreativeLanding = ({ homeDetail }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [services, setServices] = useState([]);
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
  const [aboutUsData, setAboutUsData] = useState(null);
  const [portfolioData, setPortfolioData] = useState();
  const [teamData, setTeamData] = useState();
  const [testimonials, setTestimonials] = useState();
  const [newsData, setnewsData] = useState();
  const [contactImage, setContactImage] = useState(null);
  const [clientImages, setClientImages] = useState([]);
  const [title, setnewtitle] = useState();
  const [counts, setcounts] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}services/`);
      const data = await response.json();

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
      setnewtitle(data7.data.title);
      setContactImage(serverurl + data7.data.contact_image);
      const response3 = await fetch(`${serverurls}clients/`);
      const data8 = await response3.json();
      setClientImages(data8.data);
      const response8 = await fetch(`${serverurls}get-count/`);
      const data9 = await response8.json();
      setcounts(data9.data);
    };

    fetchServices();
  }, [homeDetail]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Start with essential data fetches
  //         const [servicesResponse, aboutUsResponse] = await Promise.all([
  //           fetch(`${serverurls}services/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}about-us/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //         ]);

  //         const [servicesData, aboutUsData] = await Promise.all([
  //           servicesResponse.json(),
  //           aboutUsResponse.json(),
  //         ]);

  //         // Set the critical state (services and aboutUs)
  //         setServices(servicesData.data);
  //         setAboutUsData(aboutUsData.data);

  //         // Non-critical data can be fetched after rendering the page
  //         const [
  //           portfolioResponse,
  //           teamResponse,
  //           testimonialsResponse,
  //           newsResponse,
  //           contactResponse,
  //           clientsResponse,
  //           countsResponse,
  //         ] = await Promise.all([
  //           fetch(`${serverurls}portfolio/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}team/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}testimonials/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}news/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}contact/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}clients/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //           fetch(`${serverurls}get-count/`, {
  //             cache: "force-cache", // Forces the browser to use the cache if available
  //           }),
  //         ]);

  //         const [
  //           portfolioData,
  //           teamData,
  //           testimonialsData,
  //           newsData,
  //           contactData,
  //           clientImages,
  //           counts,
  //         ] = await Promise.all([
  //           portfolioResponse.json(),
  //           teamResponse.json(),
  //           testimonialsResponse.json(),
  //           newsResponse.json(),
  //           contactResponse.json(),
  //           clientsResponse.json(),
  //           countsResponse.json(),
  //         ]);

  //         // Set non-critical state after initial page load
  //         setPortfolioData(portfolioData.data);
  //         setTeamData(teamData.data);
  //         setTestimonials(testimonialsData.data);
  //         setnewsData(newsData.data);
  //         setnewtitle(contactData.data.title);
  //         setContactImage(serverurl + contactData.data.contact_image);
  //         setClientImages(clientImages.data);
  //         setcounts(counts.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         // Handle errors appropriately (e.g., display an error message)
  //       }
  //     };

  //     fetchData();
  //   }, [homeDetail]); // Empty d
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state
  const [isSticky, setIsSticky] = useState(false); // Manage sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  
  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu
  const closeMenu = () => setIsMenuOpen(false);
  const metadata = {
    title: homeDetail?.metaname
      ? String(homeDetail.metaname)
      : "SharpLogicians | Creative Digital Agency",
    description: homeDetail?.metadescription
      ? String(homeDetail?.metadescription)
      : "SharpLogicians | Creative Digital Agency",
    keywords: homeDetail?.keywords
      ? String(homeDetail.keywords)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title:
        homeDetail?.metaname ||
        homeDetail?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        homeDetail?.metadescription ||
        `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        homeDetail?.metaname ||
        homeDetail?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        homeDetail?.metadescription ||
        `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
  };
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Function to handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Suspense fallback={<p>Loading posts...</p>}>
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
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images} />

        {/* Header */}
        <header
          className={`header-area formobile-menu header--fixed default-color ${
            isSticky ? "sticky" : ""
          }`}
        >
          <div className={`header-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
            {/* Logo */}
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="logo-1"
                    width={270}
                    height={72}
                    src="/logo-light.png"
                    alt="Logo"
                  />
                  <Image
                    className="logo-2"
                    width={270}
                    height={72}
                    src="/logo-light.png"
                    alt="Logo"
                  />
                  {/* <img className="logo-2" src="/logo-light.png" alt="Logo" /> */}
                </Link>
              </div>
            </div>
            {/* Main Menu */}
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
                    activeClass="is-current" // Add your active class name
                    closeMenu={closeMenu} // Pass the closeMenu function here
                  />
                </ul>
              </nav>

              {/* Quote Button */}
              <div className="header-btn">
                <Link className="rn-btn" href="/quote">
                  <span>Get Quote</span>
                </Link>
              </div>

              {/* Hamburger Menu */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span onClick={toggleMenu} className="menutrigger text-white">
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area */}

        {/* Start Slider Area */}
        {/* <div className="slider-activation slider-creative-agency" id="home"> */}
        <div
          className={`bg_images bg_images--26 ${loaded ? "loaded" : ""}`}
          data-black-overlay="6"
        >
          <div
            className={`bg_images--26`}
            style={{
              backgroundImage: `url('/bg_images--26.webp')`,
            }}
            data-black-overlay="6"
          >
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {homeDetail?.heading ? (
                          <H1 className="title theme-gradient">
                            {homeDetail?.heading}
                          </H1>
                        ) : (
                          ""
                        )}
                        {homeDetail?.detail && (
                          <H2 className="description">{homeDetail?.detail}</H2>
                        )}

                        {value.buttonText && (
                          <div className="slide-btn">
                            <Link
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </Link>
                          </div>
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
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceThreeHome
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
                    {/* {aboutUsData &&  <img className="w-100" src={serverurl+aboutUsData?.image} alt="About Images" />} */}
                    {aboutUsData && (
                      <Image
                        src={serverurl + aboutUsData?.image}
                        alt="About Images"
                        width={500}
                        height={665}
                        layout="responsive"
                        loading="lazy"
                        className="w-100"
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{aboutUsData?.heading}</h2>
                      <p className="description">{aboutUsData?.description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">{aboutUsData?.firstTitle}</h3>
                          <p>{aboutUsData?.firstDescription}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">{aboutUsData?.secondTitle}</h3>
                          <p>{aboutUsData?.secondDescription}</p>
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
                    <p>{portfolioData && portfolioData[0]?.description}</p>
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
                              <div
                                className={`thumbnail ${serverurl}${value.image}`}
                              ></div>
                              {value?.image && (
                                <Image
                                  width={500}
                                  height={665}
                                  className="thumbnail"
                                  src={`${serverurl}${value?.image}`}
                                  alt={value.title ? value.title : "Portfolio"}
                                  layout="responsive"
                                />
                              )}
                            </div>

                            <div
                              className={`bg-blr-image ${
                                serverurl + value.image
                              }`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.title}</p>
                              <h4>
                                <Link href={`/portfolio/${value.slug}`}>
                                  {value.heading}
                                </Link>
                              </h4>
                              <Link
                                className="portfolio-button rn-btn"
                                href={`/portfolio/${value.slug}`}
                              >
                                {value.buttonText}
                              </Link>
                            </div>
                          </div>

                          {/* <div className="content">
                          <div className="inner">
                            <p>{value.title}</p>
                            <h4>
                              <Link href={`/portfolio/${value.slug}`}>
                                {value.heading}
                              </Link>
                            </h4>
                            <div className="portfolio-button">
                              <Link
                                className="rn-btn"
                                href={`/portfolio/${value.slug}`}
                              >
                                {value.buttonText}
                              </Link>
                            </div>
                          </div>
                        </div> */}
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
                  <p>{teamData && teamData[0]?.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team
                column="col-lg-4 col-md-6 col-sm-6 col-12"
                team={teamData}
              />
            </div>
          </div>
        </div>
        {/* End Team Area */}

        {/* Start Testimonial Area */}

        <div
          className="rn-testimonial-area bg_color--5 ptbss--120"
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
                  <p>{newsData && newsData[0]?.description}</p>
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
                          {/* <img src={serverurl+value?.image} alt="Blog Images" /> */}
                          {value?.image && (
                            <Image
                              width={390}
                              height={532}
                              src={serverurl + value?.image}
                              alt="News Images"
                              layout="responsive"
                            />
                          )}
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value?.title}</p>
                        <h4 className="title">
                          <Link href={`/news/${value.slug}`}>
                            {value?.content}
                          </Link>
                        </h4>
                        <div className="blog-btn">
                          <Link
                            className="rn-btn text-white"
                            href={`/news/${value?.slug}`}
                          >
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
      </Suspense>
    </>
  );
};

export default CreativeLanding;
