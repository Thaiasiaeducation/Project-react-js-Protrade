import React from "react";
import Customerssays from "../Component/Customerssays/Customerssays";
import Homepage from "../Component/index";
import Popular from "../Component/Popular/Popular";
import Ratedlocations from "../Component/Ratelocations/Ratedlocations";
import BlogNews from "../Component/BlogNews/BlogNews";
import Header from "../Component/Hero/Header";
import Mobaileapp from "../Component/Mobileapp/Mobileapp";
import Categories from "../Component/Categories/Categories";
function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Popular />
      <Customerssays />
      <Ratedlocations />
      <BlogNews />
      <Mobaileapp />
    </div>
  );
}

export default Home;
