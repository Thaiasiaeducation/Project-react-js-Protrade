import React from "react";

function Navbar() {
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
                  <a href="#">
                    Home <span className="fa fa-caret-down m-0" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home Style</a>
                    </li>
                    <li>
                      <a href="index2.html">Home Style 02</a>
                    </li>
                    <li>
                      <a href="index3.html">Home Style 03</a>
                    </li>
                    <li>
                      <a href="index4.html">Home Style 04</a>
                    </li>
                    <li>
                      <a href="index5.html">Home Style 05</a>
                    </li>
                    <li>
                      <a href="index6.html">Home Style 06</a>
                    </li>
                    <li>
                      <a href="index7.html">Home Style 07</a>
                    </li>
                    <li>
                      <a href="index8.html">Home Style 08</a>
                    </li>
                    <li>
                      <a href="index9.html">Home Style 09</a>
                    </li>
                    <li>
                      <a href="index10.html">Home Style 10</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Categories <span className="fa fa-caret-down m-0" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Tours{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            Tour List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="tour-list.html">Tour List 01</a>
                            </li>
                            <li>
                              <a href="tour-list2.html">Tour List 02</a>
                            </li>
                            <li>
                              <a href="tour-list3.html">Tour List 03</a>
                            </li>
                            <li>
                              <a href="tour-list-map.html">Tour List Map 01</a>
                            </li>
                            <li>
                              <a href="tour-list-map2.html">Tour List Map 02</a>
                            </li>
                            <li>
                              <a href="tour-list-map3.html">Tour List Map 03</a>
                            </li>
                            <li>
                              <a href="tour-list-right.html">Tour List Right</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Tour Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="tours.html">Tour 01</a>
                            </li>
                            <li>
                              <a href="tours2.html">Tour 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Tour Advisor{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="tour-advisor-profile.html">
                                Tour Advisor Profile
                              </a>
                            </li>
                            <li>
                              <a href="tour-advisor-registration.html">
                                Tour Advisor Registration
                              </a>
                            </li>
                            <li>
                              <a href="tour-advisor-search.html">
                                Tour Advisor Search
                              </a>
                            </li>
                            <li>
                              <a href="tour-advisor-edit.html">
                                Tour Advisor Edit
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="tour-compare.html">Tour Compare</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Hotels{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-hotel.html">Hotel Home Page</a>
                        </li>
                        <li>
                          <a href="#">
                            Hotel List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="hotel-list.html">Hotel List</a>
                            </li>
                            <li>
                              <a href="hotel-list2.html">Hotel List 02</a>
                            </li>
                            <li>
                              <a href="hotel-list-map.html">Hotel List Map</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Hotel Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="hotels.html">Hotels 01</a>
                            </li>
                            <li>
                              <a href="hotels2.html">Hotels 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Flights{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-flight.html">Flight Home Page</a>
                        </li>
                        <li>
                          <a href="#">
                            Flight List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="flight-list.html">Flight List</a>
                            </li>
                            <li>
                              <a href="flight-list2.html">Flight List 02</a>
                            </li>
                            <li>
                              <a href="flight-list-map.html">Flight List Map</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Flight Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="flights.html">Flights 01</a>
                            </li>
                            <li>
                              <a href="flights2.html">Flights 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Car{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-car.html">Cars Home Page</a>
                        </li>
                        <li>
                          <a href="#">
                            Cars List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="car-list.html">Cars List</a>
                            </li>
                            <li>
                              <a href="car-list2.html">Cars List 02</a>
                            </li>
                            <li>
                              <a href="car-list-map.html">Cars List Map</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Car Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cars.html">Cars 01</a>
                            </li>
                            <li>
                              <a href="cars2.html">Cars 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Cruises{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-cruises.html">Cruises Home Page</a>
                        </li>
                        <li>
                          <a href="#">
                            Cruises List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cruises-list.html">Cruises List</a>
                            </li>
                            <li>
                              <a href="cruises-list2.html">Cruises List 02</a>
                            </li>
                            <li>
                              <a href="cruises-list-map.html">
                                Cruises List Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Cruise Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cruises.html">Cruises 01</a>
                            </li>
                            <li>
                              <a href="cruises2.html">Cruises 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Buses{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-bus.html">Bus Home Page</a>
                        </li>
                        <li>
                          <a href="#">
                            Bus List{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="bus-list.html">Bus List</a>
                            </li>
                            <li>
                              <a href="bus-list2.html">Bus List 02</a>
                            </li>
                            <li>
                              <a href="bus-list-map.html">Bus List Map</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Bus Details{" "}
                            <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="buses.html">Buses 01</a>
                            </li>
                            <li>
                              <a href="buses2.html">Buses 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us </a>
                </li>
                <li>
                  <a href="#">
                    Features <span className="fa fa-caret-down m-0" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Widgets{" "}
                        <span className="badge-navigation bg-light">3</span>{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="widgets.html">Card Widgets</a>
                        </li>
                        <li>
                          <a href="widgets-carousel.html">Carousel Widgets</a>
                        </li>
                        <li>
                          <a href="widgets-verticalscroll.html">
                            Vertical Scroll Widgets
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Header Styles{" "}
                        <span className="badge-navigation bg-light">10</span>{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="header-style1.html">Header Style 01</a>
                        </li>
                        <li>
                          <a href="header-style2.html">Header Style 02</a>
                        </li>
                        <li>
                          <a href="header-style3.html">Header Style 03</a>
                        </li>
                        <li>
                          <a href="header-style4.html">Header Style 04</a>
                        </li>
                        <li>
                          <a href="header-style5.html">Header Style 05</a>
                        </li>
                        <li>
                          <a href="header-style6.html">Header Style 06</a>
                        </li>
                        <li>
                          <a href="header-style7.html">Header Style 07</a>
                        </li>
                        <li>
                          <a href="header-style8.html">Header Style 08</a>
                        </li>
                        <li>
                          <a href="header-style9.html">Header Style 09</a>
                        </li>
                        <li>
                          <a href="header-style10.html">Header Style 10</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Footers style{" "}
                        <span className="badge-navigation bg-light">10</span>{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="footer-style.html">Footer Style 01</a>
                        </li>
                        <li>
                          <a href="footer-style2.html">Footer Style 02</a>
                        </li>
                        <li>
                          <a href="footer-style3.html">Footer Style 03</a>
                        </li>
                        <li>
                          <a href="footer-style4.html">Footer Style 04</a>
                        </li>
                        <li>
                          <a href="footer-style5.html">Footer Style 05</a>
                        </li>
                        <li>
                          <a href="footer-style6.html">Footer Style 06</a>
                        </li>
                        <li>
                          <a href="footer-style7.html">Footer Style 07</a>
                        </li>
                        <li>
                          <a href="footer-style8.html">Footer Style 08</a>
                        </li>
                        <li>
                          <a href="footer-style9.html">Footer Style 09</a>
                        </li>
                        <li>
                          <a href="footer-style10.html">Footer Style 10</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Pages <span className="fa fa-caret-down m-0" />
                  </a>
                  <div className="horizontal-megamenu clearfix">
                    <div className="container">
                      <div className="megamenu-content">
                        <div className="row">
                          <ul className="col link-list">
                            <li className="title mb-0 mt-0">Tour Package</li>
                            <li>
                              <a href="ownpackage.html">Build Own Package</a>
                            </li>
                            <li>
                              <a href="package-tour-timeline.html">
                                Package Timeline
                              </a>
                            </li>
                            <li>
                              <a href="booknow.html">Tour Book Now</a>
                            </li>
                            <li className="title mb-0 mt-2">Post Pages</li>
                            <li>
                              <a href="add-post.html">Add Post</a>
                            </li>
                            <li>
                              <a href="add-post2.html">Add Post 02</a>
                            </li>
                            <li>
                              <a href="add-tour.html">Add Tour</a>
                            </li>
                            <li>
                              <a href="edit-post.html">Edit Post</a>
                            </li>
                            <li>
                              <a href="edit-post2.html">Edit Post 02</a>
                            </li>
                            <li>
                              <a href="edit-tour.html">Edit Tour</a>
                            </li>
                          </ul>
                          <ul className="col link-list">
                            <li className="title">User Pages</li>
                            <li>
                              <a href="userprofile.html"> User Profile</a>
                            </li>
                            <li>
                              <a href="personal-profile.html">
                                Personal Profile
                              </a>
                            </li>
                            <li>
                              <a href="pricing.html">Pricing</a>
                            </li>
                            <li>
                              <a href="inovice.html">Invoice</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="terms-conditions.html">
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a href="page-success.html">
                                {" "}
                                Success Alert Page
                              </a>
                            </li>
                            <li>
                              <a href="page-warning.html">
                                {" "}
                                Warning Alert Page
                              </a>
                            </li>
                            <li>
                              <a href="page-danger.html"> Danger Alert Page</a>
                            </li>
                          </ul>
                          <ul className="col link-list">
                            <li className="title mb-0 mt-0">Categories</li>
                            <li>
                              <a href="categories.html">Categories</a>
                            </li>
                            <li>
                              <a href="categories2.html">Categories 02</a>
                            </li>
                            <li className="title mb-0 mt-2">Custom Pages</li>
                            <li>
                              <a href="typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="forgot.html">Forgot Password</a>
                            </li>
                            <li>
                              <a href="lockscreen.html">Lock Screen</a>
                            </li>
                            <li>
                              <a href="underconstruction.html">
                                Under Constructions
                              </a>
                            </li>
                          </ul>
                          <ul className="col link-list">
                            <li className="title">My Dashboard</li>
                            <li>
                              <a href="mydash.html">My Dashboard</a>
                            </li>
                            <li>
                              <a href="mytours.html">My Tours</a>
                            </li>
                            <li>
                              <a href="myfavorite.html">My Favourite Tours</a>
                            </li>
                            <li>
                              <a href="managed-tours.html">Managed Tours</a>
                            </li>
                            <li>
                              <a href="managed-tours-completed.html">
                                Managed Tours Completed
                              </a>
                            </li>
                            <li>
                              <a href="managed-tours-cancelled.html">
                                Managed Tours Cancelled
                              </a>
                            </li>
                            <li>
                              <a href="payments.html"> Payments</a>
                            </li>
                            <li>
                              <a href="mybookings.html"> My Tour Bookings</a>
                            </li>
                            <li>
                              <a href="settings.html"> Settings</a>
                            </li>
                            <li>
                              <a href="safety-tips.html">Safety Tips</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Blog <span className="fa fa-caret-down m-0" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Blog Grid{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid.html">Blog Grid Left</a>
                        </li>
                        <li>
                          <a href="blog-grid-right.html">Blog Grid Right</a>
                        </li>
                        <li>
                          <a href="blog-grid-center.html">Blog Grid Center</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Blog List{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-list.html">Blog List Left</a>
                        </li>
                        <li>
                          <a href="blog-list-right.html">Blog List Right</a>
                        </li>
                        <li>
                          <a href="blog-list-center.html">Blog List Center</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Blog Details{" "}
                        <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-details.html">Blog Details Left</a>
                        </li>
                        <li>
                          <a href="blog-details-right.html">
                            Blog Details Right
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-center.html">
                            Blog Details Center
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html"> Contact Us</a>
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
    </>
  );
}

export default Navbar;
