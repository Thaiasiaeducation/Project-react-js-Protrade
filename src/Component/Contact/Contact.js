import React from "react";

function Contact() {
  return (
    <>
      {/*Contact*/}
      <div className="sptb">
        <div className="container">
          <div className>
            <div className="row">
              <div className="col-lg-8 col-xl-8 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Get In Touch With Me</div>
                  </div>
                  <div className="card-body">
                    <label className="font-weight-semibold">
                      Reason For Contact <sup className="text-danger">*</sup>
                    </label>
                    <form>
                      <div className="form-group">
                        <select className="form-control select2">
                          <option value={0}>
                            Want to know More about the details
                          </option>
                          <option value={2}>Interested in Partnership</option>
                          <option value={3}>Bugs</option>
                          <option value={4}>Any Issue</option>
                          <option value={5}>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name1"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name2"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="example-textarea-input"
                          rows={6}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-12">
                <div className>
                  <div className="px-4">
                    <div className="map-header h-300 br-5 overflow-hidden">
                      <div className="map-header-layer" id="map2" />
                    </div>
                    <div className="item-user mt-5">
                      <div className="d-flex">
                        <span>
                          <i className="fa fa-map mr-3 mb-0 bg-primary text-white" />
                        </span>
                        <h6 className="leading-normal">
                          <span className="font-weight-semibold" />
                          <a href="#" className="text-body">
                            4102 Masonic Hill Road Little Rock Arkansas-727212
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="item-user mt-4">
                      <div className="d-flex">
                        <span>
                          <i className="fa fa-envelope mr-3 mb-0 bg-secondary text-white" />
                        </span>
                        <h6 className="leading-normal mt-1">
                          <span className="font-weight-semibold" />
                          <a href="#" className="text-body">
                            demo@gowell.com, domain@tougo.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="item-user mt-4">
                      <div className="d-flex">
                        <span>
                          <i className="fa fa-phone mr-3 mb-0 bg-success text-white" />
                        </span>
                        <h6 className="leading-normal mt-1">
                          <span className="font-weight-semibold" />
                          <a href="#" className="text-body">
                            +658 568-965-896, +658 635-965-965
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Contact*/}

      {/*Section*/}
      <section
        className="sptb cover-image patter-image patter-image bg-background-pattern"
        data-image-src="../../assets/images/pattern/9.png"
      >
        <div className="content-text mb-0">
          <div className="container">
            <div className="text-center">
              <span className="heading-style text-secondary">Subscribe</span>
              <h2 className="mb-2 font-weight-bold">Our Newsletter</h2>
              <p className="fs-16 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <div className="row">
                <div className="col-lg-8 mx-auto d-block">
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
                          className="btn btn-secondary btn-lg br-tr-5 br-br-5 pl-5 pr-5"
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
      </section>
      {/*Section*/}
    </>
  );
}

export default Contact;
