import React from "react";

function Favourite() {
  return (
    <>
      <section className="sptb">
        <div className="container">
          <div className="section-title center-block text-center">
            <span className="heading-style text-secondary">Find Your</span>
            <h2>Favourite Destination</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div>
            <div className="items-gallery">
              <div className="items-blog-tab text-center">
                <div className="items-blog-tab-heading row mb-0">
                  <div className="col-12">
                    <ul className="nav items-blog-tab-menu">
                      <li className>
                        <a
                          href="#tab-1"
                          className="active show"
                          data-toggle="tab"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a href="#tab-2" data-toggle="tab" className>
                          Historical
                        </a>
                      </li>
                      <li>
                        <a href="#tab-3" data-toggle="tab" className>
                          Weekend Trip
                        </a>
                      </li>
                      <li>
                        <a href="#tab-4" data-toggle="tab" className>
                          Special Tour
                        </a>
                      </li>
                      <li>
                        <a href="#tab-5" data-toggle="tab" className>
                          Holiday Trip
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/12.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="item-card8-overlaytext">
                              <h6 className="mb-0 bg-warning">Historical</h6>
                            </div>
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    45 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Historical Places Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 615 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Canada.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/male/2.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Elizabeth
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-pink op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/6.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="item-card8-overlaytext">
                              <h6 className="mb-0">Special Tour</h6>
                            </div>
                            <div className="special-offer bg-secondary text-white">
                              <div className="percentage">35%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    65 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                America Special Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 780 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                America.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/1.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Jodie Melton
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/2.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-success text-white">
                              <div className="percentage">50%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-success mb-0">Holiday Trip</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    76 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                France Holiday Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                France.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/19.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Elizabeth
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/12.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-primary mb-0">Historical</h6>
                            </div>
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Canada Historical Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Canada.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/2.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Thu Astudillo
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/11.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-secondary mb-0">Historical</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                America Historical Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                America.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/male/2.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Shelton Vause{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/10.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-info mb-0">Historical</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                India Historical Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                India.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/3.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Ellena Beachy{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/9.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-info mb-0">Weekend</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Canada Weekend Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Canada.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/5.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Vania Pease{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/8.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-primary mb-0">Weekend</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Spain Weekend Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Spain.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/male/5.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Chery Fogle{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-lg-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/7.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-secondary mb-0">Weekend</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Americal Weekend Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                America.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/6.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Leonila Payson{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/6.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-primary mb-0">Special Tour</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Canada Special Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Canada.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/male/7.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Margarita Franklin{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/5.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-info mb-0">Special Tour</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Spain Special Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Spain.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/male/8.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Hobert Dillon{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/4.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-secondary mb-0">
                                Special Tour
                              </h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                London Special Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                London.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/10.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Angele Vorpahl{" "}
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img  br-tr-4 br-tl-4">
                            <img
                              src="../../assets/images/categories/category/3.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-info mb-0">Holiday Trip</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Italy Holiday Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Italy.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/19.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Elizabeth
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/2.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-secondary mb-0">
                                Holiday Trip
                              </h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                France Holiday Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                France.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/19.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Elizabeth
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0 overflow-hidden">
                          <a href="tours.html" className="absolute-link2" />
                          <div className="item-card8-img">
                            <img
                              src="../../assets/images/categories/category/1.png"
                              alt="img"
                              className="cover-image"
                            />
                            <div className="special-offer bg-warning">
                              <div className="percentage">23%</div>
                              <div className="percentage-off">
                                <span>SPECIAL</span> OFF
                              </div>
                            </div>
                            <div className="item-card8-overlaytext">
                              <h6 className="bg-primary mb-0">Holiday Trip</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <div className="mb-1">
                                <div className="d-flex">
                                  <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                                    <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2">
                                      <select
                                        className="example-fontawesome"
                                        name="rating"
                                        autoComplete="off"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4} selected>
                                          4
                                        </option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>{" "}
                                    42 Reviews
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-weight-semibold2">
                                Canada Holiday Tour
                              </h4>
                              <p className="text-muted mb-2 fs-12 ml-auto">
                                <i className="fe fe-eye mr-1" /> 875 Visiting
                                Places <i className="fe fe-map-pin mr-1 ml-3" />{" "}
                                Canada.
                              </p>
                              <p className="mb-0 fs-13">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="footerimg d-flex mt-0 mb-0">
                              <div className="d-flex footerimg-l mb-0">
                                <img
                                  src="../../assets/images/faces/female/19.jpg"
                                  alt="image"
                                  className="avatar brround  mr-2"
                                />
                                <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                                  Elizabeth
                                  <i
                                    className="icon icon-check text-success fs-12 ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="verified"
                                  />
                                </h5>
                              </div>
                              <div className="mt-2 footerimg-r ml-auto">
                                <a href="#" className="text-muted op-5">
                                  <i className="fa fa-heart" />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Favourite;
