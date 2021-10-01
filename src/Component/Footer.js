import React from "react";

function Footer() {
  return (
    <>
      <section>
        <footer className="bg-dark-purple text-white">
          <div className="py-4 footer-main text-white-50 p-0 border-bottom-0">
            <div className="container">
              <div className="row">
                <div className="col-lg">
                  <ul className="payments mb-0 mt-2">
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-cc-amex" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-cc-visa" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i
                          className="fa fa-credit-card-alt"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-cc-mastercard" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-cc-paypal" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-cc-discover" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="payments-icon">
                        <i className="fa fa-google-wallet" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg col-lg-auto">
                  <div className="form-group d-flex mb-0">
                    <div className="mr-4 w-180">
                      <select
                        className="form-control select2"
                        data-placeholder="Select Country"
                      >
                        <option value="en">English</option>
                        <option value="en">Arabic</option>
                        <option value="en">German</option>
                        <option value="en">Greek</option>
                      </select>
                    </div>
                    <div className="mr-4 w-180">
                      <select
                        className="form-control select2"
                        data-placeholder="Select Country"
                      >
                        <option value="en">USD</option>
                        <option value="en">EUR</option>
                        <option value="en">INR</option>
                        <option value="en">GBP</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-main border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <img
                    src="../../assets/images/brand/logo1.png"
                    alt=""
                    className
                  />
                  <p className="mb-1 mt-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    voluptatum
                  </p>
                  <h6 className="mb-2 mt-5">Social Icons</h6>
                  <ul className="social-icons mb-0 mt-3">
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-facebook text-white-50" />
                      </a>
                    </li>
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-twitter text-white-50" />
                      </a>
                    </li>
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-rss text-white-50" />
                      </a>
                    </li>
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-youtube text-white-50" />
                      </a>
                    </li>
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-linkedin text-white-50" />
                      </a>
                    </li>
                    <li>
                      <a className="social-icon" href>
                        <i className="fa fa-google-plus text-white-50" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <h6>Popular Tour Places</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Canada Navy City
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Watican Flower Park
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Paris Effil Tower
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        London Stone Bridegs
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Contact US
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Recent News
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right mr-2 text-secondary" />{" "}
                        Terms and Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <h6 className="mt-6 mt-xl-0">Get In Touch</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#">
                        <i className="fa fa-home mr-3 text-secondary" /> New
                        York, NY 10012, US-52014
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope mr-3 fs-12 text-secondary" />{" "}
                        info12323@example.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone mr-3 text-secondary" /> + 01
                        234 567 88, + 01 234 567 88
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                  Copyright © 2020{" "}
                  <a href="#" className="fs-14 text-secondary">
                    Gowell
                  </a>
                  . Designed by{" "}
                  <a href="spruko.com" className="fs-14 text-secondary">
                    Spruko
                  </a>{" "}
                  All rights reserved.
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
