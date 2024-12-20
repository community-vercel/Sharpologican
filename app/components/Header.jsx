
import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";
// import logoDefault from "../assets/images/logo/logo.png";
// import logoLight from "../assets/images/logo-light.png";

// import logoDark from "../assets/images/logo/logo-dark.png";
// import logoSymbolDark from "../assets/images/logo/logo-symbol-dark.png";
// import logoSymbolLight from "../assets/images/logo/logo-symbol-light.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
  
  }
  componentDidMount() {
    // Now it's safe to use window or document
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl =                 <Image className="logo-1" width={280} height={72} src="/logo-light.png" alt="Sharplogicians" layout="responsive"  />;
      // <img className="logo-1" src="/logo-light.png" alt="Logo" />

    } else if (logo === "dark") {
      logoUrl =                 <Image className="logo-2" width={280} height={72} src="/logo-light.png" alt="Sharplogicians" layout="responsive"  />;
    } else {
      logoUrl =                 <Image className="logo-1"width={280} height={72} src="/logo-light.png" alt="Sharplogicians" layout="responsive"  />;
    }


    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
            
                 
                <li>
                  <Link href="/#about" >About</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                
                <li>
                  <Link href="/#team">Team</Link>
                </li>
             
                <li>
                  <Link href="/#testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link href="/#blog">Blog    </Link>
                </li>
                <li>
                  <Link href="/contact" >Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a className="rn-btn" href="/quote">
                <span>Get a quote</span>
              </a>
            </div>
            {/* Start Humberger Menu */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
