import React from "react";

import simple from "../../assets/videos/pexels-traveling-on-the-go-(worldwide)-8313978.mp4";

function Header() {
  return (
    <div className="header" style={{ margin: "0" }}>
      <div
        className="container"
        style={{ position: "relative", marginTop: "4rem" }}
      >
        <div
          className="text-left text-white mb-4"
          style={{ position: "absolute", zIndex: "10", marginTop: "10rem" }}
        >
          <h2 style={{ color: "#7B551B" }}>
            ขายบ้านและคอนโดโครงการดีกว่า 100 โครงการ
          </h2>
          <h3 style={{ color: "#7B551B" }}>
            ค้นหาตามทำเลที่คุณต้องการด้านล่างนี้
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#">Explore</a>
        </div>
      </div>
      <video
        src={simple}
        muted
        loop
        autoPlay
        style={{
          objectFit: "cover",
          opacity: "0.8",
          height: "480px",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Header;
