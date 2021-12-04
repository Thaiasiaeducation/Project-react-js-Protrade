import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Horizontal() {
  return (
    <div className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-sm-4 col-7">
            <div className="top-bar-left d-flex">
              <div className="clearfix">
                <ul className="contact border-right">
                  <li className="dropdown mr-5">
                    <a href="#" className="text" data-toggle="dropdown">
                      <span>
                        Language <i className="fa fa-caret-down text-white" />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a href="#" className="dropdown-item">
                        English
                      </a>
                      <a className="dropdown-item" href="#">
                        Arabic
                      </a>
                      <a className="dropdown-item" href="#">
                        German
                      </a>
                      <a href="#" className="dropdown-item">
                        Greek
                      </a>
                      <a href="#" className="dropdown-item">
                        Spanish
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
            <div className="top-bar-right">
              <ul className="custom">
                <li>
                  <Link to="/signup" className="text">
                    <i className="fa fa-user mr-1 text" /> <span>Register</span>
                  </Link>
                </li>
                <li>
                  <Link to="signin" className="text">
                    <i className="fa fa-sign-in mr-1 text" /> <span>Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;

{
  /* <li className="dropdown">
                  <a href="#" className="text" data-toggle="dropdown">
                    <i className="fa fa-home mr-1 text" />
                    <span> My Dashboard</span>
                    <i className="fa fa-angle-down ml-1 header-dropdown-icon" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a href="#" className="dropdown-item">
                      <i className="dropdown-icon icon icon-user" /> My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="dropdown-icon icon icon-speech" />
                      Inbox
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="dropdown-icon icon icon-bell" />{" "}
                      Notifications
                    </a>
                    <a href="mydash.html" className="dropdown-item">
                      <i className="dropdown-icon  icon icon-settings" />{" "}
                      Account Settings
                    </a>
                    <a className="dropdown-item" href="login.html">
                      <i className="dropdown-icon icon icon-power" /> Log out
                    </a>
                  </div>
                </li> */
}
