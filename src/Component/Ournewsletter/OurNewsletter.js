import React from "react";

function OurNewsletter() {
  return (
    <div>
      <section>
        <div
          className="cover-image sptb bg-background-color"
          data-image-src="../../assets/images/banners/banner10.jpg"
        >
          <div className="content-text mb-0">
            <div className="content-text mb-0">
              <div className="container">
                <div className="text-center text-white ">
                  <h2 className="mb-2 font-weight-bold fs-40">
                    Our Newsletter
                  </h2>

                  <div className="row">
                    <div className="col-lg-7 mx-auto d-block">
                      <div className="mt-5">
                        <div className="input-group sub-input mt-1">
                          <input
                            type="text"
                            className="form-control input-lg "
                            placeholder="Enter your Email"
                          />
                          <div className="input-group-append ">
                            <button
                              type="button"
                              className="btn btn-secondary btn-lg br-tr-3 br-br-3 pl-5 pr-5 font-weight-semibold2"
                            >
                              Subscribe
                            </button>
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
    </div>
  );
}

export default OurNewsletter;
