import React from "react";
import Carousel from "react-elastic-carousel";
import { Itempopular } from "../../data/Itempopular";
import { GrFormNext } from "react-icons/gr";
import Bedroom from "../../assets/images/Bedroom/Bedroom icon.png";
import Bethroom from "../../assets/images/Bedroom/Bathroom icon.png";
import Area from "../../assets/images/Bedroom/Area icon.png";
import Asoke from "../../assets/images/location/image 96.png";
import Sukhumvit from "../../assets/images/location/image 97.png";

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
          <div
            className="section-title"
            style={{
              paddingBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <h3>บ้านและคอนโดยอดนิยม</h3>
            <a href="#">
              ดูทั้งหมด{" "}
              <i>
                <GrFormNext />
              </i>{" "}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              overflowY: "hidden",
              overflowX: "scroll",
              padding: "20px",
              WebkitScrollSnapType: "none",
            }}
            breakPoints={breakPoints}
          >
            {Itempopular.map((Item, index) => {
              return (
                <>
                  <div
                    className="item mr-4"
                    key={index}
                    style={{
                      display: "flex",
                      height: "400px",
                      minWidth: "320px",
                    }}
                  >
                    <div
                      className="card mb-0 item-card2-card"
                      style={{ borderRadius: "1px" }}
                    >
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
                              <span className="border-right pr-3 mr-3">
                                <i className="icon icon-clock mr-1" /> 9 Days
                              </span>
                              <span className>
                                <i className="icon icon-event mr-1" /> 10 ตุลาคม
                              </span>
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              marginRight: "2rem",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <img
                              alt="img"
                              className="bedroom"
                              src={Bedroom}
                              style={{ width: "28px", height: "20px" }}
                            />
                            <h4 style={{ paddingTop: "10px" }}>2</h4>
                            <img
                              alt="img"
                              className="bedroom"
                              src={Bethroom}
                              style={{ width: "28px", height: "20px" }}
                            />
                            <h4 style={{ paddingTop: "10px" }}>2</h4>
                            <img
                              alt="img"
                              className="bedroom"
                              src={Area}
                              style={{ width: "28px", height: "20px" }}
                            />{" "}
                            <h4 style={{ paddingTop: "10px" }}>165 sq ft</h4>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-footer d-flex"
                        style={{ padding: "5px 5px" }}
                      >
                        <ul className="d-flex mb-1">
                          <li style={{ padding: "10px" }}>
                            <a
                              href="tours.html"
                              className="icons"
                              style={{ color: "#35ADAA", fontWeight: "bold" }}
                            >
                              3.5 ล้านบาท
                            </a>
                          </li>
                        </ul>
                        <div className="item-card2-rating mb-0 ml-auto">
                          <div
                            className="star-ratings start-ratings-main clearfix d-inline-flex"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={Sukhumvit}
                              alt="icon"
                              style={{ marginRight: "10px" }}
                            />
                            <p style={{ padding: "10px", marginBottom: "0" }}>
                              สุขุมวิท
                            </p>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Popular;
