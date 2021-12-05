import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Itemreview } from "../../data/Itemreview";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Customerssays() {
  return (
    <>
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title">
            <h3 className="position-relative">ความเห็นของผู้ใช้งาน</h3>

            <div className="star-ratings start-ratings-main clearfix mt-1">
              <div className="stars stars-example-fontawesome stars-example-fontawesome-sm mr-2"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 testimonial-carousel-item">
              <div
                style={{
                  display: "flex",
                  overflowY: "hidden",
                  overflowY: "scroll",
                  overflow: "auto",
                }}
                breakPoints={breakPoints}
              >
                {Itemreview.map((slide, index) => {
                  return (
                    <div className="item ml-4" key={index}>
                      <div
                        className="card"
                        style={{
                          minWidth: "380px",
                          WebkitOverflowScrolling: "-moz-initial",
                        }}
                      >
                        <div className="carosel-shape bg-primary-transparent" />
                        <div className="card-body">
                          <div className="d-flex">
                            <img
                              src={slide.Image}
                              alt="image"
                              className="avatar avatar-xxl brround mr-3 spcl-ie-img"
                            />
                            <div className="mt-4 mt-md-0">
                              <h3 className="fs-16 font-weight-semibold2 mb-0">
                                {slide.name}
                              </h3>
                              <div className="star-ratings start-ratings-main clearfix mt-1">
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
                                </div>
                              </div>
                              <p className="mt-2">{slide.review}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customerssays;
