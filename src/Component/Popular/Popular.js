import React from "react";
import Carousel from "react-elastic-carousel";
import { Itempopular } from "../../data/Itempopular";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Popular() {
  return (
    <>
      <section className="sptb">
        <div className="container">
          <div className="section-title">
            <h3 style={{ left: "1rem" }}>บ้านและคอนโดยอดนิยม</h3>
          </div>
          <Carousel breakPoints={breakPoints}>
            {Itempopular.map((Item, index) => {
              return (
                <>
                  <div className="item mr-4">
                    <div className="card mb-0 item-card2-card">
                      <div
                        id="image-slider"
                        className="carousel"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src={Item.image1}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={Item.image2}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={Item.image3}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={Item.image4}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={Item.image5}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                        </div>

                        <div
                          className="item-card2-img1"
                          data-toggle="modal"
                          data-target="#gallery"
                        >
                          <span className="badge bg-dark-transparent6 text-white fs-14 font-weight-semibold2">
                            <i className="fe fe-image " /> 5
                          </span>
                        </div>
                      </div>
                      <div className="item-card2-icons">
                        <a
                          href="#"
                          className="item-card2-icons-l bg-primary mr-1"
                        >
                          {" "}
                          <i className="fa fa-plane" />
                        </a>
                        <a href="#" class="item-card2-icons-l bg-primary mr-1">
                          {" "}
                          <i class="fa fa-bus"></i>
                        </a>
                        <a href="#" className="item-card2-icons-r bg-secondary">
                          <i className="fa fa fa-heart-o" />
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="tours.html" className="text-dark">
                                <h4 className="font-weight-bold mb-3">
                                  บ้านโครงการ
                                </h4>
                              </a>
                            </div>
                            <p className="fs-14 mb-1">
                              <b>{Item.days}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex">
                        <ul className="d-flex mb-1">
                          <li className>
                            <a href="tours.html" className="icons">
                              3.5 ล้าน
                            </a>
                          </li>
                        </ul>
                        <div className="item-card2-rating mb-0 ml-auto">
                          <div className="star-ratings start-ratings-main clearfix d-inline-flex">
                            <i className="fe fe-map-pin text-muted mr-1" />
                            สุขุมวิท
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="gallery"
                    tabIndex={-1}
                    role="dialog"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="product-slider modal-body p-2">
                          <div
                            id="carousel"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <a
                              className="gallery-close-button"
                              href="#"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <i className="fe fe-x" />
                            </a>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src={Item.image1} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image2} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image3} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image4} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image5} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image1} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image2} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image3} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image4} alt="img" />{" "}
                              </div>
                              <div className="carousel-item">
                                <img src={Item.image5} alt="img" />{" "}
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carousel"
                              role="button"
                              data-slide="prev"
                            >
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carousel"
                              role="button"
                              data-slide="next"
                            >
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                          <div className="clearfix">
                            <div
                              id="thumbcarousel"
                              className="carousel slide product-slide-thumb"
                              data-interval="false"
                            >
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={0}
                                    className="thumb"
                                  >
                                    <img src={Item.image1} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={1}
                                    className="thumb"
                                  >
                                    <img src={Item.image2} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={2}
                                    className="thumb"
                                  >
                                    <img src={Item.image3} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={3}
                                    className="thumb"
                                  >
                                    <img src={Item.image4} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={4}
                                    className="thumb"
                                  >
                                    <img src={Item.image5} alt="img" />
                                  </div>
                                </div>
                                <div className="carousel-item ">
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={0}
                                    className="thumb"
                                  >
                                    <img src={Item.image1} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={1}
                                    className="thumb"
                                  >
                                    <img src={Item.image2} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={2}
                                    className="thumb"
                                  >
                                    <img src={Item.image3} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={3}
                                    className="thumb"
                                  >
                                    <img src={Item.image4} alt="img" />
                                  </div>
                                  <div
                                    data-target="#carousel"
                                    data-slide-to={4}
                                    className="thumb"
                                  >
                                    <img src={Item.image5} alt="img" />
                                  </div>
                                </div>
                              </div>
                              <a
                                className="carousel-control-prev"
                                href="#thumbcarousel"
                                role="button"
                                data-slide="prev"
                              >
                                <i
                                  className="fa fa-angle-left"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="carousel-control-next"
                                href="#thumbcarousel"
                                role="button"
                                data-slide="next"
                              >
                                <i
                                  className="fa fa-angle-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Popular;
