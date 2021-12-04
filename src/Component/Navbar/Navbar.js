import React, { useState, useEffect } from "react";

import logo from "../../assets/images/footer/Group 1955.png";

function Navbar() {
  return (
    <div
      className="header-main header-style03"
      style={{
        position: "fixed",
        zIndex: "99",
        width: "100%",
      }}
    >
      {/* Mobile Header */}
      <div className="sticky">
        <div className="horizontal-header clearfix ">
          <div className="container">
            <a id="horizontal-navtoggle" className="animated-arrow">
              <span />
            </a>
            <span className="smllogo">
              <a href="index.html">
                <img src="assets/images/brand/Frame.png" alt="" />
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
            <a href="/">
              <img src={logo} alt="img" />
            </a>
          </div>
          {/*Nav*/}
          <nav className="horizontalMenu clearfix d-md-flex">
            <ul className="horizontalMenu-list">
              <li>
                <a href="/">หน้าแรก</a>
              </li>
              <li>
                <a href="about">เกี่ยวกับเรา</a>
              </li>
              <li>
                <a href="contact">ติดต่อ</a>
              </li>
              <li>
                <a href="Signin" style={{ paddingLeft: "1rem" }}>
                  เข้าสู่ระบบ
                </a>
              </li>
              <li>
                <div className="btn-list">
                  <a
                    href="Signup"
                    className="btn btn-info btn-lg mb-0 d-inline-flex pb-2 h-100"
                  >
                    สมัครสมาชิก
                  </a>
                </div>
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
  );
}

export default Navbar;
