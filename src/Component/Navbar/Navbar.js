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
              <li className="select-country mr-5">
                <select
                  className="form-control select2-flag-search"
                  data-placeholder="Select Country"
                >
                  <option value="TH">Thailand</option>
                  <option value="UM">United States of America</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="AD">Andorra</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AU">Australia</option>
                  <option value="AM">Armenia</option>
                  <option value="AO">Angola</option>
                  <option value="AR">Argentina</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BB">Barbados</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BE">Belgium</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BH">Bahrain</option>
                  <option value="BJ">Benin</option>
                  <option value="BN">Brunei</option>
                  <option value="BO">Bolivia</option>
                  <option value="BT">Bhutan</option>
                  <option value="BY">Belarus</option>
                  <option value="CD">Congo</option>
                  <option value="CA">Canada</option>
                  <option value="CF">Central African Republic</option>
                  <option value="CI">Cote d'Ivoire</option>
                  <option value="CL">Chile</option>
                  <option value="CM">Cameroon</option>
                  <option value="CN">China</option>
                  <option value="CO">Colombia</option>
                  <option value="CU">Cuba</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="CY">Cyprus</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DK">Denmark</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EE">Estonia</option>
                  <option value="ER">Eritrea</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FI">Finland</option>
                  <option value="FJ">Fiji</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GD">Grenada</option>
                  <option value="GE">Georgia</option>
                  <option value="GH">Ghana</option>
                  <option value="GH">Ghana</option>
                  <option value="HN">Honduras</option>
                  <option value="HT">Haiti</option>
                  <option value="HU">Hungary</option>
                  <option value="ID">Indonesia</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IN">India</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Iran</option>
                  <option value="IS">Iceland</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JO">Jordan</option>
                  <option value="JP">Japan</option>
                  <option value="KE">Kenya</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="LA">Laos</option>
                  <option value="LB">Lebanons</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LR">Liberia</option>
                  <option value="LS">Lesotho</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="LV">Latvia</option>
                  <option value="LY">Libya</option>
                  <option value="MA">Morocco</option>
                  <option value="MC">Monaco</option>
                  <option value="MD">Moldova</option>
                  <option value="ME">Montenegro</option>
                  <option value="MG">Madagascar</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MK">Macedonia (FYROM)</option>
                  <option value="ML">Mali</option>
                  <option value="MM">Myanmar (formerly Burma)</option>
                  <option value="MN">Mongolia</option>
                  <option value="MR">Mauritania</option>
                  <option value="MT">Malta</option>
                  <option value="MV">Maldives</option>
                  <option value="MW">Malawi</option>
                  <option value="MX">Mexico</option>
                  <option value="MZ">Mozambique</option>
                  <option value="NA">Namibia</option>
                  <option value="NG">Nigeria</option>
                  <option value="NO">Norway</option>
                  <option value="NP">Nepal</option>
                  <option value="NR">Nauru</option>
                  <option value="NZ">New Zealand</option>
                  <option value="OM">Oman</option>
                  <option value="PA">Panama</option>
                  <option value="PF">Paraguay</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PH">Philippines</option>
                  <option value="PK">Pakistan</option>
                  <option value="PL">Poland</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SC">Seychelles</option>
                  <option value="SD">Sudan</option>
                  <option value="SE">Sweden</option>
                  <option value="SG">Singapore</option>
                  <option value="TG">Togo</option>
                  <option value="TH">Thailand</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TN">Tunisia</option>
                  <option value="TO">Tonga</option>
                  <option value="TR">Turkey</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TW">Taiwan</option>
                  <option value="UA">Ukraine</option>
                  <option value="UG">Uganda</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VA">Vatican City (Holy See)</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VU">Vanuatu</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
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
