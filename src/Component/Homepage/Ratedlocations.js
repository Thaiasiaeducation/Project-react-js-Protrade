import React from "react";
import Carousel from "react-elastic-carousel";
import { Itemlocation } from "./Itemlocation";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function Ratedlocations() {
  return (
    <>
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            {/* <span className="heading-style text-secondary">Best Top</span> */}
            <h2>Popular Locations</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <Carousel breakPoints={breakPoints}>
            {Itemlocation.map((Item, index) => {
              return (
                <>
                  <div className="item mr-2 ml-2">
                    <div className="item-card overflow-hidden mb-0">
                      <div className="item-card-desc">
                        <a href="tour-list.html" />
                        <div className="card text-center overflow-hidden mb-0">
                          <div className="card-img">
                            <img
                              src={Item.image}
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card-text text-left">
                            <div className="star-ratings start-ratings-main clearfix">
                              <div className="stars stars-example-fontawesome stars-example-fontawesome-sm text-left">
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
                            <h4 className="mb-2">{Item.title}</h4>
                            <small className="text-white">
                              <i className="fe fe-map-pin" /> 8 Cities{" "}
                              <i className="ml-3 fe fe-eye" /> 140+ Tour Places{" "}
                            </small>
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

export default Ratedlocations;
