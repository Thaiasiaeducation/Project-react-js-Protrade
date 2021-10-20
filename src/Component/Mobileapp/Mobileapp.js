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
            {/* <span className="heading-style text-secondary">Download</span> */}
            <h2>Mobile App</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center text-wrap">
                <div className="btn-list">
                  <a
                    href="#"
                    className="btn btn-secondary btn-lg mb-sm-0 d-inline-flex pb-2 h-100"
                  >
                    <i className="fa fa-apple fa-1x mr-2 fs-18 mt-1" /> App
                    Store
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-lg mb-sm-0 d-inline-flex pb-2 h-100"
                  >
                    <i className="fa fa-android fs-18 fa-1x mr-2  mt-1" />{" "}
                    Google Play
                  </a>
                  <a
                    href="#"
                    className="btn btn-info btn-lg mb-0 d-inline-flex pb-2 h-100"
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
