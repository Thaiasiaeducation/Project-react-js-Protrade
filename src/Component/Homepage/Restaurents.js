import React from "react";

function Restaurents() {
  return (
    <>
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <span className="heading-style text-secondary">Near By </span>
            <h2>Restaurents and Hotels </h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="owl-carousel owl-carousel-icons">
            <div className="item">
              <div className="card mb-0 overflow-hidden">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <i className="fa fa-bolt" />
                  </span>
                </div>
                <div className="item-card2-img">
                  <a href="hotels.html" className="absolute-link" />
                  <img
                    src="../../assets/images/products/products/f2.jpg"
                    alt="img"
                    className="cover-image"
                  />
                  <div className="item-card2-icons">
                    <a href="#" className="item-card2-icons-l">
                      <i className="fa fa-cutlery" />
                    </a>
                    <a href="#" className="item-card2-icons-r">
                      <i className="fa fa fa-heart-o" />
                    </a>
                  </div>
                  <div className="blog--category">Restaurant</div>
                </div>
                <div className="card-body">
                  <div className="item-card2">
                    <div className="item-card2-desc">
                      <div className="item-card2-text">
                        <a href="hotels.html" className="text-dark">
                          <h4 className="mb-0 fs-16 font-weight-bold">
                            Somik Restaurant
                          </h4>
                        </a>
                      </div>
                      <p className="pt-2 mb-0">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem{" "}
                      </p>
                      <div className="pt-2">
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-map-pin mr-2 d-inline-block" />
                            Florida, USA
                          </div>
                        </a>
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-phone mr-2 d-inline-block" />
                            +63 658-865-965
                          </div>
                        </a>
                        <div className="pb-0 pt-0 mb-2 mt-2">
                          <i className="fe fe-clock mr-2 d-inline-block" />
                          10am - 9pm
                          <a>
                            {" "}
                            <span className="badge badge-success ml-2 fs-13">
                              Open Now
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex">
                  <div className="item-card2-footer">
                    <div className="item-card2-footer-u">
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
                          (25 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a className href="#">
                      <i className="fa fa-comment-o" /> 63
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card mb-0 overflow-hidden">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <i className="fa fa-bolt" />
                  </span>
                </div>
                <div className="item-card2-img">
                  <a href="hotels.html" className="absolute-link" />
                  <img
                    src="../../assets/images/products/products/h4.jpg"
                    alt="img"
                    className="cover-image"
                  />
                  <div className="item-card2-icons">
                    <a href="#" className="item-card2-icons-l">
                      <i className="fa fa-home" />
                    </a>
                    <a href="#" className="item-card2-icons-r">
                      <i className="fa fa fa-heart-o" />
                    </a>
                  </div>
                  <div className="blog--category">Hotel</div>
                </div>
                <div className="card-body">
                  <div className="item-card2">
                    <div className="item-card2-desc">
                      <div className="item-card2-text">
                        <a href="hotels.html" className="text-dark">
                          <h4 className="mb-0 fs-16 font-weight-bold">
                            GilkonStar Hotel
                          </h4>
                        </a>
                      </div>
                      <p className="pt-2 mb-0">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem{" "}
                      </p>
                      <div className="pt-2">
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-map-pin mr-2 d-inline-block" />
                            Hollowstead, USA
                          </div>
                        </a>
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-phone mr-2 d-inline-block" />
                            +63 658-965-865
                          </div>
                        </a>
                        <div className="pb-0 pt-0 mb-2 mt-2">
                          <i className="fe fe-clock mr-2 d-inline-block" />
                          9am - 9pm
                          <a>
                            {" "}
                            <span className="badge badge-success ml-2 fs-13">
                              Open Now
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex">
                  <div className="item-card2-footer ">
                    <div className="item-card2-footer-u">
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
                          (27 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a className href="#">
                      <i className="fa fa-comment-o" /> 54
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card mb-0 overflow-hidden">
                <div className="item-card2-img">
                  <a href="hotels.html" className="absolute-link" />
                  <img
                    src="../../assets/images/products/products/h5.jpg"
                    alt="img"
                    className="cover-image"
                  />
                  <div className="item-card2-icons">
                    <a href="#" className="item-card2-icons-l">
                      <i className="fa fa-home" />
                    </a>
                    <a href="#" className="item-card2-icons-r">
                      <i className="fa fa fa-heart-o" />
                    </a>
                  </div>
                  <div className="blog--category">Hotel</div>
                </div>
                <div className="card-body">
                  <div className="item-card2">
                    <div className="item-card2-desc">
                      <div className="item-card2-text">
                        <a href="hotels.html" className="text-dark">
                          <h4 className="mb-0 fs-16 font-weight-bold">
                            Hotel Xina
                          </h4>
                        </a>
                      </div>
                      <p className="pt-2 mb-0">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem{" "}
                      </p>
                      <div className="pt-2">
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-map-pin mr-2 d-inline-block" />
                            Mannorstead, China
                          </div>
                        </a>
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-phone mr-2 d-inline-block" />
                            +63 965-865-956
                          </div>
                        </a>
                        <div className="pb-0 pt-0 mb-2 mt-2">
                          <i className="fe fe-clock mr-2 d-inline-block" />
                          8am - 6pm
                          <a>
                            {" "}
                            <span className="badge badge-danger ml-2 fs-13">
                              Closed
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex">
                  <div className="item-card2-footer">
                    <div className="item-card2-footer-u">
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
                          (75 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a className href="#">
                      <i className="fa fa-comment-o" /> 49
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card mb-0 overflow-hidden">
                <div className="item-card2-img">
                  <a href="hotels.html" className="absolute-link" />
                  <img
                    src="../../assets/images/products/products/h1.jpg"
                    alt="img"
                    className="cover-image"
                  />
                  <div className="item-card2-icons">
                    <a href="#" className="item-card2-icons-l">
                      <i className="fa fa-home" />
                    </a>
                    <a href="#" className="item-card2-icons-r">
                      <i className="fa fa fa-heart-o" />
                    </a>
                  </div>
                  <div className="blog--category">Hotel</div>
                </div>
                <div className="card-body">
                  <div className="item-card2">
                    <div className="item-card2-desc">
                      <div className="item-card2-text">
                        <a href="hotels.html" className="text-dark">
                          <h4 className="mb-0 fs-16 font-weight-bold">
                            Hotel Rome{" "}
                          </h4>
                        </a>
                      </div>
                      <p className="pt-2 mb-0">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem{" "}
                      </p>
                      <div className="pt-2">
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-map-pin mr-2 d-inline-block" />
                            East Cafe, UK
                          </div>
                        </a>
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-phone mr-2 d-inline-block" />
                            +63 968-569-854
                          </div>
                        </a>
                        <div className="pb-0 pt-0 mb-2 mt-2">
                          <i className="fe fe-clock mr-2 d-inline-block" />
                          9am - 7pm
                          <a>
                            {" "}
                            <span className="badge badge-success ml-2 fs-13">
                              Open Now
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex">
                  <div className="item-card2-footer">
                    <div className="item-card2-footer-u">
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
                          (14 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a className href="#">
                      <i className="fa fa-comment-o" /> 32
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card mb-0 overflow-hidden">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <i className="fa fa-bolt" />
                  </span>
                </div>
                <div className="item-card2-img">
                  <a href="hotels.html" className="absolute-link" />
                  <img
                    src="../../assets/images/products/products/f1.jpg"
                    alt="img"
                    className="cover-image"
                  />
                  <div className="item-card2-icons">
                    <a href="#" className="item-card2-icons-l">
                      <i className="fa fa-cutlery" />
                    </a>
                    <a href="#" className="item-card2-icons-r">
                      <i className="fa fa fa-heart-o" />
                    </a>
                  </div>
                  <div className="blog--category">Restaurant</div>
                </div>
                <div className="card-body">
                  <div className="item-card2">
                    <div className="item-card2-desc">
                      <div className="item-card2-text">
                        <a href="hotels.html" className="text-dark">
                          <h4 className="mb-0 fs-16 font-weight-bold">
                            Somik Restaurant
                          </h4>
                        </a>
                      </div>
                      <p className="pt-2 mb-0">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem{" "}
                      </p>
                      <div className="pt-2">
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-map-pin mr-2 d-inline-block" />
                            Factdale, Canada
                          </div>
                        </a>
                        <a className="mb-1" href="#">
                          <div className="pb-0 pt-0 mb-2 mt-2">
                            <i className="fe fe-phone mr-2 d-inline-block" />
                            +63 854-968-854
                          </div>
                        </a>
                        <div className="pb-0 pt-0 mb-2 mt-2">
                          <i className="fe fe-clock mr-2 d-inline-block" />
                          10am - 7pm
                          <a>
                            {" "}
                            <span className="badge badge-danger ml-2 fs-13">
                              Closed
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex">
                  <div className="item-card2-footer">
                    <div className="item-card2-footer-u">
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
                          (42 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a className href="#">
                      <i className="fa fa-comment-o" /> 42
                    </a>
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

export default Restaurents;
