import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/footer/Group 1955.png";

function Footer() {
  return (
    <>
      <section>
        <footer className="bg-dark-purple text-white">
          <div
            className="py-4 footer-main text-white-50 p-0 border-bottom-0"
            style={{ background: "#004040" }}
          ></div>
          <div
            className="footer-main border-bottom"
            style={{ background: "#ffffff", color: "#4F4F4F" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <img src={logo} alt="img" className />
                  <h4 className="mb-1 mt-2" style={{ color: "#4f4f4f" }}>
                    Corpers Apartments is an initiative to ease the life of
                    corpers in Nigeria.
                  </h4>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <h6>Popular Tour Places</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />
                        Canada Navy City
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Watican Flower Park
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Paris Effil Tower
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        London Stone Bridegs
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />
                        Best Summer Camps
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-12">
                  <h6>Useful Links</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Contact US
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Recent News
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Terms and Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <h6 className="mt-6 mt-xl-0">Contact us</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-home mr-3 text-secondary" /> New
                        York, NY 10012, US-52014
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-envelope mr-3 fs-12 text-secondary" />{" "}
                        info12323@example.com
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-phone mr-3 text-secondary" /> + 01
                        234 567 88, + 01 234 567 88
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#4f4f4f" }}>
                        <i className="fa fa-print mr-3 text-secondary" /> + 01
                        234 567 89, + 01 234 567 89
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-purple text-white-50 p-3">
            <div className="container">
              <div className="row d-flex">
                <div className="col-lg-12 col-sm-12  mt-2 mb-2 text-center ">
                  Copyright © 2021 All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
