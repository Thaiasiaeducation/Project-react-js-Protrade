import React from "react";

function Mobileapp() {
  return (
    <>
      <section
        className="about-1 cover-image sptb patter-image bg-background-pattern"
        data-image-src="../../assets/images/pattern/9.png"
      >
        <div className="container content-text">
          <div className="section-title center-block text-center">
            <h3>Mobile App</h3>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center text-wrap">
                <div className="btn-list">
                  <a
                    style={{
                      background: "#fbfbfb",
                      boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
                    }}
                    href="#"
                    className="btn btn-lg mb-sm-0 d-inline-flex pb-2 h-100"
                  >
                    <i className="fa fa-apple fa-1x mr-2 fs-18 mt-1" /> App
                    Store
                  </a>
                  <a
                    style={{
                      background: "#689f38",
                      boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
                      color: "#ffffff",
                    }}
                    href="#"
                    className="btn btn-lg mb-sm-0 d-inline-flex pb-2 h-100"
                  >
                    <i className="fa fa-android fs-18 fa-1x mr-2  mt-1" />{" "}
                    Google Play
                  </a>
                  <a
                    style={{
                      backgroundColor: "#1e73be",
                      color: "#ffff",
                      boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
                    }}
                    href="#"
                    className="btn  btn-lg mb-0 d-inline-flex pb-2 h-100"
                  >
                    <i className="fa fa-windows  fs-18 fa-1x mr-2  mt-1" />{" "}
                    Windows
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mobileapp;
