'use client';
import React, { useState,useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://sharplogicians.com/contact" },
  { Social: <FaLinkedinIn />, link: "https://sharplogicians.com/contact" },
  { Social: <FaInstagram />, link: "https://sharplogicians.com/contact" },
  { Social: <FaTwitter />, link: "https://sharplogicians.com/contact" },
];

const Footer=({heading3})=>{
    const [heading, setheading] = useState(heading3 || '');
   
  
    const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
   useEffect(() => {
      const getDetails = async () => {
    
          const response2 = await fetch(`${serverurl}contact/`);
  
          if (response2.ok) {
            const data7 = await response2.json();
            setheading(data7.data.heading3);
          }
        }
          getDetails();
        }, []);
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ready To Do This</span>
                   
                    {heading3 && heading3?heading3 &&(
                       <h2>
                      {heading3?heading:''}
                      </h2>

                    ): (
                      <h2>
                      {heading && heading?heading:''}
                      </h2>  
                    )
}

                     
                
                    <a className="rn-button-style--2" href="/contact">
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Link</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/portfolio">Work</a>
                          </li>
                          <li>
                            <a href="/#about">About</a>
                          </li>
                          <li>
                            <a href="/contact">Let's Talk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Say Hello</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:adil@gmail.com.com">
                             adil@gmail.com.com
                            </a>
                          </li>
                          <li>
                            <a href="mailto:adeel.sheikh@sharpoligicans.com">adeel.sheikh@sharpoligicans.com</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2024  All rights reserved..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }

export default Footer;
