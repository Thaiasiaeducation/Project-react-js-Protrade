import React from "react";
import $ from "jquery";

function BlogNews() {
  $(".cover-image").each(function () {
    var attr = $(this).attr("data-image-src");

    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css("background", "url(" + attr + ") center center");
    }
  });
  return (
    <>
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            {/* <span className="heading-style text-secondary">New</span> */}
            <h2>Blog News</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6">
              <div
                className="card cover-image  place-tour-card place-tour-card2 overflow-hidden"
                data-image-src="../../assets/images/thumbnails/TestNews01.jpg"
              >
                <a className="absolute-link2" href="blog-details.html" />
                <div className="card-body p-5 pb-0 text-white content-text place-blog">
                  <h4 className="mt-2 mb-2 font-weight-semibold2 leading-normal">
                    <a href="blog-details.html" className="text-white">
                      Test News Condo Asia.
                    </a>
                  </h4>
                  <small className="text-warning font-weight-semibold2">
                    <i className="fe fe-tag mr-1" />
                    Blog
                  </small>
                  <small className="text-white ml-4">
                    <i className="fe fe-calendar mr-1" /> 27 Jul 2020
                  </small>
                  <small className="text-white ml-4">
                    <i className="fe fe-user mr-1" /> John Smith{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogNews;
