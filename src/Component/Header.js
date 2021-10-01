import React from "react";
import $ from "jquery";

$(".cover-image").each(function () {
  var attr = $(this).attr("data-image-src");
  if (typeof attr !== typeof undefined && attr !== false) {
    $(this).css("background", "url(" + attr + ") center center");
  }
});

function Header() {
  return (
    <>
      <div
        className="banner-1 cover-image sptb-2 sptb-tab bg-background2"
        data-image-src="../../assets/images/banners/headerindex.jpg"
      >
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white mb-4">
              <h1 className="mb-3">CONDO ASIA</h1>
              <p>The Best Condominium in Asia.</p>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 d-block mx-auto">
                <div className="item-search-tabs travel-content">
                  <div className="item-search-menu">
                    <ul className="nav">
                      <li>
                        <a className="active" data-toggle="tab" href="#tab1">
                          Location nearby your
                        </a>
                      </li>
                      <li>
                        <a className data-toggle="tab" href="#tab2">
                          Condominium
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab1">
                      <div className="search-background">
                        <div className="form row no-gutters">
                          <div className="form-group col-xl-2 col-lg-2 col-md-12 mb-0">
                            <input
                              type="text"
                              className="flexdatalist form-control input-lg location-input border-right br-tr-0 br-br-0"
                              data-min-length={1}
                              list="countries"
                              name="countries"
                              placeholder="Current Location"
                            />
                            <datalist id="countries">
                              <option value="UM">
                                United States of America
                              </option>
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
                              <option value="CF">
                                Central African Republic
                              </option>
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
                              <option value="MM">
                                Myanmar (formerly Burma)
                              </option>
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
                              <option value="VA">
                                Vatican City (Holy See)
                              </option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="VU">Vanuatu</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </datalist>
                            <span>
                              <img
                                src="../../assets/images/svgs/gps.svg"
                                className="location-gps"
                                alt="img"
                              />
                            </span>
                          </div>
                          <div className="form-group col-xl-2 col-lg-2 col-md-12 mb-0 select2-lg">
                            <select className="form-control select2-show-search border-bottom-0 w-100">
                              <option>Destination Location</option>
                              <option>Australia</option>
                              <option>Chicago</option>
                              <option>Germany</option>
                              <option>India</option>
                              <option>Japan</option>
                              <option>London</option>
                              <option>Los angels</option>
                              <option>Spain</option>
                              <option>Sidney</option>
                            </select>
                          </div>
                          <div className="form-group col-xl-8 col-lg-8 col-md-12 mb-0 location">
                            <div className="row no-gutters">
                              <div className="form-group col-xl-3 col-lg-3 col-md-12 mb-0">
                                <input
                                  className="form-control input-lg fc-datepicker br-0 border-right border-left"
                                  placeholder="Travel Date"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-xl-3 col-lg-3 col-md-12 mb-0">
                                <input
                                  className="form-control input-lg fc-datepicker br-0 border-right border-left-0"
                                  placeholder="Return Date"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-xl-2 col-lg-2 col-md-12 mb-0 select2-lg border-right">
                                <select className="form-control select2-show-search border-bottom-0 w-100">
                                  <option>Persons</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                </select>
                              </div>
                              <div className="form-group col-xl-2 col-lg-2 col-md-12 mb-0 select2-lg">
                                <select className="form-control select2-show-search border-bottom-0 w-100">
                                  <option>Kids</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                </select>
                              </div>
                              <div className="col-xl-2 col-lg-2 col-md-12 mb-0">
                                <a
                                  className="btn btn-block btn-secondary btn-lg fs-14 br-tl-0 br-bl-0 shadow-none"
                                  href="#"
                                >
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab2">
                      <div className="search-background">
                        <div className="form row no-gutters">
                          <div className="form-group  col-xl-2 col-lg-2 col-md-12 mb-0">
                            <input
                              type="text"
                              className="form-control location-input border-right br-tr-0 br-br-0 input-lg"
                              placeholder="Search for Hotels"
                            />
                            <span>
                              <img
                                src="../../assets/images/banners/headerindex.jpg"
                                className="location-gps"
                                alt="img"
                              />
                            </span>
                          </div>
                          <div className="form-group  col-xl-2 col-lg-2 col-md-12 mb-0 select2-lg">
                            <select
                              className="form-control select2-show-search border-bottom-0 w-100"
                              data-placeholder="Select"
                            >
                              <optgroup label="Categories">
                                <option>Persons</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group  col-xl-2 col-lg-2 col-md-12 mb-0 border-left select2-lg">
                            <select
                              className="form-control select2-show-search border-bottom-0 w-100 border-left"
                              data-placeholder="Select"
                            >
                              <optgroup label="Categories">
                                <option>Kids</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6  col-md-12 mb-0 location">
                            <div className="row no-gutters">
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0 border-right border-left">
                                <input
                                  className="form-control fc-datepicker br-0 input-lg"
                                  placeholder="Checkin"
                                  type="text"
                                />
                              </div>
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0">
                                <input
                                  className="form-control fc-datepicker br-0 input-lg"
                                  placeholder="CheckOut"
                                  type="text"
                                />
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 mb-0">
                                <a
                                  className="btn btn-block btn-secondary fs-14 br-tl-0 br-bl-0 shadow-none btn-lg"
                                  href="#"
                                >
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab3">
                      <div className="search-background">
                        <div className="form row no-gutters">
                          <div className="form-group  col-xl-2 col-lg-2 col-md-12 mb-0">
                            <input
                              type="text"
                              className="form-control border-right br-tr-0 br-br-0 input-lg"
                              placeholder="From"
                            />
                          </div>
                          <div className="form-group  col-xl-2 col-lg-2 col-md-12 mb-0">
                            <input
                              type="text"
                              className="form-control br-0 border-right input-lg"
                              placeholder="To"
                            />
                          </div>
                          <div className="form-group col-xl-2 col-lg-2 col-md-12 mb-0 select2-lg">
                            <select
                              className="form-control select2-show-search border-bottom-0 w-100"
                              data-placeholder="Select"
                            >
                              <optgroup label="Categories">
                                <option>Adult</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6  col-md-12 mb-0 location">
                            <div className="row no-gutters">
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0 border-left select2-lg">
                                <select
                                  className="form-control select2-show-search border-bottom-0 w-100 border-left"
                                  data-placeholder="Select"
                                >
                                  <optgroup label="Categories">
                                    <option>Kids</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </optgroup>
                                </select>
                              </div>
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0">
                                <input
                                  className="form-control fc-datepicker border-left br-0 input-lg"
                                  placeholder="Journey Date"
                                  type="text"
                                />
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 mb-0">
                                <a
                                  className="btn btn-block btn-secondary fs-14 br-tl-0 br-bl-0 shadow-none btn-lg"
                                  href="#"
                                >
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab4">
                      <div className="search-background">
                        <div className="form row no-gutters">
                          <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0">
                            <input
                              className="form-control fc-datepicker border-right br-tr-0 br-br-0 input-lg"
                              placeholder="Pikup Date"
                              type="text"
                            />
                          </div>
                          <div className="form-group col-xl-3 col-lg-3 col-md-12 mb-0">
                            <input
                              type="text"
                              className="form-control br-0 border-right input-lg timepicker"
                              id="tp2"
                              placeholder="Hours"
                            />
                          </div>
                          <div className="form-group col-xl-6 col-lg-6  col-md-12 mb-0 location">
                            <div className="row no-gutters">
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0">
                                <input
                                  type="text"
                                  className="form-control  br-0 border-right input-lg"
                                  placeholder="Pickup Location"
                                />
                              </div>
                              <div className="form-group  col-xl-4 col-lg-4 col-md-12 mb-0">
                                <input
                                  type="text"
                                  className="form-control br-0 input-lg"
                                  placeholder="Drop Location"
                                />
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 mb-0">
                                <a
                                  className="btn btn-block btn-secondary fs-14 br-tl-0 br-bl-0 shadow-none btn-lg"
                                  href="#"
                                >
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4col-lg-4 col-md-4 d-block mx-auto">
                <div className="row mt-4">
                  <div className="col">
                    <a className="p-3 tour-service" href="index-hotel.html">
                      <img
                        src="../../assets/images/categories/hotel.png"
                        alt="img"
                        className="w-6 h-6 mb-0 text-center mx-auto"
                      />
                      <h6 style={{ color: "aliceblue" }}>Hotels</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /header-text */}
      </div>
    </>
  );
}

export default Header;
