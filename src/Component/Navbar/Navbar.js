import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY > 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div>
        {/* Mobile Header */}
        <div className="sticky">
          <div className="horizontal-header clearfix ">
            <div className="container">
              <a id="horizontal-navtoggle" className="animated-arrow">
                <span />
              </a>
              <span className="smllogo">
                <a href="index.html">
                  <img src="../../assets/images/brand/logo.png" alt="" />
                </a>
              </span>
              <a href="add-post.html" className="callusbtn">
                <i className="fe fe-plus-circle" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        {/* /Mobile Header */}

        <div className="sticky">
          <div className="horizontal-main  bg-dark-transparent clearfix py-lg-3">
            <div className="horizontal-mainwrapper container clearfix">
              <div className="desktoplogo">
                <a href="index.html">
                  <img src="../../assets/images/brand/logo.png" alt="" />
                </a>
              </div>
              <div className="desktoplogo-1">
                <a href="index.html">
                  <img src="../../assets/images/brand/logo.png" alt="" />
                </a>
              </div>
              {/*Nav*/}
              <nav className="horizontalMenu clearfix d-md-flex">
                <ul className="horizontalMenu-list">
                  <li>
                    <Link to="/">
                      Home <span className=" m-0" />
                    </Link>
                  </li>

                  <li>
                    <Link to="/about">About Us </Link>
                  </li>

                  <li>
                    <Link to="contact"> Contact Us</Link>
                  </li>
                  <li className>
                    <span>
                      <a className="btn btn-secondary" href="add-post.html">
                        <i className="fe fe-plus" /> Add Post
                      </a>
                    </span>
                  </li>
                </ul>
              </nav>
              {/*Nav*/}
            </div>
            <div className="body-progress-container">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                id="myBar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
