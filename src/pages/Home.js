import React from "react";
import Customerssays from "../Component/Customerssays/Customerssays";
import Homepage from "../Component/index";
import Popular from "../Component/Popular/Popular";
import Ratedlocations from "../Component/Ratelocations/Ratedlocations";
import BlogNews from "../Component/BlogNews/BlogNews";
function Home() {
  return (
    <div>
      <Popular />
      <Customerssays />
      <Ratedlocations />
      <BlogNews />
    </div>
  );
}

export default Home;
