import React from "react";
import YouTube from "react-youtube";
import Carousel from "react-elastic-carousel";
import VideoUrl from "../../assets/videos/Intro แนะนำตัว Full.mp4";
import { ItemVideo } from "../../data/ItemVideo";

function VideoReview() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <section className="sptb  bg-white">
      <div className="container">
        <div className="section-title">
          <h3>วีดีโอ รีวิว</h3>
        </div>
        <div
          className=""
          style={{ display: "flex", overflowY: "hidden", overflowX: "scroll" }}
        >
          {ItemVideo.map((item, index) => {
            return (
              <div
                className="card overflow-hidden"
                key={index}
                style={{ minWidth: "320px", marginRight: "1rem" }}
              >
                <YouTube videoId={item.videoId} opts={opts} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VideoReview;
