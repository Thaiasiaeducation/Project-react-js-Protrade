import React from "react";
import $ from "jquery";

$(".cover-image").each(function () {
  var attr = $(this).attr("data-image-src");
  if (typeof attr !== typeof undefined && attr !== false) {
    $(this).css("background", "url(" + attr + ") center center");
  }
});

function Header() {
  return (
    <>
      {/*Section*/}
      <div id="main">
        <section
          className="section-first banner-1 cover-image sptb-21 sptb-tab bg-background2"
          data-vidbg-bg="mp4: ../../assets/video/6.mp4, webm: ../../assets/video/6.webm, poster: ../../assets/video/video-img.jpg"
          data-vidbg-options="loop: true, muted: true, overlay: false"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white mb-7">
                <h1 className="mb-0 leading-normal">
                  Plan Your Destination Trip
                </h1>
                <p>
                  Find the world's largest collection of tours &amp; travel
                  Packages.
                </p>
              </div>
            </div>
          </div>
          {/* /header-text */}
        </section>
      </div>
      {/*Section*/}
    </>
  );
}

export default Header;
